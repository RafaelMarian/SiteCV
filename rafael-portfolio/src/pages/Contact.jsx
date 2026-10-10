// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Facebook, Instagram, Send, Copy, Check, Loader, AlertCircle } from 'lucide-react';
import { personalInfo, labels } from '../data';
import AndroidIcon from '../components/AndroidIcon';
import { TikTokIcon, ProductHuntIcon, XBrandIcon } from '../components/SocialIcons';

const Contact = ({ lang }) => {
  const t = labels[lang].contact;
  const [copied, setCopied] = useState(false);
  const form = useRef();

  // State pentru formular si trimitere
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState({ status: 'idle', message: '' }); // idle, sending, success, error

  // Functie pentru copiere email
  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Functie care gestioneaza input-urile
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Functie de trimitere email cu EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey ||
        serviceID.startsWith('your_') ||
        templateID.startsWith('your_') ||
        publicKey.startsWith('your_')) {
      setSubmissionStatus({
        status: 'error',
        message: lang === 'en'
          ? 'Contact form is not configured yet. Please email me directly.'
          : 'Formularul nu e configurat încă. Te rog scrie-mi direct pe email.',
      });
      return;
    }

    setSubmissionStatus({ status: 'sending', message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmissionStatus({ status: 'success', message: lang === 'en' ? 'Message sent successfully!' : 'Mesaj trimis cu succes!' });
          setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
          console.log(error.text);
          setSubmissionStatus({ status: 'error', message: lang === 'en' ? 'Failed to send message. Please try again.' : 'Eroare la trimitere. Vă rugăm să încercați din nou.' });
      });
  };

  return (
    <div className="contact-page-container">
      <h2 className="section-title">{labels[lang].titles.contact}</h2>

      <div className="contact-wrapper">
        
        {/* COLOANA STANGA: INFO */}
        <div className="contact-info-card">
           {/* ... (codul pentru informatii ramane neschimbat) ... */}
           <h3 style={{marginBottom: '20px', color: 'var(--text-color)'}}>
            {lang === 'en' ? "Let's work together!" : "Hai să colaborăm!"}
          </h3>
          <p style={{color: 'var(--secondary-text)', marginBottom: '30px'}}>
            {lang === 'en' 
              ? "If you have an interesting project in Embedded Systems, Automotive, FPGA, or mobile apps, feel free to reach out."
              : "Dacă ai un proiect interesant în Embedded Systems, Automotive, FPGA sau aplicații mobile, scrie-mi cu încredere."}
          </p>

          <div className="info-item">
            <div className="icon-box"><Mail size={18} strokeWidth={1.5} /></div>
            <div style={{flex: 1}}>
              <span className="label">Email</span>
              <div className="value-row">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <button className="copy-btn" onClick={copyToClipboard} title="Copy Email">
                  {copied ? <Check size={16} /> : <Copy size={16}/>}
                </button>
              </div>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><Phone size={18} strokeWidth={1.5} /></div>
            <div>
              <span className="label">{lang === 'en' ? "Phone" : "Telefon"}</span>
              <p className="value">{personalInfo.phone}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><MapPin size={18} strokeWidth={1.5} /></div>
            <div>
              <span className="label">{lang === 'en' ? "Location" : "Locație"}</span>
              <p className="value">{personalInfo.location}</p>
            </div>
          </div>

          <div className="social-links-row">
            <span className="social-section-label">{lang === 'en' ? 'Find me online' : 'Mă găsești online'}</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn github" aria-label="GitHub">
              <Github size={20} strokeWidth={1.75} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={1.75} />
            </a>
            <a href={personalInfo.playStore} target="_blank" rel="noopener noreferrer" className="social-btn playstore" aria-label="Google Play">
              <AndroidIcon size={20} />
            </a>
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" className="social-btn youtube" aria-label="YouTube">
              <Youtube size={20} strokeWidth={1.75} />
            </a>
            <a href={personalInfo.x} target="_blank" rel="noopener noreferrer" className="social-btn x-com" aria-label="X (@vanrasystems)">
              <XBrandIcon size={17} />
            </a>
            <a href={personalInfo.tiktok} target="_blank" rel="noopener noreferrer" className="social-btn tiktok" aria-label="TikTok (@vanrasystems)">
              <TikTokIcon size={19} />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.75} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.75} />
            </a>
            <a href={personalInfo.producthunt} target="_blank" rel="noopener noreferrer" className="social-btn producthunt" aria-label="Product Hunt">
              <ProductHuntIcon size={19} />
            </a>
          </div>
        </div>

        {/* COLOANA DREAPTA: FORMULAR */}
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <h3>{t.hello}</h3>
          
          <div className="form-group">
            <label>{t.name}</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder={lang === 'en' ? "John Doe" : "Ion Popescu"}
            />
          </div>

          <div className="form-group">
            <label>{t.email}</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label>{t.subject}</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              placeholder={lang === 'en' ? "Project Inquiry" : "Propunere Proiect"}
            />
          </div>

          <div className="form-group">
            <label>{t.message}</label>
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={submissionStatus.status === 'sending'}>
            {submissionStatus.status === 'sending' ? (
              <><Loader size={18} className="spin" /> {lang === 'en' ? 'Sending...' : 'Se trimite...'}</>
            ) : (
              <><Send size={18} /> {labels[lang].buttons.sendMessage}</>
            )}
          </button>

          {/* Mesaj de status */}
          {submissionStatus.status === 'success' && (
            <p className="status-msg success"><Check size={16} /> {submissionStatus.message}</p>
          )}
          {submissionStatus.status === 'error' && (
            <p className="status-msg error"><AlertCircle size={16} /> {submissionStatus.message}</p>
          )}
        </form>

      </div>
    </div>
  );
};

export default Contact;
