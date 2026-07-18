export default function KenteStripe({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-2 w-full overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <span className="h-full flex-1 bg-togo-green" />
      <span className="h-full flex-1 bg-togo-gold" />
      <span className="h-full flex-1 bg-togo-red" />
      <span className="h-full flex-1 bg-togo-gold" />
      <span className="h-full flex-1 bg-togo-green" />
      <span className="h-full flex-1 bg-togo-gold" />
      <span className="h-full flex-1 bg-togo-red" />
      <span className="h-full flex-1 bg-togo-gold" />
    </div>
  );
}
