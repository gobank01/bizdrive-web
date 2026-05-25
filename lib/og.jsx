import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const SALEPAGE_OG_SIZE = { width: 1200, height: 630 };

const ACCENT_BG = {
  blue: "linear-gradient(135deg, #1B3A8C 0%, #10265F 100%)",
  orange: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
  "blue-dark": "linear-gradient(135deg, #10265F 0%, #050D24 100%)",
};

async function loadFont() {
  const url = `https://fonts.gstatic.com/s/notosansthai/v25/iJWnBXeUZi_OHPqn4wq6hQ2_hbJ1xyN9wd43SofNWcd1MKVQt_So_9CdU5RtpzE.ttf`;
  const res = await fetch(url);
  return res.arrayBuffer();
}

async function loadLogoDataUri() {
  const buf = await readFile(path.join(process.cwd(), "public/assets/brand/logo-192.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export async function renderSalepageOg(plan, urlPath) {
  if (!plan) {
    return new ImageResponse(<div>Not found</div>, SALEPAGE_OG_SIZE);
  }
  const [fontBold, logo] = await Promise.all([loadFont(), loadLogoDataUri()]);
  const bg = ACCENT_BG[plan.accent] || ACCENT_BG.blue;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: bg,
          color: "white",
          fontFamily: "Noto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={logo} width={64} height={64} alt="" style={{ display: "block" }} />
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>BizDrive</div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: "#F4C20F",
              color: "#1B3A8C",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            {plan.badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 30, color: "#F4C20F", fontWeight: 700 }}>{plan.name}</div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 800, lineHeight: 1.18, letterSpacing: -0.5 }}>
            {plan.tagline}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.7)" }}>bizdrive-web.vercel.app</div>
            <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.7)" }}>{urlPath}</div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "16px 28px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.12)",
              fontSize: 38,
              fontWeight: 800,
              color: "#F4C20F",
            }}
          >
            {`฿${plan.price.toLocaleString()}`}
          </div>
        </div>
      </div>
    ),
    {
      ...SALEPAGE_OG_SIZE,
      fonts: [{ name: "Noto", data: fontBold, style: "normal", weight: 800 }],
    }
  );
}
