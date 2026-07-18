import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-togo-red text-white hover:bg-togo-red/90",
  secondary: "bg-togo-green text-white hover:bg-togo-green-dark",
  ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-cream",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const isExternal = href.startsWith("http");
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-sans font-semibold tracking-tight transition-colors";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
