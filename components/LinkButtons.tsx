import { siteConfig } from "@/lib/site";
import { ArrowIcon } from "./icons";

export default function LinkButtons() {
  return (
    <section aria-labelledby="szolgaltatasok-cim">
      <h2 id="szolgaltatasok-cim" className="sr-only">
        Szolgáltatások
      </h2>
      <ul className="links">
        {siteConfig.links.map((link) => (
          <li key={link.label}>
            <a
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
          </li>
        ))}
      </ul>
    </section>
  );
}
