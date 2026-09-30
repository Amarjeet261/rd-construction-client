type SliderDotsProps = {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  label: string;
};

export const SliderDots = ({ count, active, onSelect, label }: SliderDotsProps) => (
  <div className="flex justify-center gap-2">
    {Array.from({ length: count }, (_, index) => (
      <button
        key={index}
        type="button"
        aria-label={`${label} ${index + 1}`}
        aria-current={index === active}
        onClick={() => onSelect(index)}
        className={`size-2.5 rounded-full transition-colors ${index === active ? "bg-brand" : "bg-white/60 ring-1 ring-neutral-300"}`}
      />
    ))}
  </div>
);
