# OpenRouter Image Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 20-image AI generation gallery to the BizDrive landing page using OpenRouter without exposing the API key in browser code.

**Architecture:** A Vercel serverless endpoint creates one image per request with OpenRouter. The browser queues 20 image requests with limited concurrency and renders successes/failures into a responsive gallery.

**Tech Stack:** Static HTML/CSS/JavaScript, Vercel Node.js Functions, OpenRouter Chat Completions image generation.

---

### Task 1: API Helper Tests

**Files:**
- Create: `test/openrouter-images.test.js`
- Create: `api/openrouter-images.js`

- [ ] Write node:test coverage for request parsing, prompt building, and response image extraction.
- [ ] Run `node --test test/openrouter-images.test.js` and verify it fails before helper implementation exists.
- [ ] Implement helper functions in `api/openrouter-images.js`.
- [ ] Re-run `node --test test/openrouter-images.test.js`.

### Task 2: Vercel Image Endpoint

**Files:**
- Create: `api/generate-image.js`

- [ ] Implement a POST-only Vercel function.
- [ ] Read `OPENROUTER_API_KEY` from environment variables.
- [ ] Call `https://openrouter.ai/api/v1/chat/completions` with model `x-ai/grok-imagine-image-quality`, `modalities: ["image"]`, and a BizDrive prompt.
- [ ] Return `{ imageUrl, prompt, index }` on success and JSON errors on failure.

### Task 3: Frontend Gallery

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `script.js`

- [ ] Add an AI gallery section with a prompt input, generate button, progress text, and 20 gallery slots.
- [ ] Add responsive styles that also fix the existing mobile horizontal overflow.
- [ ] Add client-side queue logic that requests 20 images with limited concurrency and renders each card as it completes.

### Task 4: Verification And Deploy

**Files:**
- Modify remote Vercel environment variable: `OPENROUTER_API_KEY`

- [ ] Run `node --test test/openrouter-images.test.js`.
- [ ] Run `node --check script.js`.
- [ ] Run `npx vercel env add OPENROUTER_API_KEY production` if the variable is missing.
- [ ] Deploy with `npx vercel --prod`.
