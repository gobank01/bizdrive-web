const PLAN_TO_URL = {
  "manus-ai-online": "/manus/online",
  "manus-ai-seminar": "/manus/seminar",
  "manus-ai-private": "/private",
  "claude-online": "/claude/online",
  "claude-seminar": "/claude/seminar",
  "ai-editor-online": "/ai-editor/online",
  "ai-editor-seminar": "/ai-editor/seminar",
  "one-person-online": "/one-person/online",
  "one-person-seminar": "/one-person/seminar",
};

export function urlForPlan(slug) {
  return PLAN_TO_URL[slug] || `/class/${slug}`;
}

