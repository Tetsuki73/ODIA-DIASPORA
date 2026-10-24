export function KonarkWheel() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="wheelGlow" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#C65A1A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#C65A1A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="url(#wheelGlow)" />
      <circle cx="160" cy="160" r="106" fill="none" stroke="#C65A1A" strokeOpacity="0.18" strokeWidth="2" />
      <g stroke="#C65A1A" strokeOpacity="0.2" strokeWidth="1.5">
        {Array.from({ length: 24 }).map((_, index) => {
          const angle = (index / 24) * Math.PI * 2;
          const x1 = 160 + Math.cos(angle) * 95;
          const y1 = 160 + Math.sin(angle) * 95;
          const x2 = 160 + Math.cos(angle) * 50;
          const y2 = 160 + Math.sin(angle) * 50;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <g fill="#C65A1A" fillOpacity="0.18">
        {Array.from({ length: 24 }).map((_, index) => {
          const angle = (index / 24) * Math.PI * 2;
          const x = 160 + Math.cos(angle) * 80;
          const y = 160 + Math.sin(angle) * 80;
          return <circle key={index} cx={x} cy={y} r={5} />;
        })}
      </g>
      <circle cx="160" cy="160" r="27" fill="none" stroke="#C65A1A" strokeOpacity="0.2" strokeWidth="2" />
      <circle cx="160" cy="160" r="8" fill="#C65A1A" fillOpacity="0.25" />
    </svg>
  );
}
