const MERIDIAN_DELAYS = [0, -1.5, -3, -4.5, -6, -7.5];

const PINS = [
  { cx: 300, cy: 250, delay: "0s" }, // West Africa / Togo
  { cx: 150, cy: 190, delay: "0.6s" }, // North America
  { cx: 340, cy: 150, delay: "1.2s" }, // Western Europe
  { cx: 460, cy: 280, delay: "1.8s" }, // onward
];

export default function GlobeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 600"
        className="globe-bg absolute right-[-10%] top-1/2 h-[85%] w-[85%] max-w-none -translate-y-1/2 opacity-70 sm:right-[-6%] sm:h-[95%] sm:w-[95%] lg:right-[2%] lg:h-[105%] lg:w-[105%]"
      >
        <defs>
          <radialGradient id="globe-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="var(--color-togo-gold)" stopOpacity="0.18" />
            <stop offset="55%" stopColor="var(--color-togo-green)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-togo-green)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="280" fill="url(#globe-glow)" />
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="var(--color-togo-green)"
          strokeOpacity="0.22"
          strokeWidth="1.5"
        />

        {/* latitude rings */}
        <ellipse cx="300" cy="300" rx="220" ry="60" fill="none" stroke="var(--color-togo-green)" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="220" ry="120" fill="none" stroke="var(--color-togo-green)" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="300" cy="190" rx="150" ry="30" fill="none" stroke="var(--color-togo-green)" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="300" cy="410" rx="150" ry="30" fill="none" stroke="var(--color-togo-green)" strokeOpacity="0.16" strokeWidth="1" />

        {/* rotating meridians */}
        <g>
          {MERIDIAN_DELAYS.map((delay, i) => (
            <ellipse
              key={i}
              cx="300"
              cy="300"
              rx="220"
              ry="220"
              fill="none"
              stroke="var(--color-togo-gold)"
              strokeOpacity="0.5"
              strokeWidth="1.25"
              className="globe-meridian"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </g>

        {/* diaspora pins */}
        {PINS.map((pin, i) => (
          <g key={i}>
            <circle cx={pin.cx} cy={pin.cy} r="8" fill="var(--color-togo-red)" opacity="0.12" />
            <circle
              cx={pin.cx}
              cy={pin.cy}
              r="3.5"
              fill="var(--color-togo-red)"
              opacity="0.55"
              className="globe-pin"
              style={{ animationDelay: pin.delay }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
