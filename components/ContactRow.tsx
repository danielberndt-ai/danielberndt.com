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
    label: "Instagram",
    href: c.instagramPro,
    Icon: InstagramIcon,
    external: true,
  },
  { label: "LinkedIn", href: c.linkedin, Icon: LinkedInIcon, external: true },
];

export default function ContactRow() {
  return (
    <nav aria-labelledby="kapcsolat-cim">
      <h2 id="kapcsolat-cim" className="sr-only">
        Kapcsolat
      </h2>
      <ul className="contacts">
        {items.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
