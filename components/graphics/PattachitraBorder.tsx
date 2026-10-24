export function PattachitraBorder() {
  return (
    <svg viewBox="0 0 1200 52" className="h-12 w-full" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="#C65A1A" strokeOpacity="0.26" strokeWidth="1.4">
        {Array.from({ length: 18 }).map((_, index) => {
          const x = index * 68;
          return (
            <g key={index} transform={`translate(${x} 4)`}>
              <path d="M18 12 C 8 1, 12 18, 18 18 C 24 18, 28 1, 18 12 Z" />
              <path d="M18 18 C 20 28, 14 32, 10 36 C 18 36, 24 32, 30 26" />
              <path d="M8 24 Q18 14 28 24" />
              <circle cx="18" cy="18" r="2" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
