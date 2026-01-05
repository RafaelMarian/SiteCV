import React, { useState } from 'react';
import { ChevronDown, Calendar, Briefcase } from 'lucide-react';
import { experience, labels } from '../data';

const Experience = ({ lang }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 className="section-title">{labels[lang].titles.exp}</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experience.map((job, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div 
              key={index} 
              className={`card exp-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="exp-header">
                <div className="exp-role-group">
                  <div className="job-title" style={{ fontSize: '1.3rem' }}>{job.role}</div>
                  <div className="company" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                    <Briefcase size={16} />
                    {job.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="date" style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                    <Calendar size={14} />
                    {job.period}
                  </div>
                  <ChevronDown className="exp-toggle-icon" size={24} />
                </div>
              </div>

              <p className="exp-summary">{job.summary[lang]}</p>
              
              <div className="tech-stack-container">
                {job.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="exp-details">
                <ul>
                  {job.details[lang].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;