import React from 'react';
import { Link } from 'react-router-dom';
import { appPages, getAppPageUrl } from '../data/appPages';
import AndroidIcon from '../components/AndroidIcon';

export default function AppsIndex({ lang }) {
  const t = {
    en: {
      title: 'Mobile Apps',
      subtitle: 'Official app pages on this site — use these URLs in Google Play (Website / Developer).',
      play: 'On Play Store',
      page: 'App page',
    },
    ro: {
      title: 'Aplicații mobile',
      subtitle: 'Pagini oficiale pe acest site — folosește aceste URL-uri în Google Play (Website / Developer).',
      play: 'Pe Play Store',
      page: 'Pagina app',
    },
  }[lang];

  return (
    <div className="app-landing app-landing-index">
      <h1 className="section-title">{t.title}</h1>
      <p className="app-landing-index-sub">{t.subtitle}</p>
      <p className="app-landing-index-sub">
        <code>/app-ads.txt</code> —{' '}
        <a href="/app-ads.txt" target="_blank" rel="noopener noreferrer">
          AdMob verification
        </a>
      </p>

      <div className="app-landing-grid">
        {appPages.map((app) => (
          <article key={app.slug} className="app-landing-card">
            <img src={app.logo} alt="" width={64} height={64} className="app-landing-card-logo" />
            <h2>{app.name[lang]}</h2>
            <p>{app.tagline[lang]}</p>
            <div className="app-landing-card-actions">
              <Link to={getAppPageUrl(app.slug)} className="btn-secondary-lg">
                {t.page}
              </Link>
              {app.playStore && (
                <a
                  href={app.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-landing-cta app-landing-cta--sm"
                >
                  <AndroidIcon size={18} />
                  {t.play}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
