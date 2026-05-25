const ROWS = [
  { label: "เวลาเริ่มต้น", diy: "หลายเดือนลองเอง", us: "เริ่มใช้ได้ภายใน 1 สัปดาห์", agency: "3-6 เดือน รอ deliverable" },
  { label: "ค่าใช้จ่าย", diy: "ฟรี (แต่เสียเวลา)", us: "จ่ายครั้งเดียว", agency: "฿80,000-150,000+ ต่อโปรเจกต์" },
  { label: "Workflow ที่ใช้จริง", diy: "ลองผิดลองถูก ไม่รู้ว่าถูกไหม", us: "Workflow ที่ทดสอบมาแล้วจากธุรกิจไทย", agency: "ใช่ของ agency · ปรับยาก" },
  { label: "เป็นเจ้าของระบบ", diy: "เป็นของคุณ 100%", us: "เป็นของคุณ 100% · ไม่มี lock-in", agency: "ติด vendor · ขึ้นกับ agency" },
  { label: "Support หลังเรียน", diy: "ไม่มี", us: "Community + Update ตลอด", agency: "ตาม contract · จ่ายเพิ่ม" },
  { label: "Customization", diy: "ทำเองทั้งหมด", us: "Template + พี่แบงค์ช่วยปรับ (Private)", agency: "ทำให้แต่ราคาแพง" },
  { label: "ความเสี่ยง", diy: "อาจหยุดกลางทาง", us: "รับประกัน 7 วัน คืนเงินได้", agency: "Lock contract · ออกยาก" },
];

export default function ComparisonAlternatives() {
  return (
    <section className="bg-soft py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1080px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">ทำไมเลือกเรา</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            เปรียบเทียบ 3 ทางเลือกที่คุณมี
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[15px] text-muted">
            ทำเองอย่างเดียว · เรียนกับเรา · จ้าง agency — ดูข้อต่างก่อนตัดสินใจ
          </p>
        </div>

        <div className="overflow-x-auto rounded-[14px] border border-line bg-white shadow-brand-sm">
          <table className="w-full min-w-[760px] border-collapse text-left text-[14px]">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-soft px-4 py-4 text-[12.5px] font-bold uppercase tracking-wide text-muted">
                  เรื่อง
                </th>
                <th className="bg-soft px-4 py-4 text-center text-[13.5px] font-extrabold text-muted">
                  ทำเองด้วย ChatGPT
                </th>
                <th className="bg-brand-blue px-4 py-4 text-center text-[14px] font-extrabold text-white">
                  <span className="inline-flex flex-col items-center">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-brand-yellow">แนะนำ</span>
                    <span>เรียนกับ BizDrive</span>
                  </span>
                </th>
                <th className="bg-soft px-4 py-4 text-center text-[13.5px] font-extrabold text-muted">
                  จ้าง Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className={i % 2 === 1 ? "bg-soft/40" : ""}>
                  <td className="sticky left-0 z-10 bg-inherit px-4 py-3 text-[13px] font-semibold text-muted">{r.label}</td>
                  <td className="px-4 py-3 text-center text-[13.5px] text-ink/80">{r.diy}</td>
                  <td className="bg-brand-blue/[.06] px-4 py-3 text-center text-[13.5px] font-bold text-ink">{r.us}</td>
                  <td className="px-4 py-3 text-center text-[13.5px] text-ink/80">{r.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-[12.5px] text-muted">เลื่อนแนวนอนได้บนมือถือ</p>
      </div>
    </section>
  );
}
