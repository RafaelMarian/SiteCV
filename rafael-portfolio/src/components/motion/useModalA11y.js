import { useEffect } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

// Ref-counted scroll lock so stacked dialogs (modal + lightbox) with exit
// animations never leave the page locked.
let locks = 0;
function lockScroll(lenis) {
  locks += 1;
  if (locks === 1) {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
  }
  lenis?.stop();
}
function unlockScroll(lenis) {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    lenis?.start();
  }
}

/**
 * Dialog behaviour: ESC to close, focus trap, body scroll lock (also pauses
 * Lenis) and focus restore to the element that opened it.
 */
export default function useModalA11y({ open, ref, onClose, lenis }) {
  useEffect(() => {
    if (!open) return undefined;
    const opener = document.activeElement;
    lockScroll(lenis);

    const focusFirst = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const target = el.querySelector('[data-autofocus]') || el.querySelector(FOCUSABLE) || el;
      target.focus({ preventScroll: true });
    }, 30);

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !ref.current) return;
      const items = [...ref.current.querySelectorAll(FOCUSABLE)].filter((n) => n.offsetParent !== null);
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || !ref.current.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey, true);

    return () => {
      window.clearTimeout(focusFirst);
      document.removeEventListener('keydown', onKey, true);
      unlockScroll(lenis);
      if (opener && typeof opener.focus === 'function') opener.focus({ preventScroll: true });
    };
  }, [open, ref, onClose, lenis]);
}
