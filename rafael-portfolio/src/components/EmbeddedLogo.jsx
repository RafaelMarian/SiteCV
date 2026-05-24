/**
 * Minimal microchip / PCB mark for Rafael.eng — embedded systems branding.
 */
export default function EmbeddedLogo({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* IC package */}
      <rect
        x="9"
        y="7"
        width="14"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      {/* Pins — left */}
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M4 11h5M4 16h5M4 21h5" />
      {/* Pins — right */}
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M23 11h5M23 16h5M23 21h5" />
      {/* Simple schematic trace inside */}
      <circle cx="13" cy="14" r="1.25" fill="var(--accent-color, #3b82f6)" />
      <path
        d="M15 14h6M21 14v5"
        stroke="var(--accent-color, #3b82f6)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="19" r="1.25" fill="var(--accent-color, #3b82f6)" />
    </svg>
  );
}
