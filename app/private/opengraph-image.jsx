import { PLANS } from "../class/_data";
import { renderSalepageOg, SALEPAGE_OG_SIZE } from "@/lib/og";

export const size = SALEPAGE_OG_SIZE;
export const contentType = "image/png";
export const alt = "BizDrive Private";

export default async function og() {
  return renderSalepageOg(PLANS["manus-ai-private"], "/private");
}
