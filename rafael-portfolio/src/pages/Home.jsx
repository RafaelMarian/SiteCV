// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Cpu, Globe,
  Zap, Briefcase, BookOpen, Layers, Youtube, Linkedin, Github, X as XLogo, Facebook, Instagram,
} from 'lucide-react';
import { personalInfo, labels } from '../data';
import AppLogoStack from '../components/AppLogoStack';
import ProfilePhoto from '../components/ProfilePhoto';
import AndroidIcon from '../components/AndroidIcon';

function TikTokIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

/** Product Hunt mark (geometric “PH”, same path as Simple Icons). */
function ProductHuntIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.6048 10.5894h3.6518l1.7049 4.9053h-3.6518l-1.7049-4.9053zm-6.4405 0h3.6518l1.7049 4.9053H8.8692l-1.7049-4.9053zm11.361-4.9053H13.3l-1.4372 4.15h5.4848l1.4372-4.15zm-7.6556 0H5.6444L4.2072 9.834h5.4848l1.4372-4.15z" />
    </svg>
  );
}

const Home = ({ lang }) => {

  // Texte specifice pentru Home (le definim aici pentru simplitate)
  const content = {
    en: {
      greeting: "Hello, I'm",
      description: "An innovative Embedded Software Engineer passionate about automotive technologies, FPGA systems, and full-stack development. I turn complex problems into efficient, scalable solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      followMe: "Follow me",
      sections: {
        exp: { title: "Work Experience", desc: "My professional journey in the Automotive Industry and beyond." },
        proj: { title: "Projects Showcase", desc: "A collection of my work: Embedded, FPGA, and Web Apps." },
        edu: { title: "Education", desc: "Master's and Bachelor's degrees in Electronics." }
      },
      skills: {
        emb: "Embedded Systems",
        web: "Web Development",
        hw: "Hardware Design"
      }
    },
    ro: {
      greeting: "Salut, sunt",
      description: "Un Inginer Software Embedded pasionat de tehnologii automotive, sisteme FPGA și dezvoltare full-stack. Transform probleme complexe în soluții eficiente și scalabile.",
      viewProjects: "Vezi Proiecte",
      contactMe: "Contact",
      downloadCv: "Descarcă CV",
      followMe: "Urmărește-mă",
      sections: {
        exp: { title: "Experiență", desc: "Parcursul meu profesional în industria Auto și nu numai." },
        proj: { title: "Portofoliu Proiecte", desc: "O colecție a lucrărilor mele: Embedded, FPGA și Aplicații Web." },
        edu: { title: "Educație", desc: "Studii de Master și Licență în Electronică." }
      },
      skills: {
        emb: "Sisteme Embedded",
        web: "Dezvoltare Web",
        hw: "Design Hardware"
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
                <Github size={24} />
              </a>
              <a
                href={personalInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn x-com"
                aria-label="X"
              >
                <XLogo size={22} strokeWidth={2.25} />
              </a>
              <a
                href={personalInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn tiktok"
                aria-label="TikTok"
              >
                <TikTokIcon size={22} />
              </a>
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={personalInfo.producthunt}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn producthunt"
                aria-label="Product Hunt"
              >
                <ProductHuntIcon size={20} />
              </a>
              <a
                href={personalInfo.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn playstore"
                aria-label="Google Play"
              >
                <AndroidIcon size={24} />
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
          <Cpu size={32} className="skill-icon" />
          <h3>{txt.skills.emb}</h3>
          <p>C/C++, Matlab, Simulink, RTOS, Automotive Protocols</p>
        </div>
        <div className="skill-card-home">
          <Zap size={32} className="skill-icon" />
          <h3>{txt.skills.hw}</h3>
          <p>FPGA (Xilinx), VHDL, PCB Design, Circuit Analysis</p>
        </div>
        <div className="skill-card-home">
          <Globe size={32} className="skill-icon" />
          <h3>{txt.skills.web}</h3>
          <p>React, Python, Flutter, Docker, CI/CD</p>
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
            <div className="explore-icon"><Briefcase size={28}/></div>
            <div className="explore-content">
              <h3>{txt.sections.exp.title}</h3>
              <p>{txt.sections.exp.desc}</p>
              <span className="explore-link">Go to Experience →</span>
            </div>
          </Link>

          {/* Card Projects */}
          <Link to="/projects" className="explore-card featured">
            <div className="explore-icon"><Layers size={28}/></div>
            <div className="explore-content">
              <h3>{txt.sections.proj.title}</h3>
              <p>{txt.sections.proj.desc}</p>
              <span className="explore-link">See Projects →</span>
            </div>
          </Link>

          {/* Card Education */}
          <Link to="/education" className="explore-card">
            <div className="explore-icon"><BookOpen size={28}/></div>
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