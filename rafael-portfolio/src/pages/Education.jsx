// src/pages/Education.jsx
import React, { useState, useMemo } from 'react';
import { labels, education, certificates } from '../data';
import { GraduationCap, Calendar, MapPin, BookOpen, ChevronDown, Award, School, FileText, Search } from 'lucide-react';

const Education = ({ lang }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const certificateFilters = labels[lang].certFilters || {};

  const filteredCertificates = useMemo(() => {
    return certificates
      .filter(cert => {
        // Filter by category
        if (activeFilter === 'all') return true;
        return cert.category === activeFilter;
      })
      .filter(cert => {
        // Filter by search term (case-insensitive)
        return cert.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [activeFilter, searchTerm]);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 className="section-title">{labels[lang].titles.edu}</h2>

      <div className="education-timeline">
        {education.map((edu, index) => {
          const isExpanded = expandedId === edu.id;
          
          let Icon = School;
          if (edu.id === 'master') Icon = Award;
          if (edu.id === 'bachelor') Icon = GraduationCap;

          return (
            <div key={edu.id} className={`card edu-card ${isExpanded ? 'expanded' : ''}`}>
              
              <div className="edu-header">
                <div className="edu-icon-container">
                  <Icon size={32} color="white" />
                </div>
                
                <div className="edu-info">
                  <span className="period-badge">
                    <Calendar size={12} style={{marginRight: '4px'}}/> 
                    {edu.period}
                  </span>
                  
                  <h3 className="edu-degree">{edu.degree[lang]}</h3>
                  <h4 className="edu-school">
                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      {edu.institution}
                    </a>
                  </h4>
                  
                  <div className="edu-meta">
                     <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <MapPin size={14} /> {edu.location}
                     </span>
                     {edu.grade !== "-" && (
                       <span className="grade-badge">
                         {labels[lang].buttons.grade}: <strong>{edu.grade}</strong>
                       </span>
                     )}
                  </div>
                </div>
              </div>

              <p className="edu-desc">{edu.desc[lang]}</p>

              <button 
                className="curriculum-btn" 
                onClick={() => toggleExpand(edu.id)}
              >
                <BookOpen size={16} />
                {isExpanded ? labels[lang].buttons.hideCurriculum : labels[lang].buttons.viewCurriculum}
                <ChevronDown className={`chevron ${isExpanded ? 'rotate' : ''}`} size={16}/>
              </button>

              <div className={`curriculum-container ${isExpanded ? 'open' : ''}`}>
                <div className="curriculum-grid">
                  {edu.curriculum.map((yearGroup, i) => (
                    <div key={i} className="year-group">
                      <h5 className="year-title">{yearGroup.year[lang]}</h5>
                      <ul className="subject-list">
                        {yearGroup.subjects.map((subj, j) => (
                          <li key={j}>{subj[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <h2 className="section-title" style={{marginTop: '3rem'}}>{labels[lang].titles.certifications}</h2>
      
      {/* FILTERS AND SEARCH */}
      <div className="cert-controls">
        <div className="cert-filters">
          {Object.entries(certificateFilters).map(([key, value]) => (
            <button 
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder={`Search in ${filteredCertificates.length} certificates...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="certificates-grid">
        {filteredCertificates.map((cert, index) => (
          <a key={index} href={cert.path} target="_blank" rel="noopener noreferrer" className="certificate-link">
            <FileText size={18} />
            <span>{cert.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Education;