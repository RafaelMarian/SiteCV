import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Repeat, Hourglass, ArrowRight, Smartphone, Mail } from 'lucide-react';
import { mobileApps } from '../data';
import '../FitnessCoachPage.css';

const PRINCIPLE_ICONS = { Zap, Repeat, Hourglass };

const principleBlurb = {
  en: {
    Discipline: 'Show up and execute — even when motivation is low.',
    Consistency: 'Small wins stacked daily beat occasional hero sessions.',
    Patience: 'Strength and muscle are built in months and years, not days.',
  },
  ro: {
    Disciplină: 'Apare și execută — chiar și când motivația e scăzută.',
    Consecvență: 'Victoriile mici zilnic bat sesiunile ocazionale „eroice”.',
    Răbdare: 'Forța și masa musculară se construiesc în luni și ani, nu în zile.',
  },
};

const copy = {
  en: {
    eyebrow: 'Train smart · Stay consistent',
    openApp: 'NRStrength app',
    contact: 'Contact',
    stats: [
      { value: '3+', label: 'Years powerbuilding focus' },
      { value: '2', label: 'Years calisthenics deep dive' },
      { value: '2', label: 'Years foundations in high school' },
      { value: '∞', label: 'Lifelong discipline' },
    ],
    philosophyTitle: 'How I train',
    philosophyLead: 'The same mindset I bring to engineering — structure, measurement, and patience — applies in the gym.',
    journeyTitle: 'My path',
    journeyLead: 'From first steps to powerbuilding: a long-term view on strength.',
    galleryTitle: 'Training vibe',
    galleryLead: 'Atmosphere and focus — the environment shapes the habit.',
    ctaTitle: 'Ready to level up your training?',
    ctaLead: 'Track workouts, progress, and analytics with the app I built — or reach out from the portfolio contact page.',
    ctaApp: 'Open NRStrength',
    ctaContact: 'Message me',
  },
  ro: {
    eyebrow: 'Antrenament inteligent · Consecvență',
    openApp: 'Aplicația NRStrength',
    contact: 'Contact',
    stats: [
      { value: '3+', label: 'Ani focus pe powerbuilding' },
      { value: '2', label: 'Ani dedicați calistenicii' },
      { value: '2', label: 'Ani fundație în liceu' },
      { value: '∞', label: 'Disciplină pe termen lung' },
    ],
    philosophyTitle: 'Cum mă antrenez',
    philosophyLead: 'Același mindset ca în inginerie — structură, măsurători și răbdare — se aplică și la sală.',
    journeyTitle: 'Parcursul meu',
    journeyLead: 'De la primii pași la powerbuilding: o viziune pe termen lung asupra forței.',
    galleryTitle: 'Atmosferă de antrenament',
    galleryLead: 'Mediul contează — consecvența se construiește în jurul obiceiurilor.',
    ctaTitle: 'Vrei să îți îmbunătățești antrenamentul?',
    ctaLead: 'Urmărește antrenamentele, progresul și analizele în aplicația pe care am construit-o — sau scrie-mi din pagina de contact.',
    ctaApp: 'Deschide NRStrength',
    ctaContact: 'Scrie-mi',
  },
};

function PrincipleIcon({ name }) {
  const Icon = PRINCIPLE_ICONS[name] || Zap;
  return <Icon size={26} strokeWidth={2.2} />;
}

export default function FitnessCoachPage({ hobby, lang }) {
  const L = lang === 'ro' ? 'ro' : 'en';
  const t = copy[L];
  const blurbs = principleBlurb[L];
  const appEntry = mobileApps.find((a) => a.id === 'fitness');
  const appUrl = appEntry?.url;

  return (
    <div className="fitness-coach">
      <section
        className="fitness-hero"
        style={{ backgroundImage: `url(${hobby.image})` }}
      >
        <div className="fitness-hero-inner">
          <span className="fitness-hero-eyebrow">{t.eyebrow}</span>
          <h1>{hobby.title[lang]}</h1>
          <p className="fitness-hero-lead">{hobby.summary[lang]}</p>
          <div className="fitness-hero-ctas">
            {appUrl ? (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fc-btn fc-btn-primary"
              >
                <Smartphone size={20} />
                {t.openApp}
                <ArrowRight size={18} />
              </a>
            ) : null}
            <Link to="/contact" className="fc-btn fc-btn-ghost">
              <Mail size={20} />
              {t.contact}
            </Link>
          </div>
        </div>
      </section>

      <div className="fitness-stats" aria-label={L === 'ro' ? 'Statistici' : 'Stats'}>
        {t.stats.map((s) => (
          <div key={s.label} className="fitness-stat">
            <span className="fitness-stat-value">{s.value}</span>
            <span className="fitness-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <section className="fc-section">
        <div className="fc-section-head">
          <h2>{t.philosophyTitle}</h2>
          <p>{t.philosophyLead}</p>
        </div>
        <div className="fc-principles">
          {hobby.principles.map((p) => {
            const title = p.title[lang];
            const blurb = blurbs[title] || '';
            return (
              <article key={title} className="fc-principle-card">
                <div className="fc-principle-icon">
                  <PrincipleIcon name={p.icon} />
                </div>
                <h3>{title}</h3>
                {blurb ? <p>{blurb}</p> : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="fc-section">
        <div className="fc-section-head">
          <h2>{t.journeyTitle}</h2>
          <p>{t.journeyLead}</p>
        </div>
        <ul className="fc-timeline">
          {hobby.journey.map((step, i) => (
            <li key={i}>
              <span className="fc-timeline-marker" aria-hidden />
              <div className="fc-timeline-card">
                <h3>{step.title[lang]}</h3>
                <p>{step.description[lang]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {hobby.gallery?.length ? (
        <section className="fc-section">
          <div className="fc-section-head">
            <h2>{t.galleryTitle}</h2>
            <p>{t.galleryLead}</p>
          </div>
          <div className="fc-gallery">
            {hobby.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={
                  L === 'ro'
                    ? `Antrenament — imagine ${i + 1}`
                    : `Training — image ${i + 1}`
                }
                loading="lazy"
              />
            ))}
          </div>
        </section>
      ) : null}

      <div className="fitness-cta-band">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaLead}</p>
        <div className="fitness-hero-ctas">
          {appUrl ? (
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fc-btn fc-btn-primary"
            >
              {t.ctaApp}
              <ArrowRight size={18} />
            </a>
          ) : null}
          <Link to="/contact" className="fc-btn fc-btn-ghost">
            {t.ctaContact}
          </Link>
        </div>
      </div>
    </div>
  );
}
