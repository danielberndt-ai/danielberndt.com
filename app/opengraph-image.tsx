import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

// A megosztási kártyát futásidőben rendereljük a siteConfig-ból, hogy a név,
// a tagline és a domain soha ne csússzon el a kódtól. (Korábban statikus
// public/og.jpg volt, ami a tagline átírása után elavult.)
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default async function OpengraphImage() {
  const [profile, soraBold, soraSemi] = await Promise.all([
    readFile(join(process.cwd(), "public/profile.jpg")),
    readFile(join(process.cwd(), "assets/Sora-Bold.ttf")),
    readFile(join(process.cwd(), "assets/Sora-SemiBold.ttf")),
  ]);

  const profileSrc = `data:image/jpeg;base64,${profile.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          backgroundColor: "#042f2e",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(255,140,0,0.30), transparent 45%), radial-gradient(circle at 8% 92%, rgba(16,120,112,0.55), transparent 55%), linear-gradient(135deg, #04322f 0%, #032625 55%, #021817 100%)",
        }}
      >
        {/* Avatar narancs gyűrűben */}
        <div
          style={{
            display: "flex",
            width: 320,
            height: 320,
            flexShrink: 0,
            borderRadius: "50%",
            padding: 8,
            background: "linear-gradient(150deg, #ff8c00, #ffb04d 55%, rgba(255,140,0,0.35))",
          }}
        >
          <img
            src={profileSrc}
            width={304}
            height={304}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            alt=""
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div
            style={{
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: 76,
              color: "#f4f6f5",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: 36,
              color: "#ff8c00",
              marginTop: 14,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: 28,
              color: "#9db4b0",
              marginTop: 26,
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: soraBold, weight: 700, style: "normal" },
        { name: "Sora", data: soraSemi, weight: 600, style: "normal" },
      ],
    }
  );
}
