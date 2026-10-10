/**
 * Pointer handler that writes the cursor position (relative to the element)
 * into --mx / --my so CSS can paint a spotlight / glowing border.
 */
export function trackSpotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}
