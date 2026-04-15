interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vridhi Studio"
    >
      {/*
        Asymmetric V mark — left arm starts at y=13, right arm ends at y=5.
        The right side sits 8 units higher than the left: a deliberate growth indicator.
        Not a symmetric letter. Not a chevron. A rising valley.
      */}
      <path
        d="M5 13 L20 35 L37 5"
        stroke="#10B981"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
