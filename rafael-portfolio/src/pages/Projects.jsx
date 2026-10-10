import React, { useCallback, useRef, useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ExternalLink, Github, Layers, Image as ImageIcon, ZoomIn, ChevronDown, ArrowUpRight } from 'lucide-react';
import { projects, labels } from '../data';
import AppLogoStack from '../components/AppLogoStack';
import { Reveal } from '../components/motion/Reveal';
import { EASE } from '../components/motion/ease';
import { trackSpotlight } from '../components/motion/spotlight';
import { useLenis } from '../components/motion/lenisContext';
import useModalA11y from '../components/motion/useModalA11y';

const SPRING = { type: 'spring', stiffness: 260, damping: 32, mass: 0.9 };
const REFLOW = { type: 'spring', stiffness: 380, damping: 38, mass: 0.8 };
const CARD_SHOWN = { opacity: 1, y: 0, scale: 1 };

function ProjectModal({ project, lang, onClose, onZoom, ml, lightboxOpen }) {
  const ref = useRef(null);
  const lenis = useLenis();
  // While the lightbox is open it owns ESC / focus.
  useModalA11y({ open: !lightboxOpen, ref, onClose, lenis });

  return (
    <m.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.05 } }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <m.div
        ref={ref}
        layoutId={`proj-card-${project.id}`}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`proj-title-${project.id}`}
        tabIndex={-1}
        data-lenis-prevent
        style={{ borderRadius: 18 }}
        transition={SPRING}
      >
        <div className="modal-header">
          <m.img
            layoutId={`proj-img-${project.id}`}
            src={project.image}
            alt=""
            className="modal-img"
            decoding="async"
            transition={SPRING}
          />
          <m.button
            className="close-btn"
            onClick={onClose}
            aria-label="Close project details"
            data-autofocus
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            whileHover={{ rotate: 90 }}
          >
            <X size={20} />
          </m.button>
        </div>
        <m.div
          className="modal-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.5, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
        >
          <span className="modal-category">{project.category}</span>
          <h2 id={`proj-title-${project.id}`} className="modal-title">{project.title}</h2>
          <p className="modal-lead">{project.desc[lang]}</p>
          <p className="modal-summary">{project.extendedSummary[lang]}</p>
          <div className="modal-actions">
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noreferrer" className="btn-primary btn-playstore">
                <ExternalLink size={18} /> {ml.playStore}
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className={project.playStore ? 'btn-secondary' : 'btn-primary'}>
                <ExternalLink size={18} /> {project.playStore ? ml.website : ml.live}
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <Github size={18} /> Code
              </a>
            )}
          </div>
          <div className="modal-divider" />
          <h4>Key Details</h4>
          <ul className="modal-details">
            {project.details && project.details[lang].map((detail, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: detail }}></li>
            ))}
          </ul>
          {project.gallery && project.gallery.length > 0 && (
            <>
              <h4 className="modal-gallery-title">
                <ImageIcon size={20} /> Project Gallery
              </h4>
              <div className="modal-gallery">
                {project.gallery.map((imgSrc, index) => (
                  <button
                    key={index}
                    type="button"
                    className="gallery-item-wrapper"
                    onClick={() => onZoom(imgSrc)}
                    aria-label={`Enlarge screenshot ${index + 1}`}
                  >
                    <img src={imgSrc} alt={`${project.title} screenshot ${index + 1}`} className="gallery-img" loading="lazy" decoding="async" />
                    <span className="zoom-icon"><ZoomIn size={24} color="white" /></span>
                  </button>
                ))}
              </div>
            </>
          )}
        </m.div>
      </m.div>
    </m.div>
  );
}

function Lightbox({ src, onClose }) {
  const ref = useRef(null);
  const lenis = useLenis();
  useModalA11y({ open: true, ref, onClose, lenis });
  return (
    <m.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lightbox-container" ref={ref} role="dialog" aria-modal="true" aria-label="Screenshot">
        <button className="close-btn-lightbox" onClick={onClose} aria-label="Close screenshot" data-autofocus>
          <X size={30} />
        </button>
        <m.img
          src={src}
          alt="Fullscreen"
          className="lightbox-img"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: EASE }}
        />
      </div>
    </m.div>
  );
}

