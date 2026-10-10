import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { getAppPageBySlug } from '../data/appPages';
import { hobbies } from '../data';

const SITE_URL = 'https://vancarafaelmarian.netlify.app';
const NAME = 'Vanca Rafael Marian';
const DEFAULT_TITLE = `${NAME} | Embedded Software Engineer`;
const DEFAULT_DESC =
  'Vanca Rafael Marian — Embedded Software Engineer and founder of Vanra Systems, building Android apps and embedded systems. Automotive, FPGA, firmware and mobile projects.';

const STATIC_ROUTES = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESC },
  '/experience': {
    title: `Experience | ${NAME} — Embedded Software Engineer`,
    description:
      'Professional experience of Vanca Rafael Marian: embedded firmware at Hanna Instruments, automotive innovation at Schaeffler, FPGA and SoC development.',
  },
  '/projects': {
    title: `Projects | ${NAME} — Embedded, FPGA & Android`,
    description:
      'Embedded software, FPGA, hardware, web and Android projects by Vanca Rafael Marian and Vanra Systems — including Harrowtide Survivor, PhotoBooth 360 Studio and Accounting OfflineBooks.',
  },
  '/tech-stack': {
    title: `Tech Stack | ${NAME}`,
    description:
      'The tools and technologies Vanca Rafael Marian uses to build embedded systems, Android apps and the projects in this portfolio.',
  },
  '/education': {
    title: `Education & Certifications | ${NAME}`,
    description:
      "Master's and Bachelor's degrees in Electronics plus certifications in embedded C/C++, electrification, software architecture, DevOps and AI.",
  },
  '/hobbies': {
    title: `Hobbies | ${NAME}`,
    description: 'Fitness, hiking, travel and tech tinkering — what Vanca Rafael Marian does away from the keyboard.',
  },
  '/contact': {
    title: `Contact | ${NAME}`,
    description:
      'Get in touch with Vanca Rafael Marian about embedded systems, automotive, FPGA or Android app projects with Vanra Systems.',
  },
  '/apps': {
    title: `Mobile Apps by Vanra Systems | ${NAME}`,
    description: 'Android apps published by Vanra Systems on Google Play: productivity, business, utility and game titles.',
  },
};

const NOT_FOUND = {
  title: `Page not found | ${NAME}`,
  description: 'The page you are looking for does not exist.',
  noindex: true,
};

function resolveMeta(pathname, lang) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (STATIC_ROUTES[clean]) return STATIC_ROUTES[clean];

  const app = matchPath('/apps/:slug', clean);
  if (app) {
    const slug = app.params.slug === 'barometer' ? 'baroscan' : app.params.slug;
    const page = getAppPageBySlug(slug);
    if (!page) return NOT_FOUND;
    const name = page.name[lang] || page.name.en;
    const tagline = page.tagline?.[lang] || page.tagline?.en || '';
    return { title: `${name} | Vanra Systems`, description: `${name} — ${tagline}`.trim() };
  }

  const hobby = matchPath('/hobbies/:hobbyId', clean);
  if (hobby) {
    const h = hobbies.find((x) => x.id === hobby.params.hobbyId);
    if (!h) return NOT_FOUND;
    const t = h.title?.[lang] || h.title?.en || 'Hobby';
    return { title: `${t} | ${NAME}`, description: STATIC_ROUTES['/hobbies'].description };
  }

  return NOT_FOUND;
}

function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Keeps <title>, description, canonical and Open Graph tags in sync with the route. */
export default function RouteMeta({ lang }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname, lang);
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    document.title = meta.title;
    document.documentElement.lang = lang;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);

    let robots = document.head.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex');
    } else if (robots) {
      robots.remove();
    }
  }, [pathname, lang]);

  return null;
}
