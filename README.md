# alcostore v1.3 — Vercel static demo

Upload all five files to the ROOT of the GitHub repository `Alcostore`. Commit to `main`; Vercel will redeploy. Framework: Other; build command disabled; root `./`.

## Features
- Correct branding: **alcostore**
- 7 languages: Georgian, Russian, English, Turkish, Arabic, Chinese (Simplified), Persian (Farsi). Arabic/Persian RTL.
- 6 delivery cities: Tbilisi, Rustavi, Batumi, Zugdidi, Kutaisi, Telavi.
- Register/login **DEMO ONLY** using email and display name stored in browser localStorage; **no password entered, no authentication / verification**. Never rely on this for actual account access.
- Loyalty points: **10 GEL of product subtotal = 1 point**, hence **100 GEL = 10 points**. **10 points = 1 GEL**. Points are simulated in browser on DEMO checkout; no financial liability, transaction validation, or persistence on server.
- Product photographs are requested from Wikimedia Commons via Special:FilePath URL. Internet required for photos. The sample prices and product presentation are NOT live inventory or official product advertisements.
- No real orders/payments, delivery, backend, IDs, or personal data processing. Do NOT publish as live commerce without a secured backend, verified payment flows, privacy policy, adult age verification on handoff, stock accounting, and applicable Georgian law compliance. Cigarettes are deliberately excluded.

## Photo sources/credits
Photos are remote and hosted by Wikimedia Commons, not copied into this ZIP. Product images are illustrative and labels/packaging may vary by region; verify your own SKU photographs and permissions before commercial release.

- Coca-Cola: https://commons.wikimedia.org/wiki/File:Coca-Cola_Bottle.jpeg — Nicereddy, CC0.
- Fanta: https://commons.wikimedia.org/wiki/File:Fanta_Orange_Bottle.jpg — Ayakln, CC BY-SA 4.0.
- Heineken: https://commons.wikimedia.org/wiki/File:Heineken_Bottle.jpg — Uttamstef12 (verify precise license on source page).
- Red Bull: https://commons.wikimedia.org/wiki/File:Red_Bull.jpg — Mathious Ier, CC0.
- Orange juice: https://commons.wikimedia.org/wiki/File:Glass_of_orange_juice.jpeg — Grandmaster Huon, CC0.

Third-party trademarks and brand names belong to their owners; this demo is not endorsed by them.

## Test
Open index.html locally or deploy on Vercel. Test city dropdown, all 7 languages, registration/login (demo), adding 100 GEL of products, simulated checkout, points balance, and redemption. Clearing local browser data removes demo accounts and points.
