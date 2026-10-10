// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Cpu, Smartphone,
  Briefcase, BookOpen, Layers, Youtube, Linkedin, Github,
} from 'lucide-react';
import { personalInfo, labels } from '../data';
import AppLogoStack from '../components/AppLogoStack';
import ProfilePhoto from '../components/ProfilePhoto';
import AndroidIcon from '../components/AndroidIcon';

const Home = ({ lang }) => {

  // Texte specifice pentru Home (le definim aici pentru simplitate)
  const content = {
    en: {
      greeting: "Hello, I'm",
      description: "Embedded Software Engineer passionate about automotive technologies, FPGA systems, and indie development. I turn complex problems into efficient, scalable solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      followMe: "Follow me",
      founderPrefix: "Founder of",
      founderSuffix: "Android apps & embedded systems",
      sections: {
        exp: { title: "Work Experience", desc: "My professional journey in the Automotive Industry and beyond." },
        proj: { title: "Projects Showcase", desc: "A collection of my work: Embedded, FPGA, and Web Apps." },
        edu: { title: "Education", desc: "Master's and Bachelor's degrees in Electronics." }
      },
      skills: {
        emb: "Embedded Systems",
        web: "Android & iOS Development"
      }
    },
    ro: {
      greeting: "Salut, sunt",
      description: "Inginer Software Embedded pasionat de tehnologii automotive, sisteme FPGA și dezvoltare indie. Transform probleme complexe în soluții eficiente și scalabile.",
      viewProjects: "Vezi Proiecte",
      contactMe: "Contact",
      downloadCv: "Descarcă CV",
      followMe: "Urmărește-mă",
      founderPrefix: "Fondator",
      founderSuffix: "aplicații Android & sisteme embedded",
      sections: {
        exp: { title: "Experiență", desc: "Parcursul meu profesional în industria Auto și nu numai." },
        proj: { title: "Portofoliu Proiecte", desc: "O colecție a lucrărilor mele: Embedded, FPGA și Aplicații Web." },
        edu: { title: "Educație", desc: "Studii de Master și Licență în Electronică." }
      },
      skills: {
        emb: "Sisteme Embedded",
        web: "Dezvoltare Android & iOS"
      }
    }
  };

  const txt = content[lang];

  return (
    <div className="home-container">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="hero-greeting">{txt.greeting}</span>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">{personalInfo.role}</h2>
          <p className="hero-founder">
            <img src="/brand/vanra-mark-dark.svg" alt="" className="hero-founder-mark hero-founder-mark--dark" width="18" height="18" />
            <img src="/brand/vanra-mark-light.svg" alt="" className="hero-founder-mark hero-founder-mark--light" width="18" height="18" />
            <span>{txt.founderPrefix} <strong>Vanra Systems</strong> — {txt.founderSuffix}</span>
          </p>
          <p className="hero-desc">{txt.description}</p>
          
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary-lg">
              {txt.viewProjects} <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary-lg">
              {txt.contactMe}
            </Link>
            {/* Buton Download CV - Poti pune link-ul catre PDF-ul tau in href */}
            <a href="/cv-rafael.pdf" target="_blank" rel="noreferrer" className="btn-outline-lg">
              <Download size={20} /> CV
            </a>
          </div>

          <div className="hero-social" role="navigation" aria-label={txt.followMe}>
            <span className="hero-social-label">{txt.followMe}</span>
            <div className="hero-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                aria-label="GitHub"
              >
                <Github size={20} strokeWidth={1.75} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.75} />
              </a>
              <a
                href={personalInfo.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn playstore"
                aria-label="Google Play"
              >
                <AndroidIcon size={20} />
              </a>
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
                aria-label="YouTube"
              >
                <Youtube size={20} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          {/* Elementul decorativ din spate */}
          <div className="image-offset-bg"></div>
          
          {/* Rama principala cu imaginea */}
          <ProfilePhoto
            src="/images/profile.jpg?v=20260524"
            alt="Vanca Rafael Marian"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80';
            }}
          />
        </div>
      </section>

      <AppLogoStack lang={lang} labels={labels} />

      {/* --- 2. SKILLS OVERVIEW (3 Cards) --- */}
      <section className="skills-overview">
        <div className="skill-card-home">
          <Cpu size={32} strokeWidth={1.5} className="skill-icon" />
          <h3>{txt.skills.emb}</h3>
          <p>C/C++, Matlab, Simulink, Automotive Protocols, Circuit Analysis</p>
        </div>
        <div className="skill-card-home">
          <Smartphone size={32} strokeWidth={1.5} className="skill-icon" />
          <h3>{txt.skills.web}</h3>
          <p>Flutter, CI/CD, GitHub Actions</p>
        </div>
      </section>

      {/* --- 3. EXPLORE SECTIONS --- */}
      <section className="explore-section">
        <div className="section-header-center">
          <h2>Explore the Portfolio</h2>
          <div className="underline-center"></div>
        </div>

        <div className="explore-grid">
          {/* Card Experience */}
          <Link to="/experience" className="explore-card">
            <div className="explore-icon"><Briefcase size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.exp.title}</h3>
              <p>{txt.sections.exp.desc}</p>
              <span className="explore-link">Go to Experience →</span>
            </div>
          </Link>

          {/* Card Projects */}
          <Link to="/projects" className="explore-card featured">
            <div className="explore-icon"><Layers size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.proj.title}</h3>
              <p>{txt.sections.proj.desc}</p>
              <span className="explore-link">See Projects →</span>
            </div>
          </Link>

          {/* Card Education */}
          <Link to="/education" className="explore-card">
            <div className="explore-icon"><BookOpen size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.edu.title}</h3>
              <p>{txt.sections.edu.desc}</p>
              <span className="explore-link">View Education →</span>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;