import React from 'react';
import { Link } from 'react-router-dom';
import { mobileApps, personalInfo } from '../data';
import AndroidIcon from './AndroidIcon';
import Magnetic from './motion/Magnetic';

/**
 * Slowly auto-scrolling marquee of app icons + names. Pauses on hover/focus;
 * with prefers-reduced-motion it becomes a static, horizontally scrollable row.
 * The second copy of the list only exists to make the loop seamless and is
 * hidden from assistive tech and the tab order.
 */
function AppChip({ app, t, hidden }) {
  const inner = (
    <>
      <span className="app-chip-icon">
        <img src={app.logo} alt="" width={44} height={44} loading="lazy" decoding="async" />
      </span>
      <span className="app-chip-name">{app.name}</span>
    </>
  );
  const common = {
    className: 'app-chip',
    title: app.name,
    ...(hidden ? { tabIndex: -1 } : {}),
  };
  if (!app.url) {
    return (
      <span {...common} className="app-chip app-chip--soon" title={`${app.name} — ${t.soon}`}>
        {inner}
      </span>
    );
  }
  if (app.url.startsWith('http')) {
    return (
      <a {...common} href={app.url} target="_blank" rel="noopener noreferrer" aria-label={hidden ? undefined : `${app.name} (opens in new tab)`}>
        {inner}
      </a>
    );
  }
  return (
    <Link {...common} to={app.url}>
      {inner}
    </Link>
  );
}

export default function AppLogoStack({ lang, labels }) {
  const t = labels[lang].appStack;

  return (
    <div className="app-logo-stack-section">
      <div className="app-logo-stack-header">
        <h3 className="app-logo-stack-title">{t.title}</h3>
        <p className="app-logo-stack-subtitle">{t.subtitle}</p>
        <Magnetic strength={0.2}>
          <a
            href={personalInfo.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="app-play-store-link"
            aria-label={`${t.playStore} (opens in new tab)`}
          >
            <AndroidIcon size={20} />
            {t.playStore}
          </a>
        </Magnetic>
      </div>
      <div className="app-marquee" style={{ '--count': mobileApps.length }}>
        <div className="app-marquee-track">
          <ul className="app-marquee-list" aria-label={t.title}>
            {mobileApps.map((app) => (
              <li key={app.id}>
                <AppChip app={app} t={t} />
              </li>
            ))}
          </ul>
          <ul className="app-marquee-list" aria-hidden="true">
            {mobileApps.map((app) => (
              <li key={`dup-${app.id}`}>
                <AppChip app={app} t={t} hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
