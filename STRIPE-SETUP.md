# BizDrive — Stripe Setup

สรุปสิ่งที่ทำไปแล้ว และขั้นตอนที่พี่ต้องทำเองให้ระบบ "อีเมลต้อนรับหลังจ่ายเงิน" ทำงาน

## ✅ ทำเสร็จแล้ว (ในโค้ด + Stripe)

| รายการ | รายละเอียด |
|---|---|
| สินค้า | คลาสเรียน AI สำหรับเจ้าของธุรกิจ — ฿3,900 |
| Payment Link (คลาส) | `https://buy.stripe.com/8x29AT88t23RaVT5qr1VK05` |
| Payment Link (เทสต์ ฿10) | `https://buy.stripe.com/8x228rcoJ8sf9RP1ab1VK06` |
| หน้าเว็บ | section "คลาสเรียน AI" + ปุ่มซื้อ + หน้า `thankyou.html` |
| หลังจ่ายเงิน | ทั้ง 2 ลิงก์ redirect ไป `/thankyou` แล้ว |
| Backend | `api/stripe-webhook.js` — ส่งอีเมลต้อนรับเมื่อจ่ายสำเร็จ |

## 📋 ขั้นตอนที่พี่ต้องทำเอง (6 ข้อ)

### 1. สมัคร Resend (บริการส่งอีเมล)
1. ไปที่ https://resend.com สมัครฟรี (3,000 อีเมล/เดือน)
2. **Domains → Add Domain** → ใส่โดเมน (เช่น `bizdrive.co`) แล้วเพิ่ม DNS records ตามที่บอก
   - ⚠️ ถ้าไม่ verify domain จะส่งอีเมลได้แค่ไปยังอีเมลตัวเองเท่านั้น (ส่งให้ลูกค้าจริงไม่ได้)
3. **API Keys → Create** → คัดลอกคีย์ (`re_...`)

### 2. สร้าง Webhook Endpoint ใน Stripe
1. https://dashboard.stripe.com → **Developers → Webhooks → Add endpoint**
2. Endpoint URL: `https://bizdrive-web.vercel.app/api/stripe-webhook`
3. Events: เลือก **`checkout.session.completed`**
4. กด Add endpoint แล้วคัดลอก **Signing secret** (`whsec_...`)

### 3. เอา Stripe Secret Key
- https://dashboard.stripe.com/acct_1SIQx5GwqPLvBau9/apikeys → **Secret key** → Reveal → คัดลอก (`sk_live_...`)

### 4. ตั้ง Environment Variables ใน Vercel
Vercel → โปรเจกต์ `bizdrive-web` → **Settings → Environment Variables** → เพิ่ม 4 ตัว:

| Key | Value |
|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_...` (จากข้อ 3) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` (จากข้อ 2) |
| `RESEND_API_KEY` | `re_...` (จากข้อ 1) |
| `FROM_EMAIL` | `BizDrive <hello@bizdrive.co>` (ต้องเป็นโดเมนที่ verify ใน Resend) |

### 5. Deploy
รัน `vercel --prod` หรือ push ขึ้น git — Vercel จะ `npm install` + สร้าง function ให้เอง

### 6. ทดสอบ
1. เปิดลิงก์เทสต์ ฿10 → จ่ายด้วยบัตรจริง
2. ควรเด้งไปหน้า `/thankyou` + ได้อีเมลต้อนรับในกล่องจดหมาย
3. เช็ก Stripe → Webhooks ว่า delivery ขึ้น `200` (ถ้าแดง ดู error ที่ Vercel → Logs)
4. กด refund ใน Stripe ได้ถ้าต้องการเงินคืน

## 🔧 ปรับแต่งเพิ่ม
- **ลิงก์เข้าเรียนในอีเมล** — แก้ค่า `COURSE_ACCESS_URL` ที่บรรทัดบนสุดของ `api/stripe-webhook.js` ให้เป็นลิงก์เข้าเรียนจริง
- เปลี่ยน environment variable ทุกครั้งต้อง **redeploy** ใหม่
