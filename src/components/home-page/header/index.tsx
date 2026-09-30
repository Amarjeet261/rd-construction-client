import { Mail, Phone } from "lucide-react";
import { contact } from "@/utils/data/content";

export const TopBar = () => (
  <div className="bg-ink text-[11px] text-white">
    <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-2">
      <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-brand">
        <Mail className="size-3.5" aria-hidden />
        {contact.email}
      </a>
      <a
        href={`tel:${contact.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-1.5 hover:text-brand"
      >
        <Phone className="size-3.5" aria-hidden />
        {contact.phone}
      </a>
    </div>
  </div>
);
