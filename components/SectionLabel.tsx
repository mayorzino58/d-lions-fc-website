export default function SectionLabel({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.3em] text-lion-green-800 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lion-gold-500 align-middle" />
      {children}
    </p>
  );
}
