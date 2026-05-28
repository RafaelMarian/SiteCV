import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import './App.css';
import { labels } from './data';
import EmbeddedLogo from './components/EmbeddedLogo';
import EasterEggProvider, { useEasterEggs } from './components/easterEggs/EasterEggProvider';

// Importam paginile
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import HobbyDetail from './pages/HobbyDetail';
import Hobbies from './pages/Hobbies';
import TechStack from './pages/TechStack';
import AppsIndex from './pages/AppsIndex';
import AppLanding from './pages/AppLanding';

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
          <button
            type="button"
            className="nav-logo-chip-btn"
            onClick={onLogoChipClick}
            aria-label={lang === 'ro' ? 'Logo microcip' : 'Microchip logo'}
          >
            <EmbeddedLogo
              size={28}
              className={`logo-icon ${logoBoot ? 'logo-icon--boot' : ''}`}
            />
          </button>
          <Link to="/" className="nav-logo-text-link logo-text">
            Rafael<span style={{ color: 'var(--accent-color)' }}>.eng</span>
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

          <button onClick={toggleTheme} className="control-btn" title="Toggle Theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* 4. MOBILE MENU TOGGLE */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
    </nav>
  );
};

// ... Restul fisierului App (function App) ramane la fel
function App() {
    // ... codul existent
    const [lang, setLang] = useState('en');
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    return (
      <Router>
        <EasterEggProvider lang={lang}>
          <div className="App">
            <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />

            <div className="container">
              <Routes>
                <Route path="/" element={<Home lang={lang} />} />
                <Route path="/experience" element={<Experience lang={lang} />} />
                <Route path="/projects" element={<Projects lang={lang} />} />
                <Route path="/tech-stack" element={<TechStack lang={lang} />} />
                <Route path="/education" element={<Education lang={lang} />} />
                <Route path="/hobbies" element={<Hobbies lang={lang} />} />
                <Route path="/hobbies/:hobbyId" element={<HobbyDetail lang={lang} />} />
                <Route path="/contact" element={<Contact lang={lang} />} />
                <Route path="/apps" element={<AppsIndex lang={lang} />} />
                <Route path="/apps/:slug" element={<AppLanding lang={lang} />} />
              </Routes>
            </div>
          </div>
        </EasterEggProvider>
      </Router>
    );
  }
  
export default App;