import { m } from 'motion/react';
import { EASE } from './ease';

export default function PageTransition({ children }) {
  return (
    <m.main
      className="page-transition"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } }}
    >
      {children}
    </m.main>
  );
}
