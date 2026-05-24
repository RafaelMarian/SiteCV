import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirmwareToast from './FirmwareToast';
import GitBashTerminal from './GitBashTerminal';
import './GitBashTerminal.css';

const EasterEggContext = createContext(null);

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useEasterEggs() {
  const ctx = useContext(EasterEggContext);
  if (!ctx) throw new Error('useEasterEggs must be used within EasterEggProvider');
  return ctx;
}

export default function EasterEggProvider({ lang, children }) {
  const navigate = useNavigate();
  const [firmwareToast, setFirmwareToast] = useState(null);
  const [konamiToast, setKonamiToast] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [logoBoot, setLogoBoot] = useState(false);
  const logoClicks = useRef(0);
  const logoTimer = useRef(null);
  const konamiIndex = useRef(0);

  const onLogoChipClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      logoClicks.current += 1;
      clearTimeout(logoTimer.current);
      logoTimer.current = setTimeout(() => {
        logoClicks.current = 0;
      }, 2200);

      if (logoClicks.current >= 5) {
        logoClicks.current = 0;
        setLogoBoot(true);
        setTimeout(() => setLogoBoot(false), 600);
        setFirmwareToast(
          lang === 'ro'
            ? 'Firmware încărcat cu succes — sistem gata.'
            : 'Firmware loaded successfully — system ready.'
        );
      }
    },
    [lang]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || e.target?.isContentEditable;

      if (e.key === '`' && !typing) {
        e.preventDefault();
        setTerminalOpen((open) => !open);
        return;
      }

      if (terminalOpen || typing) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[konamiIndex.current]) {
        konamiIndex.current += 1;
        if (konamiIndex.current === KONAMI.length) {
          konamiIndex.current = 0;
          setKonamiToast(
            lang === 'ro' ? 'Arcade mode — redirect...' : 'Arcade mode unlocked — redirecting...'
          );
          setTimeout(() => {
            navigate('/hobbies/tech');
          }, 450);
        }
      } else {
        konamiIndex.current = key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lang, navigate, terminalOpen]);

  return (
    <EasterEggContext.Provider
      value={{ onLogoChipClick, logoBoot, terminalOpen, setTerminalOpen }}
    >
      {children}
      {firmwareToast && (
        <FirmwareToast message={firmwareToast} onDone={() => setFirmwareToast(null)} />
      )}
      {konamiToast && (
        <div className="konami-toast" role="status" onAnimationEnd={() => setKonamiToast(null)}>
          {konamiToast}
        </div>
      )}
      {terminalOpen && (
        <GitBashTerminal lang={lang} onClose={() => setTerminalOpen(false)} />
      )}
    </EasterEggContext.Provider>
  );
}
