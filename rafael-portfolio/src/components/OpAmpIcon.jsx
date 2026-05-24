/** Discrete operational amplifier symbol (inverting/non-inverting block). */
export default function OpAmpIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 4h11l7 8-7 8H4V4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M2 8h4M2 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="7" y="11" fill="currentColor" fontSize="5" fontFamily="serif">+</text>
      <text x="7" y="17" fill="currentColor" fontSize="6" fontFamily="serif">-</text>
    </svg>
  );
}
