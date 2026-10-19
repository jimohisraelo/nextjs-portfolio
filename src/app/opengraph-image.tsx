import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site link is shared on WhatsApp, LinkedIn, X, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e3a8a 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600, color: "#60a5fa", textTransform: "uppercase", letterSpacing: 4 }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 20 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#cbd5e1", marginTop: 24 }}>{profile.tagline}</div>
      </div>
    ),
    size
  );
}
