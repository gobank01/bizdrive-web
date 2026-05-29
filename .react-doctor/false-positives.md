# React Doctor — known false positives

Patterns the scanner flags but are intentional in this repo. Each entry: rule, where, why.

## react-doctor/control-has-associated-label

**Where:** Any `<input>`, `<select>`, `<textarea>` wrapped inside the `Field` component (see `app/components/ContactForm.jsx:190`).
**Why:** `Field` renders a `<label>` element wrapping its children, which already provides the accessible name via implicit label association. No `aria-label` needed.
**Skip after verifying:** the input is rendered inside `<Field>…</Field>` (or another component whose root element is `<label>`).

## react-doctor/no-danger

**Where:** Any `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />` — used in:
- `app/page.jsx` (FAQPage schema)
- `app/components/CourseSchema.jsx` (Course schema)
- `app/components/OrganizationSchema.jsx` (Organization schema)

**Why:** JSON-LD schema markup is the standard way to inject structured data for Google. The content is generated from a server-side JS object, not user input — no XSS surface.
**Skip after verifying:** the `dangerouslySetInnerHTML` value is `JSON.stringify(...)` on a `<script type="application/ld+json">` element.

## react-doctor/nextjs-no-img-element

**Where:** `app/opengraph-image.jsx` (Next.js `next/og` `ImageResponse` route).
**Why:** `next/og` `ImageResponse` does NOT support `next/image` — only plain `<img>` with a data URI or fully-qualified URL works inside the OG image generator. This is a framework constraint.
**Skip after verifying:** the file exports a `default` function returning `new ImageResponse(...)` from `next/og`.

## react-doctor/no-inline-exhaustive-style

**Where:** `app/opengraph-image.jsx` root style object (and any `lib/og.jsx`-style helper rendered through `ImageResponse`).
**Why:** Same as above — `next/og` does not support CSS classes or CSS modules; only inline `style={...}` objects render.
**Skip after verifying:** the styled element is inside an `ImageResponse` JSX tree.

## react-doctor/nextjs-no-a-element

**Where:** Any `<a target="_blank" ...>` opening an internal page (e.g. `/privacy`) in a new tab — see `app/components/LeadForm.jsx:124`.
**Why:** `next/link` always navigates client-side in the same tab; we deliberately open the privacy policy in a new tab so the lead form isn't lost. Same logic applies to any `target="_blank"` link, even to an internal `href`.
**Skip after verifying:** the `<a>` has `target="_blank"`.

## react-doctor/nextjs-no-img-element (external thumbnails)

**Where:** YouTube thumbnail images served from `i.ytimg.com` (e.g. `app/components/Reviews.jsx:78`).
**Why:** Using `next/image` for external hosts requires adding to `next.config.mjs#images.remotePatterns`. Until that's set up, plain `<img>` is the right call.
**Skip after verifying:** the `src` starts with `https://i.ytimg.com/` (or another remote host not configured in `next.config.mjs`).
