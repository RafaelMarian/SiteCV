import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const copy = {
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    home: 'Back to home',
    projects: 'View projects',
  },
  ro: {
    title: 'Pagina nu a fost găsită',
    text: 'Pagina pe care o cauți nu există sau a fost mutată.',
    home: 'Înapoi acasă',
    projects: 'Vezi proiectele',
  },
};

export default function NotFound({ lang = 'en' }) {
  const t = copy[lang] || copy.en;
  const { pathname } = useLocation();

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <img src="/brand/vanra-mark-dark.svg" alt="" className="not-found-mark not-found-mark--dark" />
      <img src="/brand/vanra-mark-light.svg" alt="" className="not-found-mark not-found-mark--light" />
      <p className="not-found-code" aria-hidden="true">404</p>
      <h1 id="not-found-title" className="not-found-title">{t.title}</h1>
      <p className="not-found-text">
        {t.text} <span className="not-found-path">{pathname}</span>
      </p>
      <div className="not-found-actions">
        <Link to="/" className="btn-primary-lg">
          <ArrowLeft size={18} /> {t.home}
        </Link>
        <Link to="/projects" className="btn-secondary-lg">
          {t.projects}
        </Link>
      </div>
    </section>
  );
}
