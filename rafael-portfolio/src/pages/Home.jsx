// src/pages/Home.jsx
import React, { useRef } from 'react';
import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Cpu, Smartphone,
  Briefcase, BookOpen, Layers, Youtube, Linkedin, Github,
} from 'lucide-react';
import { personalInfo, labels } from '../data';
import AppLogoStack from '../components/AppLogoStack';
import ProfilePhoto from '../components/ProfilePhoto';
import AndroidIcon from '../components/AndroidIcon';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';
import HeroBackdrop from '../components/motion/HeroBackdrop';
import TiltPortrait from '../components/motion/TiltPortrait';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { EASE } from '../components/motion/ease';
import { trackSpotlight } from '../components/motion/spotlight';

// Hero lines after the masked headline fade/slide in on a short stagger.
const heroLine = (i) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay: 0.55 + i * 0.09 },
});

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
  const heroRef = useRef(null);

  return (
    <div className="home-container">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-section" ref={heroRef}>
        <HeroBackdrop targetRef={heroRef} />
        <div className="hero-text">
          <SplitText key={`g-${lang}`} as="span" className="hero-greeting" text={txt.greeting} delay={0.05} stagger={0.04} duration={0.7} />
          <SplitText as="h1" className="hero-name" text={personalInfo.name} delay={0.15} stagger={0.08} duration={1.05} />
          <SplitText as="h2" className="hero-role" text={personalInfo.role} delay={0.4} stagger={0.035} duration={0.85} />
          <m.p className="hero-founder" {...heroLine(0)}>
            <img src="/brand/vanra-mark-dark.svg" alt="" className="hero-founder-mark hero-founder-mark--dark" width="18" height="18" />
            <img src="/brand/vanra-mark-light.svg" alt="" className="hero-founder-mark hero-founder-mark--light" width="18" height="18" />
            <span>{txt.founderPrefix} <strong>Vanra Systems</strong> — {txt.founderSuffix}</span>
          </m.p>
          <m.p className="hero-desc" {...heroLine(1)}>{txt.description}</m.p>
          
          <m.div className="hero-actions" {...heroLine(2)}>
            <Magnetic>
              <Link to="/projects" className="btn-primary-lg btn-arrow">
                {txt.viewProjects} <ArrowRight size={20} className="btn-arrow-icon" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/contact" className="btn-secondary-lg">
                {txt.contactMe}
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="/cv-rafael.pdf" target="_blank" rel="noreferrer" className="btn-outline-lg">
                <Download size={20} /> CV
              </a>
            </Magnetic>
          </m.div>

          <m.div className="hero-social" role="navigation" aria-label={txt.followMe} {...heroLine(3)}>
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
          </m.div>
        </div>

        <TiltPortrait>
          <ProfilePhoto
            src="/images/profile.jpg?v=20260524"
            alt="Vanca Rafael Marian"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80';
            }}
          />
        </TiltPortrait>
        <m.div
          className="scroll-cue"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <span className="scroll-cue-line" />
        </m.div>
      </section>

      <Reveal><AppLogoStack lang={lang} labels={labels} /></Reveal>

      {/* --- 2. SKILLS OVERVIEW (3 Cards) --- */}
      <Stagger as="section" className="skills-overview">
        <StaggerItem className="skill-card-home spotlight-card" onPointerMove={trackSpotlight}>
          <Cpu size={32} strokeWidth={1.5} className="skill-icon" />
          <h3>{txt.skills.emb}</h3>
          <p>C/C++, Matlab, Simulink, Automotive Protocols, Circuit Analysis</p>
        </StaggerItem>
        <StaggerItem className="skill-card-home spotlight-card" onPointerMove={trackSpotlight}>
          <Smartphone size={32} strokeWidth={1.5} className="skill-icon" />
          <h3>{txt.skills.web}</h3>
          <p>Flutter, CI/CD, GitHub Actions</p>
        </StaggerItem>
      </Stagger>

      {/* --- 3. EXPLORE SECTIONS --- */}
      <section className="explore-section">
        <Reveal className="section-header-center">
          <h2>Explore the Portfolio</h2>
          <div className="underline-center"></div>
        </Reveal>

        <Stagger className="explore-grid" stagger={0.1}>
          {/* Card Experience */}
          <StaggerItem className="explore-item">
          <Link to="/experience" className="explore-card spotlight-card" onPointerMove={trackSpotlight}>
            <div className="explore-icon"><Briefcase size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.exp.title}</h3>
              <p>{txt.sections.exp.desc}</p>
              <span className="explore-link">Go to Experience <ArrowRight size={14} className="explore-arrow" aria-hidden="true" /></span>
            </div>
          </Link>
          </StaggerItem>

          {/* Card Projects */}
          <StaggerItem className="explore-item">
          <Link to="/projects" className="explore-card spotlight-card featured" onPointerMove={trackSpotlight}>
            <div className="explore-icon"><Layers size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.proj.title}</h3>
              <p>{txt.sections.proj.desc}</p>
              <span className="explore-link">See Projects <ArrowRight size={14} className="explore-arrow" aria-hidden="true" /></span>
            </div>
          </Link>
          </StaggerItem>

          {/* Card Education */}
          <StaggerItem className="explore-item">
          <Link to="/education" className="explore-card spotlight-card" onPointerMove={trackSpotlight}>
            <div className="explore-icon"><BookOpen size={24} strokeWidth={1.5} /></div>
            <div className="explore-content">
              <h3>{txt.sections.edu.title}</h3>
              <p>{txt.sections.edu.desc}</p>
              <span className="explore-link">View Education <ArrowRight size={14} className="explore-arrow" aria-hidden="true" /></span>
            </div>
          </Link>
          </StaggerItem>
        </Stagger>
      </section>

    </div>
  );
};

export default Home;