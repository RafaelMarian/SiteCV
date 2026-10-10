import { useRef } from 'react';
import { m, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'motion/react';
import { EASE } from './ease';

/** Portrait that fades in, tilts toward the cursor and drifts on scroll. */
export default function TiltPortrait({ children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 16 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });
  const shiftX = useTransform(rotateY, [-7, 7], [10, -10]);
  const shiftY = useTransform(rotateX, [-6, 6], [-10, 10]);
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 70]);

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <m.div
      ref={ref}
      className="hero-image-container tilt-stage"
      style={{ y: parallax }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
    >
      <m.div className="image-offset-bg" style={{ x: shiftX, y: shiftY }} />
      <m.div className="tilt-card" style={{ rotateX, rotateY }}>
        {children}
        <div className="tilt-glare" aria-hidden="true" />
      </m.div>
    </m.div>
  );
}
