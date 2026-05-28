// Drop at: app/api/chillpay/[...slug]/route.js
//
// One file → ทุก ChillPay endpoint (paylink/*, transaction/*, recurring/*).
// อ่าน env vars อัตโนมัติ. ปรับ config ด้านล่างเพื่อ lock down origins / auth.

import { createRouteHandler, createOptionsHandler } from "@/lib/chillpay-sdk/nextjs/route-factory.js";

const config = {
  // 1. CORS — เปิดเฉพาะ origin ที่อนุญาต (ตัด comment ออกถ้าจะใช้)
  // allowedOrigins: ["https://bizdrive.app", "https://www.bizdrive.app"],

  // 2. Auth guard — admin-only endpoints (refund, void)
  guard: async (req, slug, body) => {
    const ADMIN_ONLY = [
      "transaction/refund/request",
      "transaction/void/request",
      "paylink/close",
      "paylink/delete",
      "recurring/schedule/cancel",
    ];
    if (ADMIN_ONLY.includes(slug)) {
      // TODO: เช็ค session ของ admin จริง — ตัวอย่าง:
      // const session = await auth();
      // if (!session?.user?.isAdmin) throw new Error("Admin only");
      const adminToken = req.headers.get("x-admin-token");
      if (adminToken !== process.env.ADMIN_TOKEN) throw new Error("Admin only");
    }
  },
};

export const POST = createRouteHandler(config);
export const OPTIONS = createOptionsHandler(config);

// 3. ปรับ Edge runtime ถ้าต้องการความเร็ว (เลือกอย่างใดอย่างหนึ่ง)
// export const runtime = "edge";       // เร็ว แต่ต้องเช็ค fetch+crypto compat
export const runtime = "nodejs";       // ปลอดภัย, default
export const dynamic = "force-dynamic"; // ห้าม cache
