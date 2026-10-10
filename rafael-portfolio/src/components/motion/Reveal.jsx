import { m } from 'motion/react';

import { EASE, revealItem } from './ease';

/** Fade + slide-up when scrolled into view (once). */
export function Reveal({ as = 'div', children, delay = 0, y = 28, amount = 0.2, className, ...rest }) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Container that staggers its <StaggerItem> children when in view. */
export function Stagger({ as = 'div', children, stagger = 0.09, delay = 0, amount = 0.15, className, ...rest }) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -6% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ as = 'div', children, className, ...rest }) {
  const Comp = m[as];
  return (
    <Comp className={className} variants={revealItem} {...rest}>
      {children}
    </Comp>
  );
}

