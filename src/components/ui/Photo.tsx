import Image from "next/image";

type PhotoProps = {
  src?: string;
  alt: string;
  className?: string;
};

// Renders a neutral placeholder until an image path is supplied.
export const Photo = ({ src, alt, className = "" }: PhotoProps) => {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-neutral-300 to-neutral-400 ${className}`}
      />
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </div>
  );
};
