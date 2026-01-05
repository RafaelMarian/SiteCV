// src/Pages.jsx
import React from 'react';
import { personalInfo, experience, projects, education, skills, labels } from './data';

// --- HOME PAGE ---
export const Home = ({ lang }) => (
  <div className="hero">
    <h1>{personalInfo.name}</h1>
    <h2 style={{color: 'var(--accent-color)'}}>{personalInfo.role}</h2>
    <p>{personalInfo.about[lang]}</p>
    
    <div style={{marginTop: '40px', textAlign: 'left'}}>
      <h3 className="section-title">{labels[lang].titles.skills}</h3>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {skills.flatMap(s => s.items).map((skill, i) => (
          <span key={i} className="tech-tag">{skill}</span>
        ))}
      </div>
    </div>
  </div>
);

// --- EXPERIENCE PAGE ---
export const Experience = ({ lang }) => (
  <div>
    <h2 className="section-title">{labels[lang].titles.exp}</h2>
    {experience.map((job, index) => (
      <div key={index} className="card">
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <div className="job-title">{job.role}</div>
            <div className="company">@ {job.company}</div>
          </div>
          <div className="date">{job.period}</div>
        </div>
        <p style={{marginTop: '10px'}}>{job.desc[lang]}</p>
      </div>
    ))}
  </div>
);

// --- PROJECTS PAGE ---
export const Projects = ({ lang }) => (
  <div>
    <h2 className="section-title">{labels[lang].titles.proj}</h2>
    {projects.map((proj, index) => (
      <div key={index} className="card">
        <div className="job-title">{proj.title}</div>
        <p className="date" style={{margin: '5px 0'}}>{proj.tech}</p>
        <p>{proj.desc[lang]}</p>
        <a href={proj.link} target="_blank" rel="noreferrer" style={{color: 'var(--accent-color)', fontWeight:'bold'}}>
          {labels[lang].buttons.viewGithub} →
        </a>
      </div>
    ))}
  </div>
);

// --- EDUCATION PAGE ---
export const Education = ({ lang }) => (
  <div>
    <h2 className="section-title">{labels[lang].titles.edu}</h2>
    {education.map((edu, index) => (
      <div key={index} className="card">
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
             <div className="job-title">{edu.degree[lang]}</div>
             <div className="company">{edu.institution}</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div className="date">{edu.period}</div>
            <div style={{fontWeight:'bold', color:'var(--accent-color)'}}>
               {labels[lang].buttons.grade}: {edu.grade}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- CONTACT PAGE ---
export const Contact = ({ lang }) => (
  <div>
    <h2 className="section-title">{labels[lang].titles.contact}</h2>
    <div className="card" style={{textAlign: 'center'}}>
      <p>📍 {personalInfo.location}</p>
      <p>📧 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
      <p>📱 {personalInfo.phone}</p>
      <p>💻 <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub Profile</a></p>
    </div>
  </div>
);