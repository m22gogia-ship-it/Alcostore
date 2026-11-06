# alcostore v1.5 — public demo

## Changes
- Removed public brand-name grid; cleaner hero illustration.
- Typography reduced by approximately 15%.
- Removed administrator entry from main page. For **local testing only**, append `?admin-demo=1` to open an **unprotected** browser-only editor; this is not a production admin account.
- Registration UI: first name, last name, Georgian mobile number, six-digit demo verification code `123456`. **No SMS is sent; no genuine authentication takes place.** This must be replaced with server-based OTP backed by an SMS provider, rate limiting and abuse control before production use. Demo registration is held in page memory only, not permanently saved.
- Public rewards banner advertises bonus program, gifts and prizes, without showing the numerical conversion. Once a demo user has completed the mock-code step, its reward balance and terms become visible.
- City selector covers 54 cities in Georgia's government-administered areas (city list derived from public statistical city list); translations for newer city names fall back to Latin transliteration outside Georgian. Selecting a city does NOT confirm delivery availability.
- Demo shopping and prices only. No real orders, payments or SMS. Tobacco online sales excluded.

## Upload
Unzip and upload `index.html`, `style.css`, `app.js`, `vercel.json`, and `README.md` to the repository root, replacing previous versions. Vercel will redeploy after commit if configured.

## Production prerequisites
Secure backend (Neon/PostgreSQL), real SMS provider, OTP time limits, attempts/abuse restrictions, data protection policies, protected administrator authorization, consistent stock/price/order state.
