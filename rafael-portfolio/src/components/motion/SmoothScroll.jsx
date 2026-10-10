import { useEffect, useRef, useState } from 'react';
import { LenisContext } from './lenisContext';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';


/**
 * Inertial smooth scrolling (Lenis). Disabled for prefers-reduced-motion and
 * left native on touch devices (Lenis does not hijack touch by default).
 */
export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let instance = null;

    const start = () => {
      if (instance || mq.matches) return;
      instance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
      });
      const raf = (time) => {
        instance.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
      setLenis(instance);
    };
    const stop = () => {
      cancelAnimationFrame(rafRef.current);
      instance?.destroy();
      instance = null;
      setLenis(null);
    };

    start();
    const onChange = () => (mq.matches ? stop() : start());
    mq.addEventListener('change', onChange);
    return () => {
      mq.removeEventListener('change', onChange);
      stop();
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
