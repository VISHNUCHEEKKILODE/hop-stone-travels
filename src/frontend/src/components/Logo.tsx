export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { container: "h-8", text: "text-sm", sub: "text-[9px]" },
    md: { container: "h-10", text: "text-base", sub: "text-[10px]" },
    lg: { container: "h-14", text: "text-xl", sub: "text-xs" },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${s.container}`}>
      {/* SVG logo mark */}
      <svg
        viewBox="0 0 48 48"
        className="h-full w-auto flex-shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill="#3d4a1f" />
        {/* Globe circle */}
        <circle
          cx="24"
          cy="24"
          r="14"
          fill="none"
          stroke="#a8b560"
          strokeWidth="1.5"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="7"
          ry="14"
          fill="none"
          stroke="#a8b560"
          strokeWidth="1.2"
        />
        <line
          x1="10"
          y1="24"
          x2="38"
          y2="24"
          stroke="#a8b560"
          strokeWidth="1.2"
        />
        {/* Airplane */}
        <path
          d="M20 18 L30 24 L20 30 L21.5 24 Z"
          fill="#d4b566"
          stroke="#d4b566"
          strokeWidth="0.5"
        />
        {/* Leaf accent */}
        <path
          d="M32 14 Q38 14 37 20 Q31 20 32 14"
          fill="#a8b560"
          opacity="0.7"
        />
      </svg>
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold text-primary-foreground tracking-wide ${s.text}`}
          style={{ color: "#f5f0e8" }}
        >
          Hop Stone
        </span>
        <span
          className={`font-body tracking-widest uppercase ${s.sub}`}
          style={{ color: "#a8b560" }}
        >
          Tours &amp; Travels
        </span>
      </div>
    </div>
  );
}
