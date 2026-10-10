import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import './App.css';
import { labels } from './data';
import RouteMeta from './components/RouteMeta';
import EasterEggProvider, { useEasterEggs } from './components/easterEggs/EasterEggProvider';

// Importam paginile
import Home from './pages/Home';
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));
const HobbyDetail = lazy(() => import('./pages/HobbyDetail'));
const Hobbies = lazy(() => import('./pages/Hobbies'));
const TechStack = lazy(() => import('./pages/TechStack'));
const AppsIndex = lazy(() => import('./pages/AppsIndex'));
const AppLanding = lazy(() => import('./pages/AppLanding'));
const NotFound = lazy(() => import('./pages/NotFound'));
// Page stylesheets are imported eagerly (before the theme layers) so that
// lazy-loaded route chunks keep the original cascade order.
import './BookLayout.css';
import './GamerPage.css';
import './HikingNaturePage.css';
import './FitnessCoachPage.css';
import './pages/AppLanding.css';
import './pages/FlappyBird.css';
import './pages/games/MiniGame.css';
import './theme.css';
import './motion.css';
import { LazyMotion, MotionConfig, AnimatePresence } from 'motion/react';
import SmoothScroll from './components/motion/SmoothScroll';
import { useLenis } from './components/motion/lenisContext';
import ScrollProgress from './components/motion/ScrollProgress';
import PageTransition from './components/motion/PageTransition';

const Navbar = ({ lang, setLang, theme, toggleTheme }) => {
  const { onLogoChipClick, logoBoot } = useEasterEggs();
  const location = useLocation();
  const t = labels[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectam scroll-ul pentru a schimba stilul navbar-ului
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Închidem meniul mobil la schimbarea rutei
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false); 
  }, [location]);

  // The mobile menu is now closed by onClick events on the individual links.

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* 1. LOGO BRANDING */}
        <div className="nav-logo-brand">
          <Link
            to="/"
            className={`brand-link ${logoBoot ? 'logo-icon--boot' : ''}`}
            aria-label="Vanra Systems — home"
            onClick={(e) => {
              // Easter egg: 5 quick clicks on the logo "flash the firmware"
              onLogoChipClick({ preventDefault() {}, stopPropagation() {} });
              if (location.pathname === '/') e.preventDefault();
            }}
          >
            <img
              src="/brand/vanra-wordmark-dark.svg"
              alt="Vanra Systems"
              className="brand-wordmark brand-wordmark--dark"
              width="193"
              height="24"
            />
            <img
              src="/brand/vanra-wordmark-light.svg"
              alt=""
              aria-hidden="true"
              className="brand-wordmark brand-wordmark--light"
              width="193"
              height="24"
            />
          </Link>
        </div>

        {/* 2. DESKTOP LINKS */}
        <div className="nav-links desktop">
          <Link to="/" className={`nav-link ${isActive('/')}`}>{t.home}</Link>
          <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>{t.exp}</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>{t.proj}</Link>
          <Link to="/tech-stack" className={`nav-link ${isActive('/tech-stack')}`}>{t.stack}</Link>
          <Link to="/education" className={`nav-link ${isActive('/education')}`}>{t.edu}</Link>
          <Link to="/hobbies" className={`nav-link ${isActive('/hobbies')}`}>{t.hobbies}</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>{t.contact}</Link>
        </div>

        {/* 3. CONTROLS (Lang & Theme) */}
        <div className="nav-controls">
          <button onClick={() => setLang(lang === 'en' ? 'ro' : 'en')} className="control-btn" title="Switch Language">
            <Globe size={18} />
            <span className="lang-text">{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="control-btn"
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* 4. MOBILE MENU TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={`mobile-link ${isActive('/')}`}>{t.home}</Link>
        <Link to="/experience" className={`mobile-link ${isActive('/experience')}`}>{t.exp}</Link>
        <Link to="/projects" className={`mobile-link ${isActive('/projects')}`}>{t.proj}</Link>
        <Link to="/tech-stack" className={`mobile-link ${isActive('/tech-stack')}`}>{t.stack}</Link>
        <Link to="/education" className={`mobile-link ${isActive('/education')}`}>{t.edu}</Link>
        <Link to="/hobbies" className={`mobile-link ${isActive('/hobbies')}`}>{t.hobbies}</Link>
        <Link to="/contact" className={`mobile-link ${isActive('/contact')}`}>{t.contact}</Link>
      </div>
      <ScrollProgress />
    </nav>
  );
};

const loadMotionFeatures = () => import('./components/motion/features').then((r) => r.default);

// Each route fades/slides in; lazy pages show an empty, height-holding fallback.
const PT = ({ children }) => (
  <PageTransition>
    <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>{children}</Suspense>
  </PageTransition>
);

// Route-level fade/slide transitions; scroll resets between the exit and enter.
const AnimatedRoutes = ({ lang }) => {
  const location = useLocation();
  const lenis = useLenis();
  const onExitComplete = () => {
    if (location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  };
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={onExitComplete}>
      <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PT><Home lang={lang} /></PT>} />
                <Route path="/experience" element={<PT><Experience lang={lang} /></PT>} />
                <Route path="/projects" element={<PT><Projects lang={lang} /></PT>} />
                <Route path="/tech-stack" element={<PT><TechStack lang={lang} /></PT>} />
                <Route path="/education" element={<PT><Education lang={lang} /></PT>} />
                <Route path="/hobbies" element={<PT><Hobbies lang={lang} /></PT>} />
                <Route path="/hobbies/:hobbyId" element={<PT><HobbyDetail lang={lang} /></PT>} />
                <Route path="/contact" element={<PT><Contact lang={lang} /></PT>} />
                <Route path="/apps" element={<PT><AppsIndex lang={lang} /></PT>} />
                <Route path="/apps/barometer" element={<PT><Navigate to="/apps/baroscan" replace /></PT>} />
                <Route path="/apps/:slug" element={<PT><AppLanding lang={lang} /></PT>} />
                <Route path="*" element={<PT><NotFound lang={lang} /></PT>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
    // ... codul existent
    const [lang, setLang] = useState('en');
    // Dark is the default on first visit; a user's explicit choice is remembered.
    const [theme, setTheme] = useState(() => {
      try {
        return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
      } catch {
        return 'dark';
      }
    });
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch {
        /* storage unavailable */
      }
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      const tc = document.querySelector('meta[name="theme-color"]');
      if (tc) tc.setAttribute('content', theme === 'light' ? '#FFFFFF' : '#0A0A0B');
    }, [theme]);
  
    return (
      <Router>
       <LazyMotion features={loadMotionFeatures} strict>
        <MotionConfig reducedMotion="user">
        <SmoothScroll>
        <EasterEggProvider lang={lang}>
          <div className="App">
            <RouteMeta lang={lang} />
            <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />

            <div className="container">
              <AnimatedRoutes lang={lang} />
            </div>
            <footer className="site-footer">
              <div className="site-footer-inner">
                <span>© {new Date().getFullYear()} Vanca Rafael Marian</span>
                <a href="https://play.google.com/store/apps/developer?id=NRStrength" target="_blank" rel="noopener noreferrer">
                  Vanra Systems — Android apps &amp; embedded systems
                </a>
              </div>
            </footer>
          </div>
        </EasterEggProvider>
        </SmoothScroll>
        </MotionConfig>
       </LazyMotion>
      </Router>
    );
  }
  
export default App;