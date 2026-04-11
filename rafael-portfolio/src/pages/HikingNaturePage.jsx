import React from 'react';
import { Zap, Repeat, Mountain } from 'lucide-react';
import '../HikingNaturePage.css';

const PRINCIPLE_ICONS = { Zap, Repeat };

const principleBlurb = {
  en: {
    Perseverance: 'Every summit teaches that steady steps beat rushing on the trail.',
    'Respect for Nature': 'Leave no trace — the mountains stay wild for everyone after us.',
  },
  ro: {
    Perseverență: 'Fiecare vârf învață că pașii constanți bat graba pe potecă.',
    'Respect pentru Natură': 'Fără urme — munții rămân sălbatici și pentru cei care vin după noi.',
  },
};

const copy = {
  en: {
    eyebrow: 'Carpathians · Trails · Fresh air',
    scroll: 'Scroll',
    principlesTitle: 'What hiking means to me',
    principlesLead: 'Two values that shape every outing.',
    journeyTitle: 'On the path',
    journeyLead: 'How I explore and grow with every hike.',
    spotlightTitle: 'Moments on the trail',
    spotlightLead: 'A few frames from the Carpathians — light, ridges, and quiet.',
    galleryTitle: 'Photo journal',
    galleryLead: 'A flowing gallery of places that recharge me.',
    quote: 'Between the treeline and the sky, everything noisy stays below.',
    quoteBy: 'On the ridge',
  },
  ro: {
    eyebrow: 'Carpați · Poteci · Aer curat',
    scroll: 'Derulează',
    principlesTitle: 'Ce înseamnă drumeția pentru mine',
    principlesLead: 'Două valori care definesc fiecare ieșire.',
    journeyTitle: 'Pe potecă',
    journeyLead: 'Cum explorez și cresc cu fiecare drumeție.',
    spotlightTitle: 'Momente pe traseu',
    spotlightLead: 'Câteva cadre din Carpați — lumină, creste și liniște.',
    galleryTitle: 'Jurnal foto',
    galleryLead: 'O galerie fluidă din locurile care mă reîncarcă.',
    quote: 'Între limita pădurii și cer, tot ce e zgomotos rămâne jos.',
    quoteBy: 'Pe creastă',
  },
};

function PrincipleIcon({ name }) {
  const Icon = PRINCIPLE_ICONS[name] || Mountain;
  return <Icon size={26} strokeWidth={2.2} />;
}

export default function HikingNaturePage({ hobby, lang }) {
  const L = lang === 'ro' ? 'ro' : 'en';
  const t = copy[L];
  const blurbs = principleBlurb[L];

  const gallery = hobby.gallery || [];
  const spotlight = gallery.slice(0, 3);
  const masonryImages = gallery.slice(3);
  const spotlightMod =
    spotlight.length >= 3 ? '' : spotlight.length === 2 ? 'hn-spotlight--two' : 'hn-spotlight--one';

  return (
    <div className="hiking-nature">
      <section
        className="hn-hero"
        style={{ backgroundImage: `url(${hobby.image})` }}
      >
        <div className="hn-hero-inner">
          <span className="hn-hero-eyebrow">
            <Mountain size={14} strokeWidth={2.5} aria-hidden />
            {t.eyebrow}
          </span>
          <h1>{hobby.title[lang]}</h1>
          <p className="hn-hero-lead">{hobby.summary[lang]}</p>
        </div>
        <span className="hn-scroll-hint">{t.scroll}</span>
      </section>

      {spotlight.length > 0 ? (
        <section aria-labelledby="hn-spotlight-heading">
          <div className="hn-section hn-gallery-inner" style={{ paddingBottom: '0.5rem' }}>
            <div className="hn-section-head" id="hn-spotlight-heading">
              <h2>{t.spotlightTitle}</h2>
              <p>{t.spotlightLead}</p>
            </div>
          </div>
          <div
            className={['hn-spotlight', spotlightMod].filter(Boolean).join(' ')}
          >
            {spotlight.map((src, i) => (
              <figure key={src}>
                <img
                  src={src}
                  alt={
                    L === 'ro'
                      ? `Pe traseu — fotografie ${i + 1}`
                      : `On the trail — photo ${i + 1}`
                  }
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="hn-section">
        <div className="hn-section-head">
          <h2>{t.principlesTitle}</h2>
          <p>{t.principlesLead}</p>
        </div>
        <div className="hn-principles">
          {hobby.principles.map((p) => {
            const title = p.title[lang];
            const blurb = blurbs[title] || '';
            return (
              <article key={title} className="hn-principle">
                <div className="hn-principle-icon">
                  <PrincipleIcon name={p.icon} />
                </div>
                <div>
                  <h3>{title}</h3>
                  {blurb ? <p>{blurb}</p> : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="hn-section">
        <div className="hn-section-head">
          <h2>{t.journeyTitle}</h2>
          <p>{t.journeyLead}</p>
        </div>
        {hobby.journey.map((step, i) => (
          <div key={i} className="hn-journey-card">
            <h3>{step.title[lang]}</h3>
            <p>{step.description[lang]}</p>
          </div>
        ))}
      </section>

      {masonryImages.length > 0 ? (
        <div className="hn-gallery-wrap">
          <div className="hn-gallery-inner">
            <div className="hn-section-head">
              <h2>{t.galleryTitle}</h2>
              <p>{t.galleryLead}</p>
            </div>
            <div className="hn-masonry">
              {masonryImages.map((src, i) => (
                <div key={src} className="hn-masonry-item">
                  <img
                    src={src}
                    alt={
                      L === 'ro'
                        ? `Carpați — imagine ${i + 4}`
                        : `Carpathians — image ${i + 4}`
                    }
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="hn-quote">
        <blockquote>“{t.quote}”</blockquote>
        <footer>— {t.quoteBy}</footer>
      </div>
    </div>
  );
}
