import { siteConfig } from "@/lib/site";
import {
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./icons";

const c = siteConfig.contacts;

const waHref = `https://wa.me/${c.whatsapp}${
  c.whatsappMessage ? `?text=${encodeURIComponent(c.whatsappMessage)}` : ""
}`;

const items = [
  { label: "Email", href: `mailto:${c.email}`, Icon: MailIcon, external: false },
  { label: "WhatsApp", href: waHref, Icon: WhatsAppIcon, external: true },
  {
    label: "Instagram, személyes fiók",
    href: c.instagramPersonal,
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: "Instagram, szakmai fiók",
    href: c.instagramPro,
    Icon: InstagramIcon,
    external: true,
  },
  { label: "LinkedIn", href: c.linkedin, Icon: LinkedInIcon, external: true },
];

export default function ContactRow() {
  return (
    <nav className="contacts" aria-label="Kapcsolat">
      {items.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          className="contact-btn"
          aria-label={label}
          title={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon className="contact-icon" width={22} height={22} />
        </a>
      ))}
    </nav>
  );
}
