import { m } from 'motion/react';
import { EASE } from './ease';

/**
 * Masked word-by-word slide-up reveal. Screen readers get the plain string.
 */
export default function SplitText({ text, as = 'span', className, delay = 0, stagger = 0.06, duration = 0.9 }) {
  const Comp = m[as];
  const words = text.split(' ');
  return (
    <Comp
      className={className}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="split-mask" aria-hidden="true">
          <m.span
            className="split-word"
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration, ease: EASE } },
            }}
          >
            {w}
          </m.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Comp>
  );
}
