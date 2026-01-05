// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { personalInfo, labels } from '../data';

const Contact = ({ lang }) => {
  const t = labels[lang].contact;
  const [copied, setCopied] = useState(false);

  // State pentru formular
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  // Functie "Fake Submit" - deschide clientul de mail
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page-container">
      <h2 className="section-title">{labels[lang].titles.contact}</h2>

      <div className="contact-wrapper">
        
        {/* COLOANA STANGA: INFO */}
        <div className="contact-info-card">
          <h3 style={{marginBottom: '20px', color: 'var(--primary-color)'}}>
            {lang === 'en' ? "Let's work together!" : "Hai să colaborăm!"}
          </h3>
          <p style={{color: 'var(--secondary-text)', marginBottom: '30px'}}>
            {lang === 'en' 
              ? "I'm currently open to new opportunities in Embedded Systems, Automotive, and FPGA development."
              : "Sunt deschis la noi oportunități în Sisteme Embedded, Automotive și dezvoltare FPGA."}
          </p>

          <div className="info-item">
            <div className="icon-box"><Mail size={20} /></div>
            <div style={{flex: 1}}>
              <span className="label">Email</span>
              <div className="value-row">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <button className="copy-btn" onClick={copyToClipboard} title="Copy Email">
                  {copied ? <Check size={16} color="green"/> : <Copy size={16}/>}
                </button>
              </div>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><Phone size={20} /></div>
            <div>
              <span className="label">{lang === 'en' ? "Phone" : "Telefon"}</span>
              <p className="value">{personalInfo.phone}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><MapPin size={20} /></div>
            <div>
              <span className="label">{lang === 'en' ? "Location" : "Locație"}</span>
              <p className="value">{personalInfo.location}</p>
            </div>
          </div>

          <div className="social-links-row">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn github">
              <Github size={24} />
            </a>
            {/* Daca nu ai LinkedIn, poti sterge linia de mai jos sau o lasi ca placeholder */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn linkedin">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* COLOANA DREAPTA: FORMULAR */}
        <form className="contact-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-btn">
            <Send size={18} />
            {labels[lang].buttons.sendMessage}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
