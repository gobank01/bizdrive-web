export const PLANS = {
  "manus-ai-online": {
    slug: "manus-ai-online",
    name: "Manus AI — Online",
    tagline: "เรียน AI สำหรับธุรกิจ จบในคอร์สเดียว",
    price: 3900,
    originalPrice: 5900,
    priceLabel: "฿3,900",
    priceNote: "จ่ายครั้งเดียว · เรียนได้ตลอด · อัปเดตเนื้อหาฟรี",
    stripeUrl: "https://buy.stripe.com/00w9ATcoJeQD8NL2ef1VK08",
    stripePriceId: "price_1TbxmqGwqPLvBau9vF1KMleZ",
    skoolUrl: "https://www.skool.com/bizdrive/about",
    badge: "เริ่มต้นง่าย",
    accent: "blue",
    cardSub: "เรียน self-paced · เริ่มได้ทันที",
    hero: {
      headline: "เรียน AI สำหรับธุรกิจ จบในคอร์สเดียว เริ่มได้แม้คนเดียว",
      sub: "วิดีโอ + เวิร์กโฟลว์ + เทมเพลตพร้อมใช้ — เรียนเมื่อไหร่ก็ได้ เอาไปใช้กับธุรกิจคุณได้ทันที",
      ctaPrimary: "สมัครเรียน Online",
      ctaSecondary: "ดูเนื้อหาคอร์ส",
    },
    problem: {
      title: "เจ้าของธุรกิจคนเดียว — งานล้น เครื่องมือเยอะ ไม่รู้เริ่มตรงไหน",
      points: [
        "อยากใช้ AI ทำคอนเทนต์ แต่ลองแล้วโทนไม่ใช่ ไม่เป็นเสียงของคุณ",
        "อ่านบทความ ดูคลิป สอนเครื่องมือเป็นสิบ แต่กลับมาทำธุรกิจตัวเองยังไม่ได้",
        "เห็นคนอื่นใช้ AI ตัดวิดีโอเร็ว ๆ แต่ของเราเปิดโปรแกรมก็ยังไม่ถูกแล้ว",
        "งานซ้ำ ๆ ที่ควรให้ระบบทำ ยังจมอยู่ที่มือคุณคนเดียว",
      ],
    },
    solution: {
      title: "เวิร์กโฟลว์ AI ที่ BizDrive ใช้จริง — ส่งตรงถึงคุณเป็นคอร์ส",
      body: "ไม่ใช่คอร์สสอนเครื่องมือ แต่เป็นเวิร์กโฟลว์ที่เราใช้กับลูกค้าทุกวัน รวมเข้าเป็นชุดที่คุณเอาไปใช้กับธุรกิจตัวเองได้ทันที — แม้ไม่เคยใช้ AI มาก่อน",
    },
    modules: [
      { num: "01", title: "ปูพื้น AI สำหรับธุรกิจ", text: "เลือกเครื่องมือที่ใช่ ไม่หลงกับเทคโนโลยีที่ไม่จำเป็น", bullets: [
        "Map เครื่องมือ AI ที่จำเป็นจริงต่อธุรกิจ vs ที่แค่ดูเท่",
        "ตั้งค่า ChatGPT / Claude / Manus ให้ทำงานเข้าคู่กัน",
        "เข้าใจ pricing model — เลือกแพลนที่คุ้มที่สุดต่องาน",
        "Workflow แรกของคุณ ทำได้ใน 30 นาที"
      ] },
      { num: "02", title: "เขียนแคปชั่นและคอนเทนต์ที่เป็นเสียงคุณ", text: "เทมเพลต prompt + วิธีจูนให้ตรงแบรนด์", bullets: [
        "Prompt template 50+ ชุดสำหรับ FB/IG/LINE/X",
        "วิธี train AI ให้เขียนเป็นเสียงคุณเอง ไม่ใช่ภาษาหุ่นยนต์",
        "Bulk content gen — ทำคอนเทนต์ทั้งเดือนในหนึ่งครั้ง",
        "Variation strategy — ไม่ซ้ำ ไม่น่าเบื่อ"
      ] },
      { num: "03", title: "ทำภาพประกอบ AI สำหรับโพสต์และเว็บ", text: "ภาพคุณภาพแบบสตูดิโอจากโจทย์ธุรกิจ", bullets: [
        "Brand-consistent image generation (1 brand, ไม่กระจัดกระจาย)",
        "เทคนิค prompt สำหรับภาพคน/สินค้า/scenario ธุรกิจ",
        "Carousel + ad creative — สร้างเป็นชุดอัตโนมัติ",
        "แก้/touch up ภาพ AI ให้พร้อมใช้จริง"
      ] },
      { num: "04", title: "เวิร์กโฟลว์ตัดต่อวิดีโออัตโนมัติ", text: "จากคลิปดิบ → Reels/TikTok พร้อมแคปชั่นและจังหวะ", bullets: [
        "Cut dead air + auto transcribe + caption ภาษาไทย",
        "Motion punch + end slate ที่ตรงแบรนด์",
        "Render 9:16 + 1:1 + 16:9 จากต้นฉบับเดียว",
        "Pipeline ที่ทำคลิป 1 ชม. → 5 นาที"
      ] },
      { num: "05", title: "วางระบบงานซ้ำให้ AI ช่วยทำ", text: "ออกแบบ workflow ลดงานมือ 60-80%", bullets: [
        "Audit งานในธุรกิจคุณ — หาตัวที่ AI ช่วยได้",
        "Workflow design pattern (Trigger → Process → Output)",
        "เชื่อม Gmail / Sheets / Drive / Notion / LINE",
        "เทมเพลต SOP 5 ชุดเอาไปใช้ต่อ"
      ] },
      { num: "06", title: "ส่งต่อให้ทีม หรือทำคนเดียวให้สเกล", text: "เทมเพลต SOP + วิธี handoff ให้คนอื่นทำต่อได้", bullets: [
        "เปลี่ยน workflow เป็น document ที่ทีมทำตามได้",
        "วัดผล — track ว่า AI ช่วยลดเวลาเท่าไหร่จริง",
        "Scale plan — เมื่อรายได้โต ขั้นต่อไปทำยังไง"
      ] },
    ],
    outcomes: [
      "ทำคอนเทนต์ได้สัปดาห์ละชุดด้วยเวลาครึ่งหนึ่งของเดิม",
      "ตัดวิดีโอ Reels/TikTok ได้เองโดยไม่ต้องจ้างคนตัด",
      "มีระบบงานที่ทำงานต่อเองได้ คุณโฟกัสกับงานที่สำคัญ",
      "เห็นภาพรวมธุรกิจชัดขึ้น ไม่จมในงานประจำวัน",
      "พร้อมสเกลได้เมื่อต้องการ — เพราะระบบพร้อมแล้ว",
    ],
    bonuses: [
      { title: "เทมเพลต Prompt 50+ ชุด", valueAmount: 1900, value: "฿1,900", text: "Prompt ที่ทดสอบจริงกับธุรกิจไทย พร้อมใช้กับ ChatGPT / Claude" },
      { title: "เวิร์กโฟลว์ตัดต่อวิดีโออัตโนมัติ", valueAmount: 2900, value: "฿2,900", text: "ชุดเวิร์กโฟลว์ที่ BizDrive ใช้จริง พร้อมคู่มือ" },
      { title: "Community Group", valueAmount: 1900, value: "฿1,900", text: "เข้ากลุ่มเจ้าของธุรกิจที่ใช้ AI เหมือนกัน ถามได้ทุกวัน" },
    ],
    guarantee: {
      title: "รับประกัน 7 วัน คืนเงินเต็มจำนวน",
      text: "ลองเรียน 7 วัน ถ้ารู้สึกว่าไม่ใช่ทางคุณ ทักมา คืนเงินให้เต็มจำนวน ไม่ถาม",
    },
    faqs: [
      { q: "ต้องมีพื้นฐานเทคโนโลยีไหม?", a: "ไม่ต้องครับ คอร์สนี้ออกแบบสำหรับเจ้าของธุรกิจที่ไม่ใช่สาย tech ใช้ภาษาคนปกติ ลงมือทำตามได้เลย" },
      { q: "ใช้เวลาเรียนนานแค่ไหน?", a: "เนื้อหารวมประมาณ 8-10 ชั่วโมง เรียนได้ตามจังหวะตัวเอง คนส่วนใหญ่จบใน 2-3 สัปดาห์" },
      { q: "ต้องซื้อเครื่องมือเพิ่มไหม?", a: "เครื่องมือหลักที่แนะนำมีทั้งฟรีและเสียเงิน เริ่มต้นด้วยตัวฟรีได้ คอร์สจะบอกชัดว่าตัวไหนคุ้มจ่าย — โดยรวมเริ่มฟรีแล้วค่อย upgrade ตามที่จำเป็น" },
      { q: "เนื้อหาอัปเดตหรือเปล่า?", a: "อัปเดตตลอด เมื่อมีเครื่องมือใหม่ที่คุ้มเอาไปใช้ เราจะเพิ่มเข้าไปในคอร์สโดยไม่คิดเงินเพิ่ม" },
      { q: "เรียนแล้วถามคำถามได้ที่ไหน?", a: "เข้า Community Group ของคอร์ส ทักถามได้ทุกวัน ทีม BizDrive ตอบเอง" },
      { q: "ราคา ฿3,900 คุ้มยังไง?", a: "ของรวมเกิน ฿10,000 — คอร์ส + เทมเพลต prompt 50 ชุด + เวิร์กโฟลว์วิดีโอ + community group · เทียบเวลาที่คุณประหยัด คุ้มแน่นอน" },
      { q: "ถ้าทำงานคนเดียว ทำได้จริงไหม?", a: "ออกแบบมาเพื่อคนทำงานคนเดียวโดยเฉพาะ — workflow ทุกตัวใน course พิสูจน์มาแล้วจากเจ้าของธุรกิจที่ไม่มีทีม" },
      { q: "หลังเรียนจบ จะใช้ได้จริงไหม ถ้าไม่ลงมือทำต่อ?", a: "ตรงไปตรงมา — ไม่ลงมือทำก็ไม่ได้ผล แต่คอร์สนี้มี action item ทุก module + community ที่จะ accountability ให้คุณ" },
      { q: "ขอเลื่อนเรียนได้ไหม?", a: "ได้ครับ คอร์ส lifetime access ไม่มีวันหมด เรียนเมื่อพร้อมได้เลย" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ออกใบกำกับภาษี/ใบเสร็จเต็มรูปแบบได้ — แจ้งทีมตอนสมัครหรือทักมาที่ hello@bizdrive.co พร้อมข้อมูลบริษัท" },
      { q: "คืนเงินยังไง?", a: "ภายใน 7 วันแรก ทักมาที่ hello@bizdrive.co คืนเงินให้เต็มจำนวน ไม่ต้องอธิบายเหตุผล" },
    ],
    scarcity: "เปิดรับสมัครรอบนี้ราคาเริ่มต้น — ราคาจะปรับขึ้นเมื่อเปิดรอบถัดไป",
    deadline: {
      rolling: { days: 2 },
      label: "ราคารอบเริ่มต้น ปิดใน",
      expiredLabel: "รอบนี้ปิดแล้ว — รออัปเดตรอบใหม่",
    },
    idealFor: {
      title: "คลาสนี้เหมาะกับคุณถ้า…",
      yes: [
        "เป็นเจ้าของธุรกิจคนเดียวหรือทีมเล็ก ที่อยากใช้ AI ทำคอนเทนต์/วิดีโอ/ระบบงาน",
        "อยากเรียนตามจังหวะตัวเอง ที่บ้านหรือที่ไหนก็ได้",
        "ไม่เคยใช้ AI มาก่อน หรือใช้แล้วแต่ผลลัพธ์ยังไม่ตรงใจ",
        "ต้องการเทมเพลตและเวิร์กโฟลว์พร้อมใช้ เริ่มต้นทันทีไม่ต้องลองเอง",
      ],
      no: [
        { text: "ต้องการการโค้ช 1:1 หรือ workflow เฉพาะธุรกิจคุณ", linkTo: "manus-ai-private" },
        { text: "อยากเจอเจ้าของธุรกิจคนอื่น เรียนแบบ hands-on", linkTo: "manus-ai-seminar" },
      ],
    },
  },

  "manus-ai-seminar": {
    slug: "manus-ai-seminar",
    name: "Manus AI — Seminar",
    tagline: "สัมมนา 1 วันเต็ม วาง AI Workflow ให้ธุรกิจคุณ",
    price: 9900,
    originalPrice: 14900,
    priceLabel: "฿9,900",
    priceNote: "ราคาต่อท่าน · รวมอาหารและเอกสาร · ที่นั่งจำกัด 20 คน",
    stripeUrl: null, // TODO: Stripe Payment Link — see /docs/STRIPE_SETUP.md
    badge: "Workshop",
    accent: "blue",
    cardSub: "1 วันเต็ม · กลุ่มเล็ก · hands-on",
    hero: {
      headline: "1 วันเต็ม กับ BizDrive — ออกจากห้อง มีระบบ AI ใช้กับธุรกิจคุณทันที",
      sub: "Workshop กลุ่มเล็ก 20 ท่าน · ลงมือทำจริงกับธุรกิจตัวเอง · พี่แบงค์ + ทีม BizDrive โค้ชตรงกับโต๊ะคุณ",
      ctaPrimary: "จองที่นั่ง Seminar",
      ctaSecondary: "ดูตารางวัน",
    },
    problem: {
      title: "เรียนคอร์สออนไลน์มาแล้วหลายตัว — แต่ยังไม่ได้เริ่ม",
      points: [
        "ซื้อคอร์สมา ดูได้สองตอน ก็กลับไปติดงานเดิม",
        "อ่านเอง ทำเอง ไม่มีใครชี้ว่าวิธีไหนเหมาะกับธุรกิจคุณ",
        "อยากเจอเจ้าของธุรกิจคนอื่นที่กำลังใช้ AI เหมือนกัน",
        "ต้องการ momentum — ลงมือจริง ๆ ใน 1 วัน ออกไปแล้วใช้ต่อได้",
      ],
    },
    solution: {
      title: "Workshop 1 วัน — มาตัวเปล่า กลับไปพร้อมระบบ",
      body: "Seminar แบบกลุ่มเล็ก 20 ท่าน เน้น hands-on กับธุรกิจของคุณจริง ๆ ไม่ใช่ฟังบรรยายแล้วกลับบ้าน พี่แบงค์ + ทีม BizDrive วนโต๊ะ ช่วยออกแบบ workflow เฉพาะธุรกิจคุณ จบวันมี output พร้อมเอาไปใช้ต่อ",
    },
    modules: [
      { num: "09:00", title: "เปิดวัน + Setup", text: "ทำความรู้จัก เซ็ตเครื่องมือ วางเป้าหมายของวัน", bullets: [
        "Welcome + แนะนำตัว 20 ท่าน",
        "เซ็ต laptop + sign in เครื่องมือ AI ที่จะใช้",
        "Map ธุรกิจคุณ — เป้าหมายวันนี้ของแต่ละคน"
      ] },
      { num: "10:00", title: "AI Workflow Foundation", text: "เลือกเครื่องมือ วาง workflow หลักของธุรกิจคุณ", bullets: [
        "Decision tree: ChatGPT vs Claude vs Manus — ใช้อะไรเมื่อไหร่",
        "Map workflow แรกของคุณบนกระดาษ",
        "Coffee break (15 นาที)"
      ] },
      { num: "11:30", title: "Hands-on: Content + Caption", text: "สร้างเวิร์กโฟลว์คอนเทนต์ที่เป็นเสียงคุณ ลงมือทำในคลาส", bullets: [
        "Train AI voice ของคุณ — ลง prompt prime",
        "Generate 1 สัปดาห์ของคอนเทนต์ จริง ๆ ในคลาส",
        "Peer review — ทำให้เพื่อนข้าง ๆ ดูแล้วปรับ"
      ] },
      { num: "13:00", title: "พักเที่ยง + Networking", text: "อาหารเที่ยงรวม คุยกับเจ้าของธุรกิจคนอื่น", bullets: [
        "Lunch รวม (รวมในราคา)",
        "Speed networking — เปลี่ยนคู่คุย",
        "พี่แบงค์ ตอบคำถามแบบ free flow"
      ] },
      { num: "14:00", title: "Hands-on: Video Workflow", text: "ตัดต่อ Reels/TikTok อัตโนมัติด้วย workflow ที่ BizDrive ใช้", bullets: [
        "Setup video pipeline (ที่ใช้จริงในการสอน)",
        "ทดสอบกับ raw footage ของคุณเอง (เตรียมมา)",
        "Export 3 ratios — 9:16 / 1:1 / 16:9"
      ] },
      { num: "15:30", title: "Hands-on: ระบบงานซ้ำ", text: "วางระบบให้งานซ้ำทำเอง ลดงานมือ 60-80%", bullets: [
        "Identify 3 งานซ้ำในธุรกิจคุณที่ต้องการ automate",
        "Build workflow 1 ตัว live ในคลาส",
        "เชื่อม Sheets / Drive / LINE notify"
      ] },
      { num: "17:00", title: "Wrap + Action Plan", text: "สรุปแผน 30 วัน ออกจากห้องไปแล้วทำต่อได้", bullets: [
        "30-day action plan ของแต่ละคน",
        "Buddy system — จับคู่ accountability 30 วัน",
        "Group chat invite — start จากวันถัดไป"
      ] },
    ],
    outcomes: [
      "มี AI workflow 3 ชุดของธุรกิจคุณเอง พร้อมใช้ตั้งแต่วันถัดไป",
      "เครือข่ายเจ้าของธุรกิจที่ใช้ AI เหมือนกัน 19 คน",
      "แผน 30 วัน ที่ออกแบบตามธุรกิจคุณ ไม่ใช่ template สำเร็จรูป",
      "วิดีโอบันทึก seminar + เอกสารทั้งหมด ทบทวนได้ตลอด",
      "30 วัน group support หลัง seminar — ติดตรงไหนถามต่อได้",
    ],
    bonuses: [
      { title: "วิดีโอบันทึก Seminar เต็มวัน", valueAmount: 4900, value: "฿4,900", text: "ทบทวนได้ทุกที่ ทุกเวลา หลังจบ Workshop" },
      { title: "30-Day Group Support", valueAmount: 9900, value: "฿9,900", text: "กลุ่ม support 30 วันหลัง seminar ทีม BizDrive ตอบเอง" },
      { title: "Manus AI Online Course", valueAmount: 3900, value: "฿3,900", text: "แถมคอร์สออนไลน์เต็มชุด เรียนต่อหลัง Workshop ได้เลย" },
    ],
    guarantee: {
      title: "รับประกันความพอใจ",
      text: "ถ้าจบวัน ไม่รู้สึกว่าคุ้ม ทักมาภายใน 7 วัน คืนเงินครึ่งหนึ่งโดยไม่ถาม",
    },
    faqs: [
      { q: "Seminar จัดที่ไหน วันไหน?", a: "จัดที่ BizDrive Academy กรุงเทพมหานคร · วันที่จะแจ้งเมื่อยืนยันการจอง ที่นั่งจำกัด 20 ท่าน/รอบ — ดูแผนที่ในส่วนสถานที่ด้านล่าง" },
      { q: "ต้องเตรียมอะไรมาบ้าง?", a: "Notebook ของคุณ + ข้อมูลธุรกิจ (กลุ่มลูกค้า สินค้า/บริการ ปัญหาที่อยากแก้) ที่เหลือเราเตรียมให้" },
      { q: "เหมาะกับใคร?", a: "เจ้าของธุรกิจ ฟรีแลนซ์ ผู้บริหารทีมเล็ก ที่อยากวาง AI workflow ให้ธุรกิจตัวเอง" },
      { q: "ราคา ฿9,900 คุ้มยังไงเทียบกับ online?", a: "ของรวมเกิน ฿18,000 — Workshop เต็มวัน + วิดีโอบันทึก + 30-day support + แถม Manus AI Online · ค่าเดินทาง/อาหารรวมแล้ว · เน้น hands-on + network ที่ online ไม่ได้" },
      { q: "ถ้าไม่อยากมาเป็นกลุ่ม ทำได้ไหม?", a: "ถ้าอยากเรียนคนเดียวลึก ๆ → Manus AI Private เหมาะกว่า เพราะเป็น 1:1 และออกแบบ workflow เฉพาะคุณ" },
      { q: "อาหารและน้ำ?", a: "อาหารเที่ยง + coffee break เช้า/บ่าย + น้ำดื่ม — รวมในราคาแล้ว" },
      { q: "จองแล้วยกเลิกได้ไหม?", a: "แจ้งล่วงหน้า 14 วัน คืน 100% · แจ้งล่วงหน้า 7 วัน คืน 50% · น้อยกว่านั้นเลื่อนไปรอบถัดไปได้" },
      { q: "มีรอบไหนบ้าง?", a: "เปิดรอบทุก 6-8 สัปดาห์ · ทักมาที่ hello@bizdrive.co เพื่อดูตารางล่าสุด" },
      { q: "ไปกับทีมได้ไหม?", a: "ได้ครับ ทีม 2-3 คนจากบริษัทเดียวกันมีส่วนลด 15% — แจ้งตอนจอง" },
      { q: "ออกใบกำกับภาษี/ใบเสร็จได้ไหม?", a: "ได้ครับ เต็มรูปแบบ — แจ้งข้อมูลบริษัทตอนจอง หรือทักที่ hello@bizdrive.co" },
      { q: "หลัง seminar จบ ยังถามได้ไหม?", a: "ได้ครับ 30 วันแรก ใน group chat เฉพาะ + รับ recording เอาไปทบทวนตลอด" },
    ],
    scarcity: "รอบนี้เหลือ 20 ที่นั่ง · ปิดรับสมัครเมื่อเต็ม",
    deadline: {
      at: "2026-05-29T09:00:00+07:00",
      label: "Seminar รอบนี้เริ่มใน",
      expiredLabel: "รอบ 29 พ.ค. จัดไปแล้ว — แจ้งรอบถัดไป",
    },
    idealFor: {
      title: "Seminar เหมาะกับคุณถ้า…",
      yes: [
        "เป็นเจ้าของธุรกิจที่อยากลงมือทำจริงใน 1 วัน ออกจากห้องไปแล้วใช้ต่อได้",
        "อยากเจอและคุยกับเจ้าของธุรกิจคนอื่นที่กำลังใช้ AI",
        "ต้องการ momentum และคนชี้แนะตรงโต๊ะคุณ ไม่ใช่เรียนคนเดียว",
        "พร้อมเดินทางมากรุงเทพฯ ในวันที่กำหนด",
      ],
      no: [
        { text: "อยากเรียนตามจังหวะตัวเอง ไม่อยากเดินทาง", linkTo: "manus-ai-online" },
        { text: "ธุรกิจซับซ้อน ต้องการ workflow เฉพาะตัว", linkTo: "manus-ai-private" },
      ],
    },
  },

  "manus-ai-private": {
    slug: "manus-ai-private",
    name: "Private 1:1 — Custom AI Coaching",
    tagline: "โค้ช 1:1 กับพี่แบงค์ — เนื้อหา Custom ทุก session ตามธุรกิจคุณ (Manus / AI Editor / Workflow / ใดก็ได้)",
    price: 39000,
    originalPrice: 59000,
    priceLabel: "฿39,000",
    priceNote: "4 sessions × 90 นาที · 1:1 · 60 วัน group support",
    badge: "Custom 1:1",
    accent: "blue-dark",
    cardSub: "4 sessions · ปรับเนื้อหาได้ทุกหัวข้อ",
    stripeUrl: null, // Private requires manual booking — keep null
    hero: {
      headline: "Private 1:1 — เนื้อหา Custom เต็มรูปแบบ ตามธุรกิจและเป้าหมายของคุณ",
      sub: "4 sessions กับพี่แบงค์ · เลือกหัวข้อเองได้ทุก session (Manus AI / AI Video Editor / workflow / automation / business strategy) · ออกแบบและส่งมอบให้ใช้ได้จริง · 60 วัน support หลังจบ",
      ctaPrimary: "ทักมาก่อนสมัคร",
      ctaSecondary: "ดูรายละเอียด Process",
    },
    problem: {
      title: "ธุรกิจคุณซับซ้อนเกินกว่าจะใช้ template สำเร็จรูป",
      points: [
        "คอร์สและ template สำเร็จรูป ใช้แล้วยังต้องดัดแปลงเองอยู่ดี",
        "ระบบในธุรกิจคุณซับซ้อน มีหลายช่องทาง หลายทีม หลายขั้นตอน",
        "เวลามีจำกัด อยากให้คนช่วยออกแบบแล้วส่งมอบเลย",
        "ต้องการคนที่เข้าใจธุรกิจคุณจริง ๆ ไม่ใช่ที่ปรึกษาที่อ่าน slide",
      ],
    },
    solution: {
      title: "4 sessions ออกแบบ — ส่งมอบ — ใช้ได้จริง · เนื้อหา Custom ทั้งหมด",
      body: "Private 1:1 กับพี่แบงค์ — ไม่ใช่คอร์สสำเร็จรูป แต่ออกแบบทุก session ตามโจทย์คุณ จะใช้ Manus AI ก็ได้ จะตัด video ด้วย AI Agent ก็ได้ จะวาง automation / dashboard / business workflow ก็ได้ · 4 sessions รวม 6 ชั่วโมง spread ใน 4-8 สัปดาห์ + 60 วัน group support",
    },
    modules: [
      { num: "S1", title: "Discovery + Audit (90 นาที)", text: "เข้าใจธุรกิจ ลูกค้า ขั้นตอนปัจจุบัน วาง map ปัญหาและโอกาส", bullets: [
        "Interview ลึก ๆ เกี่ยวกับ business model + ลูกค้า",
        "Audit งานปัจจุบัน — ระบุ pain point ที่ AI ช่วยได้",
        "Map opportunity 3-5 จุดที่ impact สูงสุด",
        "ส่งมอบ: Discovery report + recommended priority"
      ] },
      { num: "S2", title: "Workflow Design (90 นาที)", text: "ออกแบบ AI workflow 3-5 ชุด เฉพาะธุรกิจคุณ — ไม่ใช่ template", bullets: [
        "Whiteboard session ออกแบบ workflow ทีละตัว",
        "Pick stack ที่ใช่ — AI tools, integrations, automation",
        "Mock-up + flow chart พร้อม approval",
        "ส่งมอบ: Workflow blueprint ที่ตรงธุรกิจคุณ"
      ] },
      { num: "S3", title: "Build + Handover (90 นาที)", text: "สร้างจริง ทดสอบกับงานคุณ ส่งมอบพร้อม SOP", bullets: [
        "สร้าง workflow ที่ออกแบบใน session 2 — live ระหว่างเรียน",
        "ทดสอบกับ data จริงของคุณ + ปรับจูน",
        "Train คุณ/ทีมให้รันต่อได้เอง",
        "ส่งมอบ: ระบบที่ใช้งานได้ + SOP document"
      ] },
      { num: "S4", title: "Optimize + Scale Plan (90 นาที)", text: "ปรับจูนหลังใช้จริง วางแผน 90 วันถัดไป", bullets: [
        "Review ผลลัพธ์ 2-4 สัปดาห์หลัง deploy",
        "Optimize workflow ที่ใช้จริงแล้ว — ทำไม slow / where bottleneck",
        "Roadmap 90 วันต่อไป — phase 2 ที่ scale ได้",
        "ส่งมอบ: 90-day growth plan + KPI dashboard"
      ] },
    ],
    outcomes: [
      "ระบบ AI workflow 3-5 ชุด เฉพาะธุรกิจคุณ พร้อม SOP ส่งต่อให้ทีมได้",
      "ลดเวลางานซ้ำ 60-80% ภายในเดือนแรกของการใช้งาน",
      "แผน scale 90 วัน ที่ออกแบบให้ธุรกิจคุณโดยเฉพาะ",
      "เครื่องมือและ access ทั้งหมดเป็นของคุณ ไม่ผูกขาดกับ BizDrive",
      "60 วัน group support — ทักได้ตลอด ทีมตอบภายในวันทำการ",
    ],
    bonuses: [
      { title: "Custom Prompt Library", valueAmount: 9900, value: "฿9,900", text: "ชุด prompt ที่เขียนเฉพาะธุรกิจคุณ ใช้ต่อได้กับทีม" },
      { title: "60-Day Support Channel", valueAmount: 19900, value: "฿19,900", text: "ช่องทาง support 60 วัน ทักได้ตลอด ทีม BizDrive ดูแลเอง" },
      { title: "Manus AI Online + Seminar", valueAmount: 13800, value: "฿13,800", text: "เข้าได้ทั้ง online course และ seminar รอบถัดไป ฟรี" },
    ],
    guarantee: {
      title: "รับประกันผลลัพธ์ Session 1",
      text: "หลัง Session 1 (Discovery + Audit) ถ้ารู้สึกว่าไม่ใช่ทาง ทักมาภายใน 3 วัน คืนเงิน 80% — ไม่ถามเหตุผล",
    },
    faqs: [
      { q: "Session จัดออนไลน์หรือเจอกัน?", a: "Default เป็น online ผ่าน Zoom/Meet · ถ้าอยู่กรุงเทพฯ และอยากเจอกัน นัดที่ BizDrive Academy ได้ (ดูแผนที่ด้านล่าง) — ไม่มีค่าใช้จ่ายเพิ่ม" },
      { q: "Session ละกี่นาที?", a: "90 นาที × 4 ครั้ง รวม 6 ชั่วโมง spread ใน 4-8 สัปดาห์ตามจังหวะคุณ" },
      { q: "เหมาะกับธุรกิจขนาดไหน?", a: "ธุรกิจที่มีรายได้ระดับ 6-7 หลักต่อเดือน หรือทีม 1-15 คน ที่อยากวางระบบ AI จริงจัง" },
      { q: "ราคา ฿39,000 คุ้มยังไงเทียบกับ agency?", a: "Agency คิดงานแบบนี้ที่ ฿80,000–150,000 + project timeline 3-6 เดือน · Private 4 sessions รวม ฿39,000 + 60 วัน support · คุณได้ระบบที่ใช้ต่อเองได้ ไม่ติด vendor" },
      { q: "ถ้าระหว่าง 4 sessions ติดปัญหาเร่งด่วน?", a: "ทักมาที่ช่อง support ได้เลย ทีมตอบภายในวันทำการ — ถ้าซับซ้อนนัด session เพิ่มได้ (มีค่าใช้จ่ายเพิ่ม)" },
      { q: "อยากสอบถามก่อนสมัครได้ไหม?", a: "ได้ครับ ทักมาที่ LINE @bizdrive หรือ hello@bizdrive.co — ทีมตอบคำถามและช่วยประเมินว่า Private เหมาะกับคุณไหมก่อนตัดสินใจ" },
      { q: "ระบบที่สร้างขึ้น เป็นของใคร?", a: "เป็นของคุณ 100% — เครื่องมือทั้งหมดใช้ account ของคุณ ระบบ run บน infrastructure ของคุณ ไม่มี vendor lock-in" },
      { q: "ถ้ามีพนักงาน เรียนเสริมได้ไหม?", a: "session ปกติเป็น 1:1 — ถ้าอยากให้ทีมเข้าด้วย session ที่ 3 (Build + Handover) เปิดให้ได้ 1-2 คน" },
      { q: "ออกใบกำกับภาษี/หัก ณ ที่จ่ายได้?", a: "ออกใบกำกับภาษีเต็มรูปแบบได้ · หัก ณ ที่จ่ายตามที่กฎหมายกำหนดได้ — แจ้งทีมก่อนชำระ" },
      { q: "เริ่มได้เมื่อไหร่?", a: "หลังนัดคุยและยืนยัน เริ่ม Session 1 ได้ภายใน 1-2 สัปดาห์ ขึ้นอยู่กับคิวพี่แบงค์" },
      { q: "หลัง 4 sessions จบแล้ว ทำต่อยังไง?", a: "60-day group support ดูแลให้ใช้ระบบลื่นไหล · ถ้าต้องการ phase 2 (scale หรือ workflow ใหม่) ปรึกษาได้ มีแพ็คเกจต่อ" },
    ],
    scarcity: "รับลูกค้า private เพียง 4 ราย/เดือน เพื่อให้ดูแลได้เต็มที่",
    deadline: {
      rolling: { days: 3 },
      label: "ปิดรับสมัครคิวรอบนี้ใน",
      expiredLabel: "คิวเดือนนี้เต็ม — รอเปิดรอบถัดไป",
    },
    idealFor: {
      title: "Private 1:1 เหมาะกับคุณถ้า…",
      yes: [
        "ต้องการเนื้อหา Custom — ปรับเองได้ทุก session (Manus / AI Editor / workflow / อะไรก็ได้)",
        "ธุรกิจคุณซับซ้อน มีหลายช่องทาง หลายขั้นตอน หรือมีทีม 1-15 คน",
        "อยากให้คนช่วยคิดและส่งมอบระบบ ไม่ใช่แค่สอนแล้วทำเอง",
        "พร้อมลงทุนเพื่อเร่งการเติบโตของธุรกิจอย่างจริงจัง",
      ],
      no: [
        { text: "เพิ่งเริ่มต้น อยากเรียนพื้นฐานก่อน", linkTo: "manus-ai-online" },
        { text: "อยากเรียนกลุ่มและ network", linkTo: "manus-ai-seminar" },
      ],
    },
  },

  "ai-editor-online": {
    slug: "ai-editor-online",
    name: "AI Video Editor — Online",
    tagline: "ตัดต่อวิดีโอด้วย AI Agent — Codex / Claude + Hyperframes",
    price: 3900,
    originalPrice: 5900,
    priceLabel: "฿3,900",
    priceNote: "จ่ายครั้งเดียว · เรียนได้ตลอด · อัปเดตเนื้อหาฟรี",
    stripeUrl: null, // TODO: Stripe Payment Link — see /docs/STRIPE_SETUP.md
    badge: "Video Workflow",
    accent: "yellow",
    cardSub: "เรียน self-paced · ตัดคลิป Reels/TikTok ได้เองใน 1 สัปดาห์",
    heroVideo: { youtubeId: null, caption: "ตัวอย่างผลงานจริง — กำลังอัปโหลด เร็ว ๆ นี้" },
    hero: {
      headline: "ตัดวิดีโอด้วย AI Agent — จากคลิปดิบ 1 ชั่วโมง เป็น Reels พร้อมโพสต์ใน 5 นาที",
      sub: "ใช้ Codex CLI หรือ Claude Code สั่งงานผ่านคอมมานด์ — รวมกับ Hyperframes เฟรมเวิร์ก HTML-as-source · ไม่ต้องเปิด CapCut/Premiere อีกต่อไป",
      ctaPrimary: "สมัครเรียน Online",
      ctaSecondary: "ดูตัวอย่างผลงาน",
    },
    problem: {
      title: "ตัดต่อวิดีโอเองทุกครั้ง — เสียเวลาเป็นชั่วโมง ผลลัพธ์ไม่ consistent",
      points: [
        "เปิด CapCut/Premiere ตัด silence + ใส่ caption ทีละบรรทัด ใช้เวลา 1-2 ชั่วโมงต่อคลิป",
        "จ้างคนตัด เดือนละหลายพัน ส่งงานกลับมาไม่ตรงสไตล์ ต้องแก้ซ้ำ",
        "ลอง AI tools (Opus, Descript) แล้ว แต่ output ภาษาไทยยังไม่แม่น brand ก็ไม่ใช่",
        "อยากปล่อย Reels/TikTok วันละคลิป แต่ทำเองไม่ไหว",
      ],
    },
    solution: {
      title: "AI Agent + Hyperframes — สั่งครั้งเดียว ระบบทำให้ทุกขั้นตอน",
      body: "เรียนใช้ Codex CLI หรือ Claude Code เป็น AI Agent สั่งงานผ่านคอมมานด์ จับคู่กับ Hyperframes (HTML-as-source video framework จาก HeyGen, Apache 2.0) — silencedetect → whisper ภาษาไทย → kinetic captions → motion punches → end slate · ครบในไปป์ไลน์เดียว · brand consistency 100%",
    },
    modules: [
      { num: "01", title: "Setup AI Agent + Hyperframes", text: "ติดตั้ง Codex/Claude Code CLI + Hyperframes ให้พร้อมรันคลิปแรก", bullets: [
        "เลือก Codex CLI vs Claude Code — อะไรเหมาะกับสไตล์คุณ (เรียนทั้งคู่)",
        "ติดตั้ง Hyperframes + dependencies (ffmpeg, whisper, Node)",
        "Setup API key (Anthropic / OpenAI / Pexels) + zsh aliases",
        "Render คลิปทดสอบแรก — จบใน 30 นาที"
      ] },
      { num: "02", title: "Pipeline ตัดต่ออัตโนมัติ", text: "ออกแบบ workflow 4 ขั้นที่ BizDrive ใช้จริงทุกวัน", bullets: [
        "process-2cam.sh — sync 2 กล้อง + ตัด silence อัตโนมัติ",
        "build-composition.py — whisper ภาษาไทย → kinetic caption",
        "fetch-broll.py — Pexels API ดึง B-Roll อัตโนมัติ 3-5 จุด/คลิป",
        "Render Pipeline — 9:16 + 1:1 + 16:9 จากต้นฉบับเดียว"
      ] },
      { num: "03", title: "Brand Kit + Motion Design", text: "ออกแบบ caption / motion / end slate ที่เป็นสไตล์คุณ", bullets: [
        "HTML/CSS template สำหรับ kinetic caption (เปลี่ยนสี/ฟอนต์ทั้งคลิปด้วยบรรทัดเดียว)",
        "Motion punch presets — zoom / shake / flash ตามจังหวะเสียง",
        "End slate / lower-third / progress bar — reuse ได้ทุกคลิป",
        "Export brand kit เป็น JSON — handoff ให้ทีมหรือ AI Agent ได้"
      ] },
      { num: "04", title: "Prompt Engineering สำหรับวิดีโอ", text: "วิธีสั่ง AI Agent ให้ตัดคลิปแบบที่คุณคิดในหัว", bullets: [
        "Prompt template สำหรับ Codex / Claude ที่ใช้กับ Hyperframes",
        "ตัวอย่าง prompt 30 ชุด: Reels education / promo / testimonial / vlog",
        "วิธี iterate — feedback loop ที่ทำให้ output ดีขึ้นทุกครั้ง",
        "Debug strategy — เมื่อ AI ทำผิด แก้ยังไงให้เร็ว"
      ] },
      { num: "05", title: "B-Roll + Visual Storytelling", text: "ดึง footage อัตโนมัติจาก Pexels + เลือกจุดใส่ที่เหมาะ", bullets: [
        "Pexels API + search query strategy (ภาษาอังกฤษให้ผลดีกว่า)",
        "Logic ใส่ B-Roll 3-5 จุด/คลิป — เลือกจังหวะที่ engagement ดีขึ้น",
        "Mix stock + footage ของคุณเอง — pipeline เลือกอันที่ใช่",
        "License compliance — track ที่มาทุก clip"
      ] },
      { num: "06", title: "Batch Render + Scale Production", text: "ทำคลิปเป็นสิบในครั้งเดียว — Pipeline จัดคิว render เอง", bullets: [
        "Batch script — รัน 10-20 คลิปข้ามคืน",
        "Render queue + retry logic — เผื่อ error",
        "Output organization — โครงสร้างไฟล์ที่หาง่าย หลังจาก batch 100 คลิป",
        "Scale plan — เมื่อทำวันละ 5 คลิป ขั้นต่อไปคืออะไร"
      ] },
    ],
    outcomes: [
      "ตัด Reels/TikTok ได้เอง 1 ชม. footage → 5 นาทีงานเสร็จ",
      "Brand consistency 100% — ทุกคลิปออกมาเป็นสไตล์เดียวกัน",
      "ลดค่าจ้างคนตัดเดือนละหลายพัน — ทำเองได้ คุณภาพดีกว่า",
      "ปล่อยคอนเทนต์วันละคลิปได้จริง โดยไม่ต้องล้าใจ",
      "ระบบที่ scale ได้ — เพิ่มเป็นสัปดาห์ละ 20-30 คลิปได้เมื่อพร้อม",
    ],
    bonuses: [
      { title: "Brand Kit Template — BizDrive Blue/Yellow", valueAmount: 2900, value: "฿2,900", text: "HTML/CSS template ครบชุด — เอาไปแก้สีเป็นแบรนด์คุณได้ทันที" },
      { title: "Prompt Library 30+ ชุด", valueAmount: 1900, value: "฿1,900", text: "Prompt template สำหรับ Codex / Claude พร้อมใช้กับ Hyperframes" },
      { title: "Community Group + Office Hour", valueAmount: 2900, value: "฿2,900", text: "เข้ากลุ่ม + office hour สัปดาห์ละครั้ง ถามได้ทุกอย่างเรื่องตัดวิดีโอ" },
    ],
    guarantee: {
      title: "รับประกัน 7 วัน คืนเงินเต็มจำนวน",
      text: "ลองเรียน 7 วัน ถ้ารู้สึกว่าไม่ใช่ทางคุณ ทักมา คืนเงินให้เต็มจำนวน ไม่ถาม",
    },
    faqs: [
      { q: "ต้องมีพื้นฐานเขียนโค้ดไหม?", a: "ไม่ต้องครับ — AI Agent (Codex/Claude) เป็นคนเขียนโค้ดให้ คุณแค่สั่งเป็นภาษาคน คอร์สสอนตั้งแต่ติดตั้งจนใช้เป็น" },
      { q: "ต้องใช้คอมแรงไหม? Mac หรือ Windows ก็ได้?", a: "Mac (M1+) หรือ Windows มี GPU ใช้ได้หมด — render คลิป 1 ชม. ใช้เวลาประมาณ 5-10 นาทีบน M1 Pro · คอร์สครอบคลุมทั้งสอง OS" },
      { q: "Codex CLI กับ Claude Code ต่างกันยังไง? เลือกตัวไหน?", a: "Codex CLI = OpenAI · Claude Code = Anthropic — สไตล์การสั่งงานคล้ายกัน คอร์สสอนทั้งคู่ คุณเลือกใช้ที่ถนัด หรือใช้ทั้งคู่ก็ได้" },
      { q: "Hyperframes คืออะไร? ต้องเสียเงินไหม?", a: "Hyperframes เป็น open-source video framework จาก HeyGen ใช้ HTML/CSS เป็น source — ฟรี (Apache 2.0) ไม่มีค่าใช้จ่ายต่อคลิป · ค่าใช้จ่ายมีแค่ API call ของ AI Agent" },
      { q: "ค่า API จะแพงไหม?", a: "ตัด 1 คลิป (1 ชม. footage) ใช้ token ประมาณ ฿3-15 บาท ขึ้นกับความซับซ้อน · ถูกกว่าเปิด CapCut เป็นชั่วโมงเยอะ" },
      { q: "ใช้ภาษาไทยได้ดีไหม? Whisper transcribe แม่นยำหรือเปล่า?", a: "Whisper large-v3 ภาษาไทยแม่น 92-96% สำหรับเสียงชัด · คอร์สมีเทคนิคแก้/ทบทวน auto-caption ให้ผ่าน QA ก่อนปล่อย" },
      { q: "ตัดได้แค่ Reels/TikTok หรือ YouTube ยาวก็ได้?", a: "ได้หมด — 9:16 (Reels/TikTok/Shorts), 1:1 (Feed), 16:9 (YouTube ยาว) · จาก source เดียวกัน export ได้ 3 ratio" },
      { q: "ราคา ฿3,900 คุ้มยังไง?", a: "ของรวมเกิน ฿11,000 — คอร์ส + Brand Kit + Prompt Library + Community · เทียบจ้างคนตัดเดือนละ 5,000-15,000 คืนทุนใน 1-2 เดือน" },
      { q: "เนื้อหาอัปเดตหรือเปล่า?", a: "อัปเดตตลอด เมื่อ Hyperframes ออกเวอร์ชันใหม่ หรือมี AI Agent ตัวใหม่ที่ดีกว่า เราจะเพิ่มเข้าไปในคอร์สโดยไม่คิดเงินเพิ่ม" },
      { q: "ถ้าเรียนแล้วติด ถามได้ที่ไหน?", a: "Community Group + Office Hour สัปดาห์ละครั้ง (Zoom) ทีม BizDrive ตอบเอง" },
      { q: "คืนเงินยังไง?", a: "ภายใน 7 วันแรก ทักมาที่ hello@bizdrive.co คืนเงินให้เต็มจำนวน ไม่ต้องอธิบายเหตุผล" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ออกใบกำกับภาษี/ใบเสร็จเต็มรูปแบบได้ — แจ้งทีมตอนสมัครหรือทักมาที่ hello@bizdrive.co พร้อมข้อมูลบริษัท" },
    ],
    scarcity: "เปิดรับสมัครรอบนี้ราคาเริ่มต้น — ราคาจะปรับขึ้นเมื่อเปิดรอบถัดไป",
    deadline: {
      rolling: { days: 2 },
      label: "ราคารอบเริ่มต้น ปิดใน",
      expiredLabel: "รอบนี้ปิดแล้ว — รออัปเดตรอบใหม่",
    },
    idealFor: {
      title: "คลาสนี้เหมาะกับคุณถ้า…",
      yes: [
        "เป็นคนทำคอนเทนต์ / เจ้าของธุรกิจที่ต้องปล่อยวิดีโอเป็นประจำ",
        "อยากตัด Reels/TikTok ได้เองโดยไม่ต้องจ้างคนตัด",
        "พร้อมเรียนใช้ AI Agent (Codex/Claude) แบบจริงจัง — สั่งผ่านคอมมานด์",
        "ต้องการ pipeline ที่ scale ได้เป็นสิบ ๆ คลิปต่อสัปดาห์",
      ],
      no: [
        { text: "ต้องการเทมเพลตคลิกลาก แบบ CapCut/Canva", linkTo: null },
        { text: "อยากเจอเจ้าของธุรกิจคนอื่น เรียน hands-on", linkTo: "ai-editor-seminar" },
      ],
    },
  },

  "ai-editor-seminar": {
    slug: "ai-editor-seminar",
    name: "AI Video Editor — Seminar",
    tagline: "Workshop 1 วัน — ตั้ง AI Pipeline ตัดคลิปกลับไปใช้ได้ทันที",
    price: 9900,
    originalPrice: 14900,
    priceLabel: "฿9,900",
    priceNote: "ราคาต่อท่าน · รวมอาหารและเอกสาร · ที่นั่งจำกัด 15 คน",
    stripeUrl: null, // TODO: Stripe Payment Link — see /docs/STRIPE_SETUP.md
    badge: "Workshop",
    accent: "yellow",
    cardSub: "1 วันเต็ม · กลุ่มเล็ก · setup pipeline บนเครื่องคุณเอง",
    heroVideo: { youtubeId: "dQw4w9WgXcQ", caption: "ตัวอย่างผลงานจาก seminar ก่อนหน้า" },
    hero: {
      headline: "1 วันเต็ม — กลับบ้านพร้อม Pipeline ตัดวิดีโอด้วย AI Agent ทำงานบนเครื่องคุณ",
      sub: "Workshop กลุ่มเล็ก 15 ท่าน · พี่แบงค์ + ทีม BizDrive setup Codex/Claude + Hyperframes ให้คุณ ทดสอบกับ footage ของคุณเองในคลาส · ออกจากห้องตัดคลิปได้เลย",
      ctaPrimary: "จองที่นั่ง Seminar",
      ctaSecondary: "ดูตารางวัน",
    },
    problem: {
      title: "ลองตั้ง pipeline เองที่บ้าน — ติด error เป็นสิบจุด ไม่รู้จะถามใคร",
      points: [
        "อ่าน docs Hyperframes แล้ว แต่ติดตั้งจริงเจอ error เกือบทุกขั้นตอน",
        "AI Agent (Codex/Claude) สั่งไม่ตรงใจ ไม่รู้ prompt ผิดตรงไหน",
        "อยากเห็นคนที่ทำเป็น ตัด live ให้ดู — ไม่ใช่อ่านเอง",
        "ต้องการ momentum — 1 วันลงมือจริง ออกจากห้องตัดคลิปได้ทันที",
      ],
    },
    solution: {
      title: "Workshop 1 วัน — มาตัวเปล่า กลับไปพร้อม Pipeline ทำงานได้",
      body: "Seminar กลุ่มเล็ก 15 ท่าน · เน้น hands-on setup pipeline บนเครื่องคุณเอง · พี่แบงค์ + ทีม BizDrive วนโต๊ะ ช่วยตั้ง Codex/Claude + Hyperframes + ทดสอบกับ footage ของคุณ · จบวันมี pipeline ที่ทำงานบนเครื่องคุณ + คลิปแรกเสร็จเลย",
    },
    modules: [
      { num: "09:00", title: "เปิดวัน + Setup เครื่อง", text: "เซ็ต Codex/Claude CLI + Hyperframes + dependencies ทุกเครื่อง", bullets: [
        "Welcome + แนะนำตัว 15 ท่าน",
        "Install: Node + ffmpeg + whisper + Hyperframes (ทีม BizDrive ช่วยทุกเครื่อง)",
        "Set API key — Anthropic / OpenAI / Pexels",
        "Test cảord render — แต่ละคนได้คลิปทดสอบแรก"
      ] },
      { num: "10:30", title: "Pipeline Foundation", text: "เรียนปูพื้น 4 ขั้นของ pipeline + run แรกกับ footage ตัวอย่าง", bullets: [
        "silencedetect + cut — ตัด dead air อัตโนมัติ",
        "whisper ภาษาไทย → SRT — เทียบ accuracy",
        "Coffee break (15 นาที)"
      ] },
      { num: "11:30", title: "Hands-on: ตัด Reels จากคลิปคุณ", text: "ใช้ footage ที่เตรียมมา ตัด Reels แรกในคลาส", bullets: [
        "อัปโหลด footage ของคุณ (เตรียมมา 5-10 นาที)",
        "รัน pipeline 4 ขั้น → ได้ Reels แรก",
        "Peer review — เพื่อนข้าง ๆ feedback"
      ] },
      { num: "13:00", title: "พักเที่ยง + Networking", text: "อาหารเที่ยงรวม คุยกับคนทำคอนเทนต์คนอื่น", bullets: [
        "Lunch รวม (รวมในราคา)",
        "Speed networking",
        "พี่แบงค์ ตอบคำถาม free flow"
      ] },
      { num: "14:00", title: "Brand Kit + Caption Design", text: "ออกแบบ caption + motion + end slate ที่เป็นสไตล์คุณ", bullets: [
        "เปลี่ยน HTML/CSS template ให้เป็นสีแบรนด์คุณ",
        "Motion punch presets — ปรับ timing",
        "Export brand kit เป็น JSON"
      ] },
      { num: "15:30", title: "Prompt + B-Roll Workflow", text: "สั่ง AI Agent + ดึง B-Roll จาก Pexels", bullets: [
        "Prompt template 10 ชุด — ลองสั่ง Codex/Claude แต่ละแบบ",
        "Pexels API — ดึง B-Roll 3-5 จุด/คลิป",
        "iterate — feedback loop ที่ทำให้ output ดีขึ้น"
      ] },
      { num: "17:00", title: "Wrap + Production Plan", text: "สรุปแผน 30 วัน + batch production คลิปแรก", bullets: [
        "30-day content plan + production schedule",
        "Buddy system — accountability 30 วัน",
        "Group chat invite — start วันถัดไป"
      ] },
    ],
    outcomes: [
      "Pipeline ตัดวิดีโอด้วย AI Agent ทำงานบนเครื่องคุณ ใช้ได้ทันทีตั้งแต่วันถัดไป",
      "Brand Kit + Caption Template เป็นสไตล์คุณเอง พร้อม reuse ทุกคลิป",
      "คลิปแรกเสร็จในคลาส — ออกจากห้องได้เลย",
      "เครือข่ายคนทำคอนเทนต์/เจ้าของธุรกิจ 14 คน",
      "วิดีโอบันทึก seminar + 30 วัน group support ทบทวนได้ตลอด",
    ],
    bonuses: [
      { title: "วิดีโอบันทึก Seminar เต็มวัน", valueAmount: 4900, value: "฿4,900", text: "ทบทวนได้ทุกที่ ทุกเวลา หลังจบ Workshop" },
      { title: "30-Day Group Support", valueAmount: 9900, value: "฿9,900", text: "กลุ่ม support 30 วันหลัง seminar ทีม BizDrive ตอบเอง" },
      { title: "AI Video Editor Online Course", valueAmount: 3900, value: "฿3,900", text: "แถมคอร์สออนไลน์เต็มชุด เรียนต่อหลัง Workshop ได้เลย" },
    ],
    guarantee: {
      title: "รับประกันความพอใจ",
      text: "ถ้าจบวัน ไม่รู้สึกว่าคุ้ม ทักมาภายใน 7 วัน คืนเงินครึ่งหนึ่งโดยไม่ถาม",
    },
    faqs: [
      { q: "Seminar จัดที่ไหน วันไหน?", a: "จัดที่ BizDrive Academy กรุงเทพมหานคร · วันที่จะแจ้งเมื่อยืนยันการจอง ที่นั่งจำกัด 15 ท่าน/รอบ — ดูแผนที่ในส่วนสถานที่ด้านล่าง" },
      { q: "ต้องเอา notebook มาเองไหม?", a: "ใช่ครับ — เอา Mac (M1+ แนะนำ) หรือ Windows มี GPU + เตรียม footage ตัวอย่าง 5-10 นาที (วิดีโอที่คุณถ่ายเอง)" },
      { q: "ต้องลง software ก่อนมาไหม?", a: "ไม่ต้องครับ ทีม BizDrive setup ให้ทุกเครื่องในคลาส 1 ชั่วโมงแรก — ออกจากห้องไปทุกอย่างพร้อมใช้บนเครื่องคุณ" },
      { q: "ถ้าไม่เคยใช้ AI Agent (Codex/Claude) มาก่อน?", a: "ไม่ต้องกังวล — คอร์สสอนตั้งแต่ติดตั้งจนใช้เป็น · เริ่มจาก 0 ได้เลย" },
      { q: "ราคา ฿9,900 คุ้มยังไงเทียบกับ online?", a: "ของรวมเกิน ฿18,000 — Workshop + วิดีโอบันทึก + 30-day support + แถม Online Course · setup pipeline ในคลาสประหยัดเวลา troubleshoot 5-10 ชั่วโมงที่บ้าน" },
      { q: "อาหารและน้ำ?", a: "อาหารเที่ยง + coffee break เช้า/บ่าย + น้ำดื่ม — รวมในราคาแล้ว" },
      { q: "จองแล้วยกเลิกได้ไหม?", a: "แจ้งล่วงหน้า 14 วัน คืน 100% · 7 วัน คืน 50% · น้อยกว่านั้นเลื่อนไปรอบถัดไปได้" },
      { q: "มีรอบไหนบ้าง?", a: "เปิดรอบทุก 6-8 สัปดาห์ · ทักมาที่ hello@bizdrive.co เพื่อดูตารางล่าสุด" },
      { q: "ไปกับทีมได้ไหม?", a: "ได้ครับ ทีม 2-3 คนจากบริษัทเดียวกันมีส่วนลด 15% — แจ้งตอนจอง" },
      { q: "ออกใบกำกับภาษี/ใบเสร็จได้ไหม?", a: "ได้ครับ เต็มรูปแบบ — แจ้งข้อมูลบริษัทตอนจอง" },
      { q: "หลัง seminar จบ ยังถามได้ไหม?", a: "ได้ครับ 30 วันแรก ใน group chat เฉพาะ + รับ recording เอาไปทบทวนตลอด" },
    ],
    scarcity: "รอบนี้เหลือ 15 ที่นั่ง · ปิดรับสมัครเมื่อเต็ม",
    deadline: {
      rolling: { days: 5 },
      label: "รอบปัจจุบันปิดรับใน",
      expiredLabel: "รอบนี้เต็มแล้ว — แจ้งรอบถัดไป",
    },
    idealFor: {
      title: "Seminar เหมาะกับคุณถ้า…",
      yes: [
        "เป็นคนทำคอนเทนต์ / เจ้าของธุรกิจที่ต้องปล่อยวิดีโอเป็นประจำ",
        "อยาก setup pipeline บนเครื่องตัวเองให้ทำงานได้จบในวันเดียว",
        "ต้องการคนช่วย troubleshoot ตรงโต๊ะคุณ ไม่ใช่นั่งงมเอง",
        "พร้อมเดินทางมากรุงเทพฯ ในวันที่กำหนด",
      ],
      no: [
        { text: "อยากเรียนตามจังหวะตัวเอง ไม่อยากเดินทาง", linkTo: "ai-editor-online" },
        { text: "ต้องการ workflow ที่ออกแบบเฉพาะธุรกิจคุณ 1:1", linkTo: "manus-ai-private" },
      ],
    },
  },

  "claude-online": {
    slug: "claude-online",
    name: "Claude AI — Online",
    tagline: "เจาะลึก Claude AI สำหรับธุรกิจ · ใช้งานลึกกว่า ChatGPT",
    price: 3900,
    originalPrice: 5900,
    priceLabel: "฿3,900",
    priceNote: "จ่ายครั้งเดียว · เรียนได้ตลอด · อัปเดตเนื้อหาฟรี",
    badge: "Deep Dive",
    accent: "orange",
    cardSub: "เรียน self-paced · Claude expert ใน 2 สัปดาห์",
    stripeUrl: null,
    hero: {
      headline: "Claude AI — AI ที่ฉลาดที่สุดสำหรับงานคิดเชิงระบบและโค้ด",
      sub: "เจาะลึก Claude (Anthropic) — Projects, Artifacts, Claude Code, MCP servers · เหมาะกับงาน analysis, strategy, coding, document processing ที่ ChatGPT ทำได้ไม่ลึกพอ",
      ctaPrimary: "สมัครเรียน Online",
      ctaSecondary: "ดูเนื้อหาคอร์ส",
    },
    problem: {
      title: "ใช้ ChatGPT มาแล้ว แต่บางงานยังตอบไม่ตรง — Claude อาจใช่",
      points: [
        "ใช้ ChatGPT วิเคราะห์ข้อมูลยาวๆ มันลืมบริบทกลางทาง",
        "อยากให้ AI ช่วยเขียนโค้ด/ทำเว็บ แต่ ChatGPT plus ไม่พอ",
        "ทำงานเอกสารยาวๆ (สัญญา, report, proposal) — ChatGPT cut off",
        "ลอง Claude แล้วชอบ แต่ใช้ได้แค่ผิวๆ — ไม่รู้ทุก feature",
      ],
    },
    solution: {
      title: "เรียน Claude ลึก — ทุก feature ที่ทำให้คุณทำงานเร็วขึ้น 5-10 เท่า",
      body: "ไม่ใช่คอร์สสอน prompt ทั่วไป — เป็นคอร์ส Claude-specific ที่ครอบคลุม Projects (knowledge base), Artifacts (live preview), Claude Code (เขียนแอป), MCP servers (connect tools), API · เหมาะกับคนที่ใช้ ChatGPT มาแล้วและอยากยกระดับ",
    },
    modules: [
      { num: "01", title: "Claude Fundamentals + Projects", text: "Setup, pricing, model selection (Opus/Sonnet/Haiku)", bullets: [
        "เลือก plan ที่คุ้ม — Free / Pro / Team / Enterprise",
        "Projects = workspace ที่จำบริบทยาวๆ · ใส่ knowledge ของธุรกิจคุณ",
        "เปรียบเทียบ Claude vs ChatGPT vs Gemini — ใช้ตัวไหนเมื่อไหร่",
        "Setup project แรกของธุรกิจคุณ"
      ] },
      { num: "02", title: "Artifacts — Live preview ในแชท", text: "สร้าง webapp / dashboard / สเปรดชีต ใน chat", bullets: [
        "Artifact คืออะไร — preview HTML/React/SVG ในแชท",
        "สร้าง landing page mini ใน 10 นาที",
        "Interactive dashboard จากข้อมูลคุณ",
        "Share artifact ให้ทีมดู"
      ] },
      { num: "03", title: "Claude Code — CLI สำหรับ developer", text: "AI Agent ในเทอร์มินัล · เขียนแอปทั้งโปรเจกต์", bullets: [
        "Install + setup Claude Code CLI",
        "สั่งให้เขียน feature ทั้ง flow",
        "Code review + refactor",
        "Hyperframes integration (สำหรับตัดวิดีโอ)"
      ] },
      { num: "04", title: "MCP Servers — เชื่อม Claude กับเครื่องมือคุณ", text: "Slack, Notion, Linear, GitHub, Google Drive ทำใน Claude", bullets: [
        "MCP คืออะไร · ทำไม important",
        "Setup MCP servers ที่ใช้บ่อย",
        "สั่ง Claude ดู Notion ของคุณ · ตอบ Slack",
        "Build MCP server ของตัวเอง (basic)"
      ] },
      { num: "05", title: "Long Context + Document Processing", text: "Claude อ่านได้ 200K tokens — เอกสาร 500 หน้า", bullets: [
        "Process สัญญา/report/proposal ยาวๆ",
        "Extract data จาก PDF/Word/Excel",
        "Summarize + analyze เอกสารหลายไฟล์พร้อมกัน",
        "Compare versions ของเอกสาร"
      ] },
      { num: "06", title: "Claude API + Automation", text: "ใช้ Claude ใน app/script ของคุณ", bullets: [
        "API key + pricing model",
        "Build automation script (Python/JS)",
        "Webhook integration",
        "Cost optimization — ใช้ตัวไหนกับงานไหน"
      ] },
    ],
    outcomes: [
      "ใช้ Claude ทุก feature — Projects, Artifacts, Code, MCP",
      "วิเคราะห์เอกสารยาวเป็นสิบหน้าได้ใน 2-3 นาที",
      "สร้างเครื่องมือ/แอปของตัวเองด้วย Claude Code ได้ทันที",
      "เชื่อม Claude กับ Slack/Notion/Linear/Drive ได้",
      "เลือก AI ที่ใช่กับงาน — ไม่ยึดติด ChatGPT อย่างเดียว",
    ],
    bonuses: [
      { title: "Claude Prompt Library 50+ ชุด", valueAmount: 2900, value: "฿2,900", text: "Prompt สำหรับ analysis/coding/writing ที่ใช้ Claude เก่งสุด" },
      { title: "MCP Server Setup Guide", valueAmount: 1900, value: "฿1,900", text: "วิธี setup MCP สำหรับเครื่องมือยอดนิยม 10 ตัว" },
      { title: "Community + Office Hour", valueAmount: 2900, value: "฿2,900", text: "เข้ากลุ่ม Claude power users ไทย + office hour สัปดาห์ละครั้ง" },
    ],
    guarantee: {
      title: "รับประกัน 7 วัน คืนเงินเต็มจำนวน",
      text: "ลองเรียน 7 วัน ถ้ารู้สึกว่าไม่ใช่ทางคุณ ทักมา คืนเงินให้เต็มจำนวน ไม่ถาม",
    },
    faqs: [
      { q: "ต้องใช้ ChatGPT มาก่อนไหม?", a: "ไม่จำเป็น — แต่ถ้าใช้ ChatGPT มาแล้วจะเห็นความแตกต่างชัดเจน · คอร์สเริ่มจาก Claude Fundamentals ครอบคลุมพื้นฐานครบ" },
      { q: "Claude Pro ฿700/เดือนคุ้มไหม?", a: "คุ้มถ้าใช้ทุกวัน — Free มี limit เร็ว · คอร์สสอนเลือก plan ที่เหมาะกับงานคุณ · Pro/Team/Enterprise ต่างกันยังไง" },
      { q: "ต้องเขียนโค้ดเป็นไหม สำหรับ Claude Code?", a: "ไม่ต้อง — Claude Code เขียนโค้ดให้ คุณแค่สั่งเป็นภาษาคน · คอร์สสอนตั้งแต่ติดตั้งจนใช้เป็น · เริ่มจาก 0 ได้" },
      { q: "MCP ยากไหม? Beginner ทำได้ไหม?", a: "Setup MCP server ที่มีอยู่แล้วง่ายมาก — แค่ copy config · คอร์สมี step-by-step สำหรับ 10 MCP ยอดนิยม" },
      { q: "ราคา ฿3,900 คุ้มยังไง?", a: "ของรวมเกิน ฿11,000 — คอร์ส + Prompt Library + MCP Guide + Community · เทียบเวลาที่ประหยัด คุ้มภายใน 1-2 สัปดาห์" },
      { q: "เนื้อหาอัปเดตหรือเปล่า?", a: "อัปเดตตลอด — Anthropic ปล่อยฟีเจอร์ใหม่บ่อย เราเพิ่มเข้า course โดยไม่คิดเงินเพิ่ม" },
      { q: "ใช้ Claude ภาษาไทยได้ดีไหม?", a: "ดีเทียบ ChatGPT — โดยเฉพาะการคิดเชิงระบบ/วิเคราะห์ · คอร์สมีตัวอย่าง prompt ภาษาไทยครบ" },
      { q: "คืนเงินยังไง?", a: "ภายใน 7 วันแรก ทักมาที่ hello@bizdrive.co คืนเงินให้เต็มจำนวน ไม่ต้องอธิบายเหตุผล" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ออกใบกำกับภาษี/ใบเสร็จเต็มรูปแบบได้ — แจ้งทีมตอนสมัคร" },
    ],
    scarcity: "เปิดรับสมัครรอบนี้ราคาเริ่มต้น — ราคาจะปรับขึ้นเมื่อเปิดรอบถัดไป",
    deadline: {
      rolling: { days: 3 },
      label: "ราคารอบเริ่มต้น ปิดใน",
      expiredLabel: "รอบนี้ปิดแล้ว — รออัปเดตรอบใหม่",
    },
    idealFor: {
      title: "คลาสนี้เหมาะกับคุณถ้า…",
      yes: [
        "ใช้ ChatGPT มาแล้วและอยากยกระดับด้วย AI ที่คิดลึกกว่า",
        "ทำงานเอกสารยาวๆ / analysis / strategy / coding",
        "อยากสร้างเครื่องมือ/แอปของตัวเองด้วย Claude Code",
        "ทำงานกับ Slack/Notion/Linear และอยากให้ AI ทำแทน",
      ],
      no: [
        { text: "เพิ่งเริ่มต้น AI ครั้งแรก", linkTo: "manus-ai-online" },
        { text: "อยากเรียนตัดวิดีโอเฉพาะ", linkTo: "ai-editor-online" },
        { text: "อยากเรียน hands-on + network", linkTo: "claude-seminar" },
      ],
    },
  },

  "claude-seminar": {
    slug: "claude-seminar",
    name: "Claude AI — Seminar",
    tagline: "Workshop 1 วัน — Setup Claude ครบทุก feature บนเครื่องคุณเอง",
    price: 9900,
    originalPrice: 14900,
    priceLabel: "฿9,900",
    priceNote: "ราคาต่อท่าน · รวมอาหารและเอกสาร · ที่นั่งจำกัด 15 คน",
    badge: "Workshop",
    accent: "orange",
    cardSub: "1 วันเต็ม · setup Claude + MCP บนเครื่องคุณ",
    stripeUrl: null,
    hero: {
      headline: "1 วัน — เป็น Claude Power User ออกจากห้องไปใช้ลึกได้ทันที",
      sub: "Workshop กลุ่ม 15 ท่าน · พี่แบงค์ + ทีม BizDrive ตั้ง Claude Code + MCP servers + Projects ให้คุณ · ทดสอบกับงานจริงในคลาส",
      ctaPrimary: "จองที่นั่ง Seminar",
      ctaSecondary: "ดูตารางวัน",
    },
    problem: {
      title: "ลองใช้ Claude เองที่บ้าน — ติด setup เป็นสิบจุด ไม่รู้ใช้ feature ไหนคุ้ม",
      points: [
        "อ่าน docs Claude แล้ว แต่ติดตั้ง Claude Code/MCP เจอ error",
        "ไม่รู้ว่า Projects/Artifacts/Code/MCP feature ไหนเหมาะกับงานคุณ",
        "อยากเห็นคนทำเป็น setup live ให้ดู — ไม่ใช่อ่านเอง",
        "ต้องการ momentum — 1 วันลงมือจริง ออกจากห้องใช้ Claude ลึกได้",
      ],
    },
    solution: {
      title: "Workshop 1 วัน — มาตัวเปล่า กลับไปพร้อม Claude พร้อมใช้ทุก feature",
      body: "Seminar กลุ่ม 15 ท่าน · เน้น hands-on setup Claude บนเครื่องคุณ · พี่แบงค์ + ทีม BizDrive วนโต๊ะช่วย setup Projects + Claude Code + MCP · จบวันมี Claude workspace ของคุณเอง พร้อมใช้กับธุรกิจ",
    },
    modules: [
      { num: "09:00", title: "เปิดวัน + Setup", text: "Install Claude Pro/Code + MCP basics", bullets: [
        "Welcome + แนะนำตัว 15 ท่าน",
        "Setup laptop + sign in Claude",
        "Install Claude Code CLI",
        "Test first command — แต่ละคนได้ผลลัพธ์แรก"
      ] },
      { num: "10:30", title: "Projects + Knowledge Base", text: "สร้าง workspace ของธุรกิจคุณใน Claude", bullets: [
        "อัปโหลด knowledge ของคุณ (brand voice, products, FAQ)",
        "Test query — Claude ตอบเป็นเสียงคุณ",
        "Coffee break (15 นาที)"
      ] },
      { num: "11:30", title: "Artifacts Hands-on", text: "สร้าง mini-app/landing/dashboard ในคลาส", bullets: [
        "Build landing page ของคุณใน Artifact",
        "Interactive form/calculator",
        "Peer review — เพื่อนข้าง ๆ feedback"
      ] },
      { num: "13:00", title: "พักเที่ยง + Networking", text: "อาหารเที่ยงรวม คุยกับ Claude power users", bullets: [
        "Lunch รวม (รวมในราคา)",
        "Speed networking",
        "Q&A free flow"
      ] },
      { num: "14:00", title: "Claude Code Workshop", text: "ใช้ Claude Code เขียน script/app ในคลาส", bullets: [
        "Setup project structure",
        "สั่ง Claude Code เขียน feature แรก",
        "Debug + iterate"
      ] },
      { num: "15:30", title: "MCP Servers Setup", text: "เชื่อม Claude กับเครื่องมือที่คุณใช้", bullets: [
        "เลือก MCP จาก 10 ตัวยอดนิยม",
        "Setup + test — Notion/Slack/Drive/GitHub",
        "สั่ง Claude ทำงานข้ามแอป"
      ] },
      { num: "17:00", title: "Wrap + Action Plan", text: "30-day plan + buddy system", bullets: [
        "30-day action plan ของแต่ละคน",
        "Buddy system — accountability 30 วัน",
        "Group chat invite — start วันถัดไป"
      ] },
    ],
    outcomes: [
      "Claude workspace ของคุณเอง — Projects + Code + MCP พร้อมใช้",
      "Setup ทำงานบนเครื่องคุณ ออกจากห้องไปใช้ต่อทันที",
      "เครือข่าย Claude power users ไทย 14 คน",
      "Recording + 30-day group support",
      "Prompt + workflow library เฉพาะธุรกิจคุณ",
    ],
    bonuses: [
      { title: "วิดีโอบันทึก Seminar เต็มวัน", valueAmount: 4900, value: "฿4,900", text: "ทบทวนได้ทุกที่ ทุกเวลา หลังจบ Workshop" },
      { title: "30-Day Group Support", valueAmount: 9900, value: "฿9,900", text: "กลุ่ม support 30 วันหลัง seminar ทีม BizDrive ตอบเอง" },
      { title: "Claude AI Online Course", valueAmount: 3900, value: "฿3,900", text: "แถมคอร์สออนไลน์เต็มชุด เรียนต่อหลัง Workshop" },
    ],
    guarantee: {
      title: "รับประกันความพอใจ",
      text: "ถ้าจบวัน ไม่รู้สึกว่าคุ้ม ทักมาภายใน 7 วัน คืนเงินครึ่งหนึ่งโดยไม่ถาม",
    },
    faqs: [
      { q: "Seminar จัดที่ไหน วันไหน?", a: "BizDrive Academy กรุงเทพมหานคร · วันที่จะแจ้งเมื่อยืนยันการจอง · ที่นั่ง 15 ท่าน/รอบ" },
      { q: "ต้องเตรียมอะไรมา?", a: "Notebook + Claude Pro account (เราช่วย setup ในคลาส) + ข้อมูลธุรกิจ + งานจริงที่อยากให้ Claude ช่วยทำ" },
      { q: "ต้องเขียนโค้ดเป็นไหม?", a: "ไม่จำเป็น — Claude Code เขียนให้ · คอร์สสอนทุกคน · ถ้าเขียนโค้ดเป็นจะใช้ได้ลึกกว่า" },
      { q: "เหมาะกับใคร?", a: "เจ้าของธุรกิจ/freelancer/manager/developer ที่อยากใช้ Claude ลึกกว่าผิวๆ" },
      { q: "ราคา ฿9,900 คุ้มยังไง?", a: "ของรวมเกิน ฿18,000 — Workshop + วิดีโอบันทึก + 30-day support + แถม Online · ค่าเดินทาง/อาหารรวม" },
      { q: "ไปกับทีมได้ไหม?", a: "ได้ครับ ทีม 2-3 คนจากบริษัทเดียวกันมีส่วนลด 15% — แจ้งตอนจอง" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ได้ครับ เต็มรูปแบบ — แจ้งข้อมูลบริษัทตอนจอง" },
    ],
    scarcity: "รอบนี้เหลือ 15 ที่นั่ง · ปิดรับสมัครเมื่อเต็ม",
    deadline: {
      rolling: { days: 5 },
      label: "รอบปัจจุบันปิดรับใน",
      expiredLabel: "รอบนี้เต็มแล้ว — แจ้งรอบถัดไป",
    },
    idealFor: {
      title: "Seminar เหมาะกับคุณถ้า…",
      yes: [
        "ใช้ Claude มาบ้างแล้วและอยาก setup จริงจัง",
        "อยาก setup Claude Code + MCP บนเครื่องตัวเองให้ทำงานได้จบในวันเดียว",
        "ต้องการคนช่วย troubleshoot ตรงโต๊ะคุณ ไม่ใช่นั่งงมเอง",
        "พร้อมเดินทางมากรุงเทพฯ ในวันที่กำหนด",
      ],
      no: [
        { text: "อยากเรียนตามจังหวะตัวเอง ไม่อยากเดินทาง", linkTo: "claude-online" },
        { text: "ธุรกิจซับซ้อน ต้องการ workflow เฉพาะตัว 1:1", linkTo: "manus-ai-private" },
      ],
    },
  },

  "one-person-online": {
    slug: "one-person-online",
    name: "One Person Business — Online",
    tagline: "วางระบบธุรกิจคนเดียวให้เหมือนมีทีมใหญ่ ด้วย AI + ระบบที่ scale ได้",
    price: 3900,
    originalPrice: 5900,
    priceLabel: "฿3,900",
    priceNote: "จ่ายครั้งเดียว · เรียนได้ตลอด · อัปเดตเนื้อหาฟรี",
    badge: "เปิด กค",
    accent: "purple",
    cardSub: "เรียน self-paced · เปิดรอบแรก ก.ค. 2026",
    comingSoon: true,
    availableFrom: "กรกฎาคม 2026",
    stripeUrl: null,
    hero: {
      headline: "ทำธุรกิจคนเดียวอย่างเป็นระบบ — ไม่เหนื่อย ไม่ติดที่ตัวเอง สเกลได้",
      sub: "เรียนทุกขั้นตอน: positioning · pricing · sales · ระบบหลังบ้าน · AI workflow · finance · scale plan — สำหรับเจ้าของธุรกิจคนเดียว / freelancer / solopreneur",
      ctaPrimary: "ลงทะเบียนรอรอบแรก",
      ctaSecondary: "ดูเนื้อหาคอร์ส",
    },
    problem: {
      title: "ทำคนเดียวมาสักพัก — เริ่มรู้สึกติดเพดาน ทำงาน 60-80 ชม./สัปดาห์",
      points: [
        "งานเข้าเยอะ แต่ทำคนเดียวไม่ทันแล้ว — เริ่มปฏิเสธลูกค้า",
        "อยากจ้างคน แต่ยังไม่กล้า / ยังไม่มีระบบให้คนตามได้",
        "ทำเองทุกอย่าง — sales, ดูแลลูกค้า, การเงิน, คอนเทนต์ — เลยไม่มีเวลาคิด strategy",
        "รายได้ดี แต่รู้สึกว่าตัวเองคือคอขวด ลาป่วยไม่ได้ ไปเที่ยวไม่ได้",
      ],
    },
    solution: {
      title: "วางระบบ + AI แทนทีม — ทำคนเดียวให้ output เหมือนทีม 5-10 คน",
      body: "ไม่ใช่คอร์สสอนใช้ AI เพียวๆ แต่เป็น blueprint ทั้งระบบของธุรกิจคนเดียวที่ scale ได้ — positioning, pricing, sales pipeline, automation, finance tracking, AI workflow, scale roadmap · ใช้ AI เป็น leverage หลัก (ไม่ใช่จ้างคน)",
    },
    modules: [
      { num: "01", title: "Positioning + Niche", text: "เลือก niche ที่ขายได้ · ตั้งราคาให้คุ้ม · ไม่แข่งราคา", bullets: [
        "Niche selection framework — เลือก market ที่ buy ไม่ shop",
        "Positioning statement ที่ทำให้แพงได้",
        "Pricing psychology สำหรับ solo business",
        "Case study: ธุรกิจคนเดียวรายได้ 7 หลัก/เดือน"
      ] },
      { num: "02", title: "Sales Pipeline สำหรับคนเดียว", text: "ระบบขายที่ไม่ต้อง cold call · ลูกค้ามาเอง", bullets: [
        "Inbound funnel: content → lead → call → close",
        "Lead qualifying framework — กรองลูกค้าก่อนเสียเวลา",
        "AI-powered DM auto-reply (ไม่เสียโอกาส)",
        "Proposal template + closing script"
      ] },
      { num: "03", title: "ระบบหลังบ้าน (Operations)", text: "ลูกค้าเข้า → ส่งมอบ → invoice → follow-up · auto", bullets: [
        "Client intake form + onboarding flow",
        "Project tracking ที่ทำคนเดียวก็ไม่หลุด",
        "Invoice + payment reminder อัตโนมัติ",
        "Document management — ไฟล์อะไรอยู่ไหน หาเจอเร็ว"
      ] },
      { num: "04", title: "AI Workflow ที่แทนพนักงาน", text: "ใช้ AI เป็นทีม — ผู้ช่วย, นักการตลาด, นักออกแบบ", bullets: [
        "Map งานในธุรกิจคุณ → AI ทำได้กี่อย่าง",
        "Content engine — สัปดาห์ละ 1 ชั่วโมง = 1 เดือนของคอนเทนต์",
        "Customer support ที่ AI ช่วยร่าง คุณแค่ approve",
        "Research + analysis ด้วย Claude/Gemini"
      ] },
      { num: "05", title: "Finance + Tracking", text: "รู้ว่าธุรกิจกำไรจริงเท่าไหร่ · เก็บเงินไม่หาย", bullets: [
        "Profit-First framework สำหรับ solo business",
        "Tax planning เบื้องต้น — บุคคล vs นิติบุคคล",
        "Track รายรับ-รายจ่าย ใน Sheets + AI categorize",
        "Cash flow forecast 3-6 เดือน"
      ] },
      { num: "06", title: "Scale Plan — จาก 1 → 5 → 10x", text: "เมื่อพร้อมขยาย ทำยังไงโดยไม่เสียคุณภาพ", bullets: [
        "Productize service — เปลี่ยน custom job เป็น scalable offer",
        "Hire first team member — อะไรควรจ้างคนแรก",
        "Systems → SOPs → Team handoff",
        "Exit strategy — ถ้าวันนึงอยากขาย/ลดบทบาท"
      ] },
    ],
    outcomes: [
      "มี business model + positioning ที่ขายได้ ไม่แข่งราคา",
      "ระบบขาย + ส่งมอบ + ดูแลลูกค้า ที่ทำคนเดียวก็ไม่หลุด",
      "AI workflow ที่ทำงานแทน 3-5 คน — content, support, research, ops",
      "รู้ว่าธุรกิจกำไรจริงเท่าไหร่ · เก็บเงินครบ · วางแผนภาษีเบื้องต้นได้",
      "Roadmap 90 วันสำหรับ scale ถัดไป — ถ้าอยากเติบโต",
    ],
    bonuses: [
      { title: "Solo Business OS Template", valueAmount: 2900, value: "฿2,900", text: "Notion template ครบชุด — pipeline, client, finance, content" },
      { title: "AI Prompt Library 50+ ชุด", valueAmount: 1900, value: "฿1,900", text: "Prompt สำหรับ sales/support/content ที่ใช้จริง" },
      { title: "Community + Office Hour", valueAmount: 2900, value: "฿2,900", text: "เข้ากลุ่ม solopreneur ไทย + office hour สัปดาห์ละครั้ง" },
    ],
    guarantee: {
      title: "รับประกัน 7 วัน คืนเงินเต็มจำนวน",
      text: "ลองเรียน 7 วัน ถ้ารู้สึกว่าไม่ใช่ทางคุณ ทักมา คืนเงินให้เต็มจำนวน ไม่ถาม",
    },
    faqs: [
      { q: "เปิดเรียนเมื่อไหร่?", a: "เปิดรอบแรกกรกฎาคม 2026 · ฝากอีเมลไว้ — เราจะแจ้งทันทีที่เปิดรับสมัคร · ผู้ที่ลงทะเบียนรอจะได้ราคา early-bird" },
      { q: "ต่างจาก Manus AI ยังไง?", a: "Manus AI เน้นใช้ AI tools เป็นหลัก · One Person Business เน้นวางระบบธุรกิจทั้งภาพ (sales, ops, finance, scale) โดยใช้ AI เป็น leverage · เหมาะกับคนที่อยากออกแบบธุรกิจคนเดียวให้ scale ได้" },
      { q: "เหมาะกับใคร?", a: "เจ้าของธุรกิจคนเดียว / freelancer / consultant / solopreneur ที่ทำมา 6 เดือน-3 ปี และเริ่มรู้สึกติดเพดาน · ไม่เหมาะกับมือใหม่ที่ยังไม่ได้เริ่มทำ" },
      { q: "ราคา ฿3,900 คุ้มยังไง?", a: "ของรวมเกิน ฿11,000 — คอร์ส + Notion template + Prompt library + community · เทียบเวลาที่ประหยัด คุ้มภายใน 1-2 สัปดาห์" },
      { q: "ใช้ภาษาไทยตลอดไหม?", a: "ใช่ครับ — ภาษาไทยล้วน · ตัวอย่างจริงจากธุรกิจไทย" },
      { q: "อัปเดตเนื้อหาไหม?", a: "อัปเดตทุก 3-6 เดือน — ตามเทคนิคและเครื่องมือใหม่ที่คุ้มเอาไปใช้" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ออกใบกำกับภาษี/ใบเสร็จเต็มรูปแบบได้ — แจ้งทีมตอนสมัคร" },
    ],
    scarcity: "รอบแรก Early-bird ราคา ฿3,900 · ราคาจะปรับขึ้นหลังเปิดรอบจริง",
    deadline: null,
    idealFor: {
      title: "คลาสนี้เหมาะกับคุณถ้า…",
      yes: [
        "ทำธุรกิจคนเดียว/ฟรีแลนซ์มา 6 เดือน-3 ปี และเริ่มรู้สึกติดเพดาน",
        "อยากใช้ AI วางระบบทั้งภาพ ไม่ใช่แค่ใช้ tool",
        "พร้อมลงทุนในตัวเอง — คิดเชิง business owner ไม่ใช่ freelancer",
        "อยากมีเวลาคิด strategy · ไม่ติดอยู่กับงาน admin",
      ],
      no: [
        { text: "เพิ่งเริ่มต้น ยังไม่มีลูกค้า/ธุรกิจ", linkTo: "manus-ai-online" },
        { text: "อยากเรียนใช้ AI tools เป็นหลัก (ไม่ใช่ business system)", linkTo: "manus-ai-online" },
        { text: "ต้องการ workflow เฉพาะธุรกิจคุณ 1:1", linkTo: "manus-ai-private" },
      ],
    },
  },

  "one-person-seminar": {
    slug: "one-person-seminar",
    name: "One Person Business — Seminar",
    tagline: "Workshop 1 วันเต็ม — วาง business system ครบทั้งภาพในวันเดียว",
    price: 9900,
    originalPrice: 14900,
    priceLabel: "฿9,900",
    priceNote: "ราคาต่อท่าน · รวมอาหารและเอกสาร · ที่นั่งจำกัด 15 คน",
    badge: "เปิด กค",
    accent: "purple",
    cardSub: "1 วันเต็ม · กลุ่มเล็ก · เปิดรอบแรก ก.ค. 2026",
    comingSoon: true,
    availableFrom: "กรกฎาคม 2026",
    stripeUrl: null,
    hero: {
      headline: "1 วันเต็ม — ออกจากห้องไปพร้อม business plan + AI workflow ของคุณเอง",
      sub: "Workshop กลุ่มเล็ก 15 ท่าน · พี่แบงค์ + ทีม BizDrive วนโต๊ะช่วยออกแบบ business system เฉพาะธุรกิจคุณ · ไม่ใช่ฟังบรรยายแล้วกลับบ้าน",
      ctaPrimary: "ลงทะเบียนรอรอบแรก",
      ctaSecondary: "ดูตารางวัน",
    },
    problem: {
      title: "เรียนคอร์สมาเยอะแล้ว แต่ยังไม่ลงมือสักที",
      points: [
        "อ่านหนังสือ business มาสิบเล่ม แต่ก็ไม่ได้เริ่มทำจริง",
        "ทำคนเดียวเลยไม่มีคนช่วยคิด strategy ระดับ business",
        "อยากเจอ solopreneur คนอื่นที่อยู่ในจังหวะคล้าย ๆ กัน",
        "ต้องการ momentum + accountability — ลงมือใน 1 วัน",
      ],
    },
    solution: {
      title: "Workshop 1 วัน — มา 1 ท่าน กลับไปพร้อม business blueprint ของตัวเอง",
      body: "Seminar กลุ่มเล็ก 15 ท่าน · เน้น hands-on ออกแบบ business system ของคุณเองในคลาส · พี่แบงค์ + ทีม BizDrive วนโต๊ะช่วยทุกท่าน · จบวันมี positioning + sales pipeline + AI workflow + scale plan ของตัวเอง พร้อมใช้",
    },
    modules: [
      { num: "09:00", title: "เปิดวัน + Business Audit", text: "audit ธุรกิจปัจจุบัน · ระบุจุดติดเพดาน", bullets: [
        "Welcome + แนะนำตัว 15 ท่าน",
        "Business audit worksheet — กรอกข้อมูลธุรกิจคุณ",
        "Map จุดที่ติดเพดานของแต่ละคน"
      ] },
      { num: "10:30", title: "Positioning + Pricing", text: "เลือก niche + ตั้งราคาใหม่ในคลาส", bullets: [
        "Positioning statement workshop",
        "Pricing audit — ราคาคุณตอนนี้ vs ราคาที่ควรเป็น",
        "Coffee break (15 นาที)"
      ] },
      { num: "12:00", title: "Sales Pipeline Design", text: "ออกแบบ inbound funnel ของคุณเอง", bullets: [
        "Funnel mapping — จาก content → lead → close",
        "Lead qualifying script",
        "Peer review — เพื่อนข้าง ๆ ดู funnel ของคุณ"
      ] },
      { num: "13:00", title: "พักเที่ยง + Networking", text: "อาหารเที่ยงรวม + คุยกับ solopreneur คนอื่น", bullets: [
        "Lunch รวม (รวมในราคา)",
        "Speed networking — เปลี่ยนคู่คุย",
        "พี่แบงค์ตอบคำถาม free flow"
      ] },
      { num: "14:00", title: "AI Workflow Build", text: "เลือก workflow แรก → build ในคลาส", bullets: [
        "Map AI ที่จะแทนงานไหน",
        "Build workflow 1 ตัว live (sales / content / support)",
        "Setup + test กับ data ของคุณ"
      ] },
      { num: "15:30", title: "Finance + Scale Plan", text: "วาง finance system + 90-day plan", bullets: [
        "Profit-First template + Cash flow forecast",
        "90-day action plan ของแต่ละคน",
        "Scale roadmap — เมื่อพร้อมขยาย"
      ] },
      { num: "17:00", title: "Wrap + Commit", text: "Commit กับ buddy + 30 วัน accountability", bullets: [
        "Buddy system — จับคู่ accountability 30 วัน",
        "Group chat invite — start วันถัดไป",
        "Photo + closing"
      ] },
    ],
    outcomes: [
      "Business blueprint ของคุณเอง — positioning + pricing + sales + ops",
      "AI workflow 1 ตัวที่ build เสร็จในคลาส พร้อมใช้",
      "Finance + 90-day plan ที่กรอกข้อมูลธุรกิจคุณแล้ว",
      "เครือข่าย solopreneur ไทย 14 คน",
      "30 วัน group support หลัง seminar + recording + buddy",
    ],
    bonuses: [
      { title: "วิดีโอบันทึก Seminar เต็มวัน", valueAmount: 4900, value: "฿4,900", text: "ทบทวนได้ทุกที่ ทุกเวลา หลังจบ Workshop" },
      { title: "30-Day Group Support", valueAmount: 9900, value: "฿9,900", text: "กลุ่ม support + accountability 30 วัน" },
      { title: "One Person Business Online Course", valueAmount: 3900, value: "฿3,900", text: "แถมคอร์สออนไลน์เต็มชุด เรียนต่อหลัง Workshop" },
    ],
    guarantee: {
      title: "รับประกันความพอใจ",
      text: "ถ้าจบวัน ไม่รู้สึกว่าคุ้ม ทักมาภายใน 7 วัน คืนเงินครึ่งหนึ่งโดยไม่ถาม",
    },
    faqs: [
      { q: "เปิดเรียนเมื่อไหร่?", a: "เปิดรอบแรกกรกฎาคม 2026 · ฝากอีเมลไว้ — เราจะแจ้งวันที่และตารางทันทีที่ยืนยัน" },
      { q: "จัดที่ไหน?", a: "BizDrive Academy กรุงเทพมหานคร · ที่นั่งจำกัด 15 ท่าน/รอบ" },
      { q: "เหมาะกับใคร?", a: "เจ้าของธุรกิจคนเดียว / freelancer / consultant ที่ทำมา 6 เดือน-3 ปี และอยากวาง business system จริงจัง" },
      { q: "ต้องเตรียมอะไรมา?", a: "Notebook + ข้อมูลธุรกิจ (รายได้, ลูกค้า, ราคาปัจจุบัน, pain point) — เราเตรียม template ให้กรอก" },
      { q: "ราคา ฿9,900 คุ้มยังไง?", a: "ของรวมเกิน ฿18,000 — Workshop + วิดีโอบันทึก + 30-day support + แถม Online · ค่าเดินทาง/อาหารรวมแล้ว" },
      { q: "ไปกับทีมได้ไหม?", a: "ได้ครับ ทีม 2-3 คนจากบริษัทเดียวกันมีส่วนลด 15% — แจ้งตอนจอง" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ได้ครับ เต็มรูปแบบ — แจ้งข้อมูลบริษัทตอนจอง" },
    ],
    scarcity: "รอบแรก Early-bird ที่นั่งจำกัด 15 ท่าน · ลงทะเบียนรอเพื่อรับสิทธิ์จองก่อน",
    deadline: null,
    idealFor: {
      title: "Seminar เหมาะกับคุณถ้า…",
      yes: [
        "ทำธุรกิจคนเดียว/freelancer มาแล้วและอยากวางระบบจริงจัง",
        "อยากเจอและคุยกับ solopreneur คนอื่นในจังหวะคล้ายกัน",
        "ต้องการ momentum + คนชี้แนะตรงโต๊ะคุณ ไม่ใช่เรียนคนเดียว",
        "พร้อมเดินทางมากรุงเทพฯ ในวันที่กำหนด",
      ],
      no: [
        { text: "อยากเรียนตามจังหวะตัวเอง ไม่อยากเดินทาง", linkTo: "one-person-online" },
        { text: "ธุรกิจซับซ้อน ต้องการ workflow เฉพาะตัว 1:1", linkTo: "manus-ai-private" },
      ],
    },
  },
};

export const MANUS_PLAN_ORDER = ["manus-ai-online", "manus-ai-seminar"];
export const CLAUDE_PLAN_ORDER = ["claude-online", "claude-seminar"];
export const AI_EDITOR_PLAN_ORDER = ["ai-editor-online", "ai-editor-seminar"];
export const ONE_PERSON_PLAN_ORDER = ["one-person-online", "one-person-seminar"];
export const PRIVATE_SLUG = "manus-ai-private";
// PLAN_ORDER kept for backward compat (3 manus slugs incl. private) — new code should use MANUS_PLAN_ORDER + PRIVATE_SLUG
export const PLAN_ORDER = [...MANUS_PLAN_ORDER, PRIVATE_SLUG];
export const ALL_PLAN_SLUGS = [...MANUS_PLAN_ORDER, ...CLAUDE_PLAN_ORDER, ...AI_EDITOR_PLAN_ORDER, ...ONE_PERSON_PLAN_ORDER, PRIVATE_SLUG];

export const ACADEMY = {
  name: "BizDrive Academy",
  city: "กรุงเทพมหานคร",
  mapsUrl: "https://maps.app.goo.gl/bXQv1qzn1BB6suLC9",
  embedUrl: "https://maps.google.com/maps?q=13.8955122%2C100.6589236&z=16&output=embed",
};

export const CONTACT = {
  email: "hello@bizdrive.co",
  phone: "095-334-0643",
  phoneTel: "+66953340643",
  line: "@bizdrive",
  lineUrl: "https://lin.ee/tLEXtzuJ",
  facebookUrl: "https://www.facebook.com/bizdrive168",
  tiktokUrl: "https://www.tiktok.com/@bizdrive168",
  youtubeUrl: "https://www.youtube.com/@BizDrive168",
  acceptedPayments: "ยินดีรับบัตรเครดิตทุกประเภท",
  taxInvoice: "ออกใบกำกับภาษี / ใบเสร็จเต็มรูปแบบได้ — แจ้งทีมตอนสมัคร",
};

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com/bizdrive168", handle: "bizdrive168" },
  { name: "TikTok", url: "https://www.tiktok.com/@bizdrive168", handle: "@bizdrive168" },
  { name: "YouTube", url: "https://www.youtube.com/@BizDrive168", handle: "@BizDrive168" },
  { name: "LINE", url: "https://lin.ee/tLEXtzuJ", handle: "@bizdrive" },
];
