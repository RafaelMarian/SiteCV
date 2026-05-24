import React from 'react';
import { mobileApps, personalInfo } from '../data';
import AndroidIcon from './AndroidIcon';

/**
 * Stacked app icons that fan out on hover/focus; live apps link externally.
 */
export default function AppLogoStack({ lang, labels }) {
  const t = labels[lang].appStack;

  return (
    <div className="app-logo-stack-section">
      <div className="app-logo-stack-header">
        <h3 className="app-logo-stack-title">{t.title}</h3>
        <p className="app-logo-stack-subtitle">{t.subtitle}</p>
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
      </div>
      <div
        className="app-logo-stack"
        role="list"
        aria-label={t.title}
      >
        {mobileApps.map((app, index) => {
          const z = index + 1;
          const img = (
            <img
              src={app.logo}
              alt=""
              className="app-logo-stack-img"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
            />
          );

          if (app.url) {
            return (
              <a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="app-logo-stack-item app-logo-stack-item--link"
                style={{ zIndex: z }}
                role="listitem"
                title={app.name}
                aria-label={`${app.name} (opens in new tab)`}
              >
                {img}
              </a>
            );
          }

          return (
            <span
              key={app.id}
              className="app-logo-stack-item app-logo-stack-item--soon"
              style={{ zIndex: z }}
              role="listitem"
              title={`${app.name} — ${t.soon}`}
            >
              {img}
              <span className="visually-hidden">{`${app.name}. ${t.soon}`}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
