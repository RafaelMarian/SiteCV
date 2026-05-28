import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Mail } from 'lucide-react';
import { getAppPageBySlug } from '../data/appPages';
import { personalInfo } from '../data';
import AndroidIcon from '../components/AndroidIcon';
import './AppLanding.css';

export default function AppLanding({ lang }) {
  const { slug } = useParams();
  const app = getAppPageBySlug(slug);

  if (!app) {
    return (
      <div className="app-landing">
        <p>{lang === 'ro' ? 'Aplicația nu a fost găsită.' : 'App not found.'}</p>
        <Link to="/apps">{lang === 'ro' ? 'Toate aplicațiile' : 'All apps'}</Link>
      </div>
    );
  }

  const t = {
    en: {
      back: 'All apps',
      portfolio: 'Developer portfolio',
      getApp: 'Get it on Google Play',
      coming: 'Coming soon on Google Play',
      features: 'Features',
      privacy: 'Privacy',
      privacyText: 'App data is stored on your device. For support or privacy questions:',
      ads: 'AdMob',
      adsNote: 'This app may use Google AdMob. Verification file:',
    },
    ro: {
      back: 'Toate aplicațiile',
      portfolio: 'Portofoliu developer',
      getApp: 'Descarcă de pe Google Play',
      coming: 'În curând pe Google Play',
      features: 'Funcții',
      privacy: 'Confidențialitate',
      privacyText: 'Datele rămân pe dispozitiv. Pentru suport sau confidențialitate:',
      ads: 'AdMob',
      adsNote: 'Aplicația poate folosi Google AdMob. Fișier de verificare:',
    },
  }[lang];

  return (
    <div className="app-landing">
      <nav className="app-landing-nav">
        <Link to="/apps" className="app-landing-back">
          <ArrowLeft size={16} /> {t.back}
        </Link>
        <Link to="/" className="app-landing-portfolio">
          {t.portfolio}
        </Link>
      </nav>

      <header className="app-landing-hero">
        <img src={app.logo} alt="" className="app-landing-logo" width={96} height={96} />
        <h1>{app.name[lang]}</h1>
        <p className="app-landing-tagline">{app.tagline[lang]}</p>
        {app.playStore ? (
          <a
            href={app.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="app-landing-cta"
          >
            <AndroidIcon size={22} />
            {t.getApp}
            <ExternalLink size={16} />
          </a>
        ) : (
          <span className="app-landing-soon">{t.coming}</span>
        )}
      </header>

      <section className="app-landing-section">
        <h2>{t.features}</h2>
        <ul className="app-landing-features">
          {app.features[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="app-landing-section app-landing-muted">
        <h2>{t.privacy}</h2>
        <p>{t.privacyText}</p>
        <a href={`mailto:${personalInfo.email}`} className="app-landing-email">
          <Mail size={16} />
          {personalInfo.email}
        </a>
      </section>

      <section className="app-landing-section app-landing-muted">
        <h2>{t.ads}</h2>
        <p>{t.adsNote}</p>
        <a href="/app-ads.txt" className="app-landing-ads-link" target="_blank" rel="noopener noreferrer">
          /app-ads.txt
        </a>
      </section>

      <footer className="app-landing-footer">
        <span>NRStrength · Rafael Vanca</span>
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
}
