import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "BizDrive — ขับเคลื่อนธุรกิจคุณด้วย AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  const url = `https://fonts.gstatic.com/s/notosansthai/v25/iJWnBXeUZi_OHPqn4wq6hQ2_hbJ1xyN9wd43SofNWcd1MKVQt_So_9CdU5RtpzE.ttf`;
  const res = await fetch(url);
  return res.arrayBuffer();
}

async function loadLogoDataUri() {
  const buf = await readFile(path.join(process.cwd(), "public/assets/brand/logo-192.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export default async function og() {
  const [fontBold, logo] = await Promise.all([loadFont(), loadLogoDataUri()]);
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
          background: "linear-gradient(135deg, #1B3A8C 0%, #10265F 100%)",
          color: "white",
          fontFamily: "Noto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={logo} width={72} height={72} alt="" style={{ display: "block" }} />
          <div style={{ display: "flex", fontSize: 38, fontWeight: 800 }}>BizDrive</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5 }}>
            <span>ขับเคลื่อนธุรกิจคุณ</span>
            <span>ด้วย AI</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#F4C20F", fontWeight: 700 }}>
            คอนเทนต์ · วิดีโอ · ระบบงาน — สำหรับเจ้าของธุรกิจไทย
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
          <div>bizdrive-web.vercel.app</div>
          <div>เรียน AI · ลงมือทำจริง</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto", data: fontBold, style: "normal", weight: 800 }],
    }
  );
}
