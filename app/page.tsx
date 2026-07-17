import { siteConfig } from "@/lib/site";
import Background from "@/components/Background";
import Avatar from "@/components/Avatar";
import ContactRow from "@/components/ContactRow";
import LinkButtons from "@/components/LinkButtons";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Background />
      <main className="page">
        <article className="card">
          <header className="intro">
            <Avatar />
            <h1 className="name">{siteConfig.name}</h1>
            <p className="tagline">{siteConfig.tagline}</p>
            <p className="bio">{siteConfig.bio}</p>
          </header>

          <ContactRow />
          <LinkButtons />
        </article>

        <footer className="footer">
          <span>
            © {year} {siteConfig.name}
          </span>
          <span className="footer__legal">
            <CookieConsent />
          </span>
        </footer>
      </main>
    </>
  );
}
