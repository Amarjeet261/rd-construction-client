import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & { variant?: "primary" | "dark" };

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-ink-soft text-white hover:bg-black",
};

export const Button = ({ variant = "primary", className = "", ...props }: ButtonProps) => (
  <a
    {...props}
    className={`inline-block px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`}
  />
);
