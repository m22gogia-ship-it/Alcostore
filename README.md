# alcostore v1.6 – price sources and discounts

Deploy five root files plus `source-prices.json` to the existing GitHub repo; Vercel deploys static files.

## Added
- 27 verifiable product-price observations (21 Alcoshop, 6 Alcorium), collected 2026-11-06; exact names and volumes preserved. Not the merchants’ full catalogs.
- Sources and observation date in `source-prices.json`. Source products added to demo catalog without assuming inventory/permission to resell.
- Discount filter available on all categories, notably beer and wine.
- Admin demo `?admin-demo=1`: choose supplier-price record/manual price, edit published demo price per city, edit discount reference price. Changes are only localStorage on the same browser.
- 24/7 delivery marketing text explicitly marked as a *planned demo* until operations are staffed and confirmed.

## Limitations
- No automatic price synchronization; no bulk full-catalog extraction or image rights verified.
- No real secure admin, backend database, checkout or SMS service. Public availability on Vercel does not make this production ready.
- The display price is not changed for every visitor by the local demo admin. Server-based database and auth are required.
- Prices from external sites are comparison observations, not actual alcostore inventory or sales offers.
