type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export const SectionHeader = ({ title, subtitle, dark = false }: SectionHeaderProps) => (
  <div className="mx-auto max-w-2xl text-center">
    <h2
      className={`flex items-center justify-center gap-3 text-xl font-bold ${dark ? "text-white" : "text-ink"}`}
    >
      <span aria-hidden className="h-0.5 w-6 bg-brand" />
      {title}
      <span aria-hidden className="h-0.5 w-6 bg-brand" />
    </h2>
    {subtitle && <p className="mt-4 text-xs leading-relaxed text-muted">{subtitle}</p>}
  </div>
);
