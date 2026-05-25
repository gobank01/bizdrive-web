import { PLANS } from "../../class/_data";
import { renderSalepageOg, SALEPAGE_OG_SIZE } from "@/lib/og";

export const size = SALEPAGE_OG_SIZE;
export const contentType = "image/png";
export const alt = "BizDrive";

const ALLOWED_TYPES = ["online", "seminar"];

export async function generateStaticParams() {
  return ALLOWED_TYPES.map((type) => ({ type }));
}

export default async function og({ params }) {
  const { type } = await params;
  const plan = PLANS[`manus-ai-${type}`];
  return renderSalepageOg(plan, `/manus/${type}`);
}
