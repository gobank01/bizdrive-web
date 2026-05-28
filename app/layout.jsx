import { Noto_Sans_Thai } from "next/font/google";
import { headers } from "next/headers";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ClientEffects from "./components/ClientEffects";
import ConsentProvider from "./components/ConsentProvider";
import LeadPopup from "./components/LeadPopup";
import OrganizationSchema from "./components/OrganizationSchema";
import "./globals.css";

const noto = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bizdrive-web.vercel.app"),
  title: "BizDrive — ขับเคลื่อนธุรกิจคุณด้วย AI",
  description:
    "BizDrive ช่วยเจ้าของธุรกิจไทยใช้ AI ทำคอนเทนต์ ตัดต่อวิดีโอ และวางระบบ ให้ธุรกิจโตได้แม้ทำคนเดียว",
  icons: {
    icon: [{ url: "/assets/brand/logo-192.png", sizes: "192x192", type: "image/png" }],
    apple: "/assets/brand/logo-192.png",
  },
  openGraph: {
    title: "BizDrive — ขับเคลื่อนธุรกิจคุณด้วย AI",
    description: "ช่วยเจ้าของธุรกิจไทยใช้ AI ทำคอนเทนต์และวางระบบ",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B3A8C",
  colorScheme: "light",
};

export default async function RootLayout({ children }) {
  const h = await headers();
  const pathname = h.get("x-pathname") || "";
  const isAdmin = pathname.startsWith("/admin");
  return (
    <html lang="th" className={noto.variable}>
      <body className="bg-white font-thai leading-[1.65] text-ink antialiased">
        {isAdmin ? (
          <>
            {children}
            <ConsentProvider />
          </>
        ) : (
          <>
            <a className="skip-link" href="#main">
              ข้ามไปเนื้อหา
            </a>
            <OrganizationSchema />
            <Nav />
            <main id="main">{children}</main>
            <Footer />
            <ClientEffects />
            <ConsentProvider />
            <LeadPopup />
          </>
        )}
      </body>
    </html>
  );
}