const Projects = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [expandedDescId, setExpandedDescId] = useState(null);
  const [filter, setFilter] = useState('all');
  // First visit: cards reveal on scroll. After filtering they animate in directly.
  const [hasFiltered, setHasFiltered] = useState(false);
  const reduce = useReducedMotion();

  const tabs = [
    { id: 'all', label: labels[lang].filters.all },
    { id: 'embedded-sw', label: labels[lang].filters.embSw },
    { id: 'web', label: labels[lang].filters.web },
    { id: 'mobile', label: labels[lang].filters.mobile },
    { id: 'hardware', label: labels[lang].filters.hw },
    { id: 'software', label: labels[lang].filters.soft },
  ];

  const modalLabels = {
    en: { playStore: 'Google Play', website: 'Website', live: 'Live / Info' },
    ro: { playStore: 'Google Play', website: 'Site web', live: 'Live / Info' },
  };
  const ml = modalLabels[lang];

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'all') return true;
    if (Array.isArray(proj.categoryFilter)) return proj.categoryFilter.includes(filter);
    return proj.categoryFilter === filter;
  });

  const closeModal = useCallback(() => setSelectedProject(null), []);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const toggleDescription = (e, id) => {
    e.stopPropagation();
    setExpandedDescId(expandedDescId === id ? null : id);
  };

  return (
    <div className="projects-page">
      <Reveal as="h2" className="section-title" y={16}>{labels[lang].titles.proj}</Reveal>
      <Reveal><AppLogoStack lang={lang} labels={labels} /></Reveal>

      {/* Filter chips with a sliding active pill */}
      <Reveal className="tabs-container" role="tablist" aria-label="Filter projects" delay={0.05}>
        {tabs.map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active}
              className={`tab-btn ${active ? 'active' : ''}`}
              onClick={() => {
                setFilter(tab.id);
                setHasFiltered(true);
              }}
            >
              {active && (
                <m.span
                  layoutId="tab-pill"
                  className="tab-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </Reveal>

      <m.div layout={!reduce} layoutDependency={filter} className="projects-grid" role="tabpanel">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, i) => {
            const isDescExpanded = expandedDescId === proj.id;
            const filterKey = Array.isArray(proj.categoryFilter)
              ? (proj.categoryFilter.includes('mobile') ? 'mobile' : proj.categoryFilter[0])
              : proj.categoryFilter;
            return (
              <m.article
                key={proj.id}
                layout
                layoutId={`proj-card-${proj.id}`}
                layoutDependency={filter}
                className="project-card spotlight-card"
                style={{ borderRadius: 16 }}
                onPointerMove={trackSpotlight}
                onClick={() => setSelectedProject(proj)}
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                {...(hasFiltered
                  ? { animate: CARD_SHOWN }
                  : { whileInView: CARD_SHOWN, viewport: { once: true, amount: 0.15 } })}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{
                  layout: REFLOW,
                  default: hasFiltered
                    ? { duration: 0.55, ease: EASE, delay: 0.08 + Math.min(i, 8) * 0.04 }
                    : { duration: 0.7, ease: EASE, delay: Math.min(i % 3, 2) * 0.08 },
                }}
              >
                <div className="project-image-container">
                  <m.img
                    layoutId={`proj-img-${proj.id}`}
                    src={proj.image}
                    alt=""
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={300}
                    transition={SPRING}
                  />
                  <span className={`category-badge ${filterKey}`}>{proj.category}</span>
                  <span className="project-open-hint" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">
                    <button
                      type="button"
                      className="project-open"
                      aria-haspopup="dialog"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                    >
                      {proj.title}
                    </button>
                  </h3>
                  <p className="project-desc-short">{proj.desc[lang]}</p>

                  <div className={`extended-summary-container ${isDescExpanded ? 'open' : ''}`}>
                    <p className="extended-text">{proj.extendedSummary[lang]}</p>
                  </div>

                  <button
                    type="button"
                    className="expand-btn"
                    aria-expanded={isDescExpanded}
                    onClick={(e) => toggleDescription(e, proj.id)}
                  >
                    {isDescExpanded ? labels[lang].buttons.readLess : labels[lang].buttons.readMore}
                    <ChevronDown size={16} className={`chevron ${isDescExpanded ? 'rotate' : ''}`} />
                  </button>

                  <div className="project-tech">
                    <Layers size={14} style={{ display: 'inline', marginRight: '5px' }} />
                    {proj.tech}
                  </div>
                </div>
              </m.article>
            );
          })}
        </AnimatePresence>
      </m.div>

      {filteredProjects.length === 0 && (
        <p style={{ textAlign: 'center', padding: '40px', color: 'var(--secondary-text)' }}>
          No projects found in this category.
        </p>
      )}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            lang={lang}
            ml={ml}
            onClose={closeModal}
            onZoom={setLightboxImage}
            lightboxOpen={!!lightboxImage}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {lightboxImage && <Lightbox key={lightboxImage} src={lightboxImage} onClose={closeLightbox} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
