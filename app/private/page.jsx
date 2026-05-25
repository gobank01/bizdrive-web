import { PLANS } from "../class/_data";
import SalePage from "../components/SalePage";

const PLAN = PLANS["manus-ai-private"];

export const metadata = {
  title: `${PLAN.name} — BizDrive`,
  description: PLAN.tagline,
  openGraph: { title: `${PLAN.name} — BizDrive`, description: PLAN.tagline, type: "website" },
};

export default function PrivateClassPage() {
  return <SalePage plan={PLAN} />;
}
