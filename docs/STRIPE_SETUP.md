# Stripe Setup — BizDrive

วิธีต่อ Stripe checkout เพื่อให้ปุ่ม "สมัครเรียน" รับเงินได้จริง

## Architecture

ใช้ **Stripe Payment Links** (ไม่ต้องเขียน API call) + Webhook ที่มีอยู่แล้วที่ [/api/stripe-webhook](../app/api/stripe-webhook/route.js)

```
User คลิก "สมัครเรียน — ฿3,900"
  ↓ (external link)
Stripe Payment Link checkout page (hosted by Stripe)
  ↓ (after payment)
Redirect → /checkout/success?session_id=xxx
  ↓ (parallel)
Webhook → /api/stripe-webhook → Resend welcome email
```

## ขั้นตอน

### 1. สร้าง Stripe Products + Payment Links (5 products)

ไปที่ [dashboard.stripe.com/products](https://dashboard.stripe.com/products) → สร้าง 5 products:

| Product Name | Price | Plan slug |
|---|---|---|
| Manus AI — Online | ฿3,900 THB | `manus-ai-online` |
| Manus AI — Seminar | ฿9,900 THB | `manus-ai-seminar` |
| AI Video Editor — Online | ฿3,900 THB | `ai-editor-online` |
| AI Video Editor — Seminar | ฿9,900 THB | `ai-editor-seminar` |

**(ไม่ต้องสร้างสำหรับ Private — Private รับ booking manually ผ่าน LINE/contact form)**

หลังสร้าง product → กดปุ่ม **"Create payment link"** สำหรับแต่ละ product

ใน Payment Link settings:
- ✅ **Confirmation page** → Custom: `https://bizdrive-web.vercel.app/checkout/success?session_id={CHECKOUT_SESSION_ID}`
- ✅ **Quantity adjustable**: off (limit 1)
- ✅ Currency: THB
- Optionally: เก็บ ชื่อ + เบอร์โทร ในตอน checkout

ก็อปลิงก์ที่ได้ — ลักษณะ `https://buy.stripe.com/test_xxx` (test) หรือ `https://buy.stripe.com/xxx` (live)

### 2. ใส่ลิงก์ใน `app/class/_data.js`

แต่ละ plan มีฟิลด์ `stripeUrl: null` รออยู่ — แทนที่ด้วย Payment Link ที่ได้:

```js
"manus-ai-online": {
  ...
  stripeUrl: "https://buy.stripe.com/xxxxxxxxxxxxxxx",
  ...
}
```

ทันทีที่ใส่ — ปุ่ม "สมัครเรียน — ฿X,XXX" จะปรากฏแทน lead form ในหน้า salepage

### 3. ตั้ง Webhook (สำหรับ welcome email)

[dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks) → "Add endpoint"

- **Endpoint URL**: `https://bizdrive-web.vercel.app/api/stripe-webhook`
- **Events to send**: `checkout.session.completed`
- หลังสร้าง → ก็อป **Signing secret** (ขึ้นต้น `whsec_xxx`)

### 4. ตั้ง Environment Variables ใน Vercel

ไปที่ [vercel.com/bizdrives-projects/bizdrive-web/settings/environment-variables](https://vercel.com/bizdrives-projects/bizdrive-web/settings/environment-variables) — เพิ่ม:

| Variable | Value | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_xxx` (หรือ `sk_test_xxx`) | จาก dashboard.stripe.com/apikeys |
| `STRIPE_WEBHOOK_SECRET` | `whsec_xxx` | จาก webhook ที่สร้างขั้นตอน 3 |
| `RESEND_API_KEY` | `re_xxx` | จาก resend.com (เพื่อส่ง welcome email) |
| `FROM_EMAIL` | `BizDrive <noreply@yourdomain.com>` | sender email (ต้อง verified ใน Resend) |
| `LEAD_NOTIFY_EMAIL` | `hello@bizdrive.co` | อีเมลที่จะได้รับ notification เมื่อมี lead/sale |

### 5. Test

1. ใช้ test key ก่อน — `sk_test_xxx` + `https://buy.stripe.com/test_xxx`
2. ใช้บัตรทดสอบ Stripe: `4242 4242 4242 4242` · CVC: `123` · exp: ใดก็ได้ในอนาคต
3. หลังจ่าย → ดู `/checkout/success` แสดงผล + check inbox สำหรับ welcome email
4. ดู logs ใน [vercel.com → Functions → /api/stripe-webhook](https://vercel.com/bizdrives-projects/bizdrive-web/functions)

### 6. Go Live

หลังทดสอบเสร็จ:
- เปลี่ยน `STRIPE_SECRET_KEY` เป็น `sk_live_xxx`
- สร้าง Payment Links ใหม่ใน live mode
- อัปเดต `stripeUrl` ใน `_data.js` ทั้ง 4 plans

## Fallback Behavior

ถ้า `stripeUrl: null` (ปัจจุบัน) → ปุ่มจะแสดง **LeadForm** เก็บอีเมลแทน (เดิม) · ใช้งานต่อได้ปกติระหว่างรอ Stripe setup
