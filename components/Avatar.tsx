import Image from "next/image";
import { siteConfig } from "@/lib/site";

// Szignatúra elem: az avatar mögül kiinduló, lassan pulzáló "jel" gyűrűk.
// Utalás a bio üzenetére, hogy megtaláljon és ajánljon az AI.
export default function Avatar() {
  return (
    <div className="avatar">
      <span className="avatar-signal" />
      <span className="avatar-signal avatar-signal--delay" />
      <div className="avatar-ring">
        <Image
          src={siteConfig.avatar}
          alt={`${siteConfig.name}, ${siteConfig.tagline}`}
          width={160}
          height={160}
          priority
          className="avatar-img"
        />
      </div>
    </div>
  );
}
