import { siteConfig } from "@/lib/site";
import { ArrowIcon } from "./icons";

export default function LinkButtons() {
  return (
    <div className="links">
      {siteConfig.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="link-btn"
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className="link-btn__text">
            <span className="link-btn__label">{link.label}</span>
            <span className="link-btn__desc">{link.description}</span>
          </span>
          <ArrowIcon className="link-btn__arrow" width={20} height={20} />
        </a>
      ))}
    </div>
  );
}
