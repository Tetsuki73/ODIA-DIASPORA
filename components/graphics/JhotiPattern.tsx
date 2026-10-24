export function JhotiPattern() {
  return (
    <svg viewBox="0 0 600 400" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke="#C65A1A" strokeOpacity="0.08" strokeWidth="1.25">
        {Array.from({ length: 16 }).map((_, row) =>
          Array.from({ length: 20 }).map((__, col) => {
            const x = col * 32;
            const y = row * 28;
            return (
              <g key={`${row}-${col}`} transform={`translate(${x} ${y})`}>
                <circle cx="6" cy="6" r="3" />
                <circle cx="14" cy="6" r="3" />
                <circle cx="6" cy="14" r="3" />
                <circle cx="14" cy="14" r="3" />
                <path d="M6 0 L6 20 M14 0 L14 20 M0 6 L20 6 M0 14 L20 14" />
              </g>
            );
          })
        )}
      </g>
    </svg>
  );
}
