export function LotusBloom({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="#C65A1A" fillOpacity="0.18">
        <ellipse cx="60" cy="78" rx="12" ry="22" transform="rotate(0 60 60)" />
        <ellipse cx="60" cy="78" rx="12" ry="22" transform="rotate(45 60 60)" />
        <ellipse cx="60" cy="78" rx="12" ry="22" transform="rotate(90 60 60)" />
        <ellipse cx="60" cy="78" rx="12" ry="22" transform="rotate(135 60 60)" />
        <circle cx="60" cy="60" r="10" fill="#C65A1A" fillOpacity="0.28" />
      </g>
    </svg>
  );
}
