import { notFound } from "next/navigation";
import { PLANS } from "../../class/_data";
import SalePage from "../../components/SalePage";

const ALLOWED_TYPES = ["online", "seminar"];

export function generateStaticParams() {
  return ALLOWED_TYPES.map((type) => ({ type }));
}

export async function generateMetadata({ params }) {
  const { type } = await params;
  if (!ALLOWED_TYPES.includes(type)) return {};
  const plan = PLANS[`claude-${type}`];
  if (!plan) return {};
  return {
    title: `${plan.name} — BizDrive`,
    description: plan.tagline,
    openGraph: { title: `${plan.name} — BizDrive`, description: plan.tagline, type: "website" },
  };
}

export default async function ClaudeClassPage({ params }) {
  const { type } = await params;
  if (!ALLOWED_TYPES.includes(type)) notFound();
  const plan = PLANS[`claude-${type}`];
  if (!plan) notFound();
  return <SalePage plan={plan} />;
}
