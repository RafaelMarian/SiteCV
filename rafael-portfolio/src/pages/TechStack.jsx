import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { labels } from '../data';
import { techStackByLang } from '../data/techStack';

function TechStackIcon({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/[\s&]+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (failed) {
    return (
      <div className="tech-stack-icon-fallback" aria-hidden="true">
        {initials || '?'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className="tech-stack-icon"
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function TechStack({ lang }) {
  const t = techStackByLang[lang];
  const pageTitle = labels[lang].titles.stack;

  return (
    <div className="tech-stack-page">
      <Link to="/" className="tech-stack-back">
        {t.back}
      </Link>

      <div className="tech-stack-hero">
        <div className="tech-stack-avatar-wrap">
          <img
            src="/images/profile.jpg"
            alt=""
            className="tech-stack-avatar"
            width={72}
            height={72}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h1 className="tech-stack-h1">{pageTitle}</h1>
        <p className="tech-stack-intro">{t.intro}</p>
      </div>

      {t.sections.map((section) => (
        <section key={section.id} className="tech-stack-section">
          <h2 className="tech-stack-section-title">{section.title}</h2>
          <ul className="tech-stack-list">
            {section.items.map((item) => (
              <li key={item.name} className="tech-stack-row">
                <TechStackIcon src={item.icon} name={item.name} />
                <div className="tech-stack-body">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-stack-name"
                  >
                    {item.name}
                  </a>
                  {item.lines.map((line, i) => (
                    <p key={i} className="tech-stack-desc">
                      <span className="tech-stack-arrow" aria-hidden="true">
                        ↳
                      </span>
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
