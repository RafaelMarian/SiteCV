import React, { useState } from 'react';
import { X, ExternalLink, Github, Layers, Image as ImageIcon, ZoomIn, ChevronDown } from 'lucide-react';
import { projects, labels } from '../data';

const Projects = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [expandedDescId, setExpandedDescId] = useState(null);

  // --- FILTRARE STATE ---
  const [filter, setFilter] = useState('all'); // Default: General

  // Definirea tab-urilor
  const tabs = [
    { id: 'all', label: labels[lang].filters.all },
    { id: 'embedded-sw', label: labels[lang].filters.embSw },
    { id: 'web', label: labels[lang].filters.web },
    { id: 'hardware', label: labels[lang].filters.hw },
    { id: 'software', label: labels[lang].filters.soft },
  ];

  // Logica de filtrare
  const filteredProjects = projects.filter(proj => {
    if (filter === 'all') return true;
    if (Array.isArray(proj.categoryFilter)) {
      return proj.categoryFilter.includes(filter);
    }
    return proj.categoryFilter === filter;
  });

  // --- HANDLERS ---
  const closeModal = () => setSelectedProject(null);
  const closeLightbox = () => setLightboxImage(null);

  const handleOverlayClick = (e, type) => {
    if (e.target.className === 'modal-overlay' || e.target.className === 'lightbox-overlay') {
      if (type === 'lightbox') closeLightbox();
      else closeModal();
    }
  };

  const toggleDescription = (e, id) => {
    e.stopPropagation();
    setExpandedDescId(expandedDescId === id ? null : id);
  };

  return (
    <div>
      <h2 className="section-title">{labels[lang].titles.proj}</h2>

      {/* --- TABURI DE FILTRARE --- */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${filter === tab.id ? 'active' : ''}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- GRILA DE PROIECTE FILTRATE --- */}
      <div className="projects-grid">
        {filteredProjects.map((proj) => {
          const isDescExpanded = expandedDescId === proj.id;
          return (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-image-container">
                <img src={proj.image} alt={proj.title} className="project-image" />
                {/* Badge pentru tip */}
                <span className={`category-badge ${Array.isArray(proj.categoryFilter) ? proj.categoryFilter[0] : proj.categoryFilter}`}>
                  {proj.category}
                </span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc-short">{proj.desc[lang]}</p>

                <div className={`extended-summary-container ${isDescExpanded ? 'open' : ''}`}>
                   <p className="extended-text">{proj.extendedSummary[lang]}</p>
                </div>

                <button 
                  className="expand-btn"
                  onClick={(e) => toggleDescription(e, proj.id)}
                >
                  {isDescExpanded ? labels[lang].buttons.readLess : labels[lang].buttons.readMore}
                  <ChevronDown size={16} className={`chevron ${isDescExpanded ? 'rotate' : ''}`} />
                </button>

                <div className="project-tech">
                  <Layers size={14} style={{display:'inline', marginRight:'5px'}}/>
                  {proj.tech}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Mesaj dacă nu există proiecte in categorie */}
      {filteredProjects.length === 0 && (
        <p style={{textAlign:'center', padding:'40px', color:'var(--secondary-text)'}}>
          No projects found in this category.
        </p>
      )}

      {/* --- MODAL SI LIGHTBOX (Raman identice) --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={(e) => handleOverlayClick(e, 'modal')}>
          <div className="modal-content">
            <div className="modal-header">
              <img src={selectedProject.image} alt="Cover" className="modal-img" />
              <button className="close-btn" onClick={closeModal}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <span className="tech-tag" style={{background: 'var(--accent-color)', color: 'white'}}>
                {selectedProject.category}
              </span>
              <h2 style={{marginTop: '15px', fontSize: '2rem', color: 'var(--text-color)'}}>
                {selectedProject.title}
              </h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6', margin: '20px 0'}}>
                {selectedProject.desc[lang]}
              </p>
              <p style={{fontSize: '1rem', lineHeight: '1.6', margin: '20px 0', fontStyle: 'italic', color: 'var(--secondary-text)'}}>
                 {selectedProject.extendedSummary[lang]}
              </p>
              <div className="modal-actions">
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={18} /> Live / Info
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Github size={18} /> Code
                  </a>
                )}
              </div>
              <div style={{borderTop: '1px solid var(--border-color)', margin: '30px 0'}}></div>
              <h4>Key Details</h4>
              <ul style={{marginTop: '15px', paddingLeft: '20px', lineHeight: '1.7', marginBottom: '30px'}}>
                {selectedProject.details && selectedProject.details[lang].map((detail, i) => (
                  <li key={i} dangerouslySetInnerHTML={{__html: detail}}></li>
                ))}
              </ul>
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <>
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <ImageIcon size={20}/> Project Gallery
                  </h4>
                  <div className="modal-gallery">
                    {selectedProject.gallery.map((imgSrc, index) => (
                      <div key={index} className="gallery-item-wrapper" onClick={() => setLightboxImage(imgSrc)}>
                        <img src={imgSrc} alt={`Screenshot ${index}`} className="gallery-img"/>
                        <div className="zoom-icon"><ZoomIn size={24} color="white"/></div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={(e) => handleOverlayClick(e, 'lightbox')}>
          <div className="lightbox-container">
             <button className="close-btn-lightbox" onClick={closeLightbox}><X size={30} /></button>
             <img src={lightboxImage} alt="Fullscreen" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;