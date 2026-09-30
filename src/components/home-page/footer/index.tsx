import { Icon, type IconName } from "@/components/ui/Icons";
import { Photo } from "@/components/ui/Photo";
import { contact, footerTags, loremShort, tweets } from "@/utils/data/content";

const followLinks: { label: string; icon: IconName; href: string; color: string }[] = [
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/rdconstructionss", color: "text-pink-500" },
  { label: "WhatsApp", icon: "chat", href: `https://wa.me/${contact.whatsapp}`, color: "text-green-500" },
  { label: "Email", icon: "mail", href: `mailto:${contact.email}`, color: "text-yellow-400" },
];

const Heading = ({ children }: { children: string }) => (
  <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">{children}</h3>
);

const Credit = ({ prefix, name, href }: { prefix?: string; name: string; href: string }) => (
  <p className="flex items-center gap-2">
    {prefix}
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-white hover:text-brand">
      <Icon name="instagram" className="size-5 text-pink-500" />
      {name}
    </a>
  </p>
);

export const Footer = () => (
  <footer className="bg-black text-[11px] leading-relaxed text-neutral-400">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Heading>About Us</Heading>
        <p>{loremShort} Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>

        <h3 className="mt-8 mb-4 text-base font-bold normal-case text-white">Follow Us</h3>
        <ul className="flex gap-3">
          {followLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className={`flex size-12 items-center justify-center rounded-full bg-neutral-900 transition-colors hover:bg-neutral-800 ${link.color}`}
              >
                <Icon name={link.icon} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Heading>Tags</Heading>
        <ul className="flex flex-wrap gap-2">
          {footerTags.map((tag) => (
            <li key={tag}>
              <a href="#" className="block bg-white/10 px-3 py-1.5 hover:bg-brand hover:text-white">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Heading>Twitter Feeds</Heading>
        <ul className="space-y-4">
          {tweets.map((tweet, index) => (
            <li key={index} className="flex gap-3">
              <span
                aria-hidden
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white"
              >
                t
              </span>
              <p>{tweet}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Heading>Photo Gallery</Heading>
        <ul className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index}>
              <Photo alt={`Gallery photo ${index + 1}`} className="aspect-square" />
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row">
        <Credit prefix={`© ${new Date().getFullYear()}. All rights reserved.`} name="AJYouthMediia" href="https://www.instagram.com/ajyouthmediia" />
        <Credit
          prefix="The webpage is managed by"
          name="Amarjeet Rajput"
          href="https://www.instagram.com/amarjeetrajut261"
        />
      </div>
    </div>
  </footer>
);
