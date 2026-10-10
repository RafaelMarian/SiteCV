import { useEffect } from 'react';
import { m, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

/**
 * Soft monochrome hero backdrop: slowly drifting grid, a radial spotlight that
 * eases toward the cursor, and static film grain. Transform/opacity only.
 */
export default function HeroBackdrop({ targetRef }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return undefined;
    const r0 = el.getBoundingClientRect();
    x.set(r0.width * 0.62);
    y.set(r0.height * 0.38);
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener('pointermove', onMove, { passive: true });
    return () => el.removeEventListener('pointermove', onMove);
  }, [targetRef, reduce, x, y]);

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid" />
      <m.div className="hero-spotlight" style={{ x: sx, y: sy }} />
      <div className="hero-grain" />
      <div className="hero-fade" />
    </div>
  );
}
