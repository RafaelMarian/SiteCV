// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Download, Cpu, Globe, 
  Zap, Briefcase, BookOpen, Layers 
} from 'lucide-react';
import { personalInfo, labels } from '../data';

const Home = ({ lang }) => {

  // Texte specifice pentru Home (le definim aici pentru simplitate)
  const content = {
    en: {
      greeting: "Hello, I'm",
      description: "An innovative Embedded Software Engineer passionate about automotive technologies, FPGA systems, and full-stack development. I turn complex problems into efficient, scalable solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
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
            <a href="/cv-rafael.pdf" target="_blank" className="btn-outline-lg">
              <Download size={20} /> CV
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          {/* Elementul decorativ din spate */}
          <div className="image-offset-bg"></div>
          
          {/* Rama principala cu imaginea */}
          <div className="profile-frame">
            <img 
              // Asigura-te ca ai poza ta redenumita 'profile.jpg' in folderul public/images/
              src="/images/profile.jpg" 
              // Placeholder in caz ca nu ai pus poza inca
              onError={(e) => {e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";}} 
              alt="Vanca Rafael Marian" 
              className="profile-img" 
            />
          </div>
        </div>
      </section>

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