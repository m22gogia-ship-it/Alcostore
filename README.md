# alcostore v1.7 — catalog filtering demo

Upload all root files to the existing GitHub repository, replacing previous files. Vercel will rebuild from GitHub if integration is active.

## Added
- Left sidebar with brands and automatic product counts, brand-only view.
- Product variant facet based on **explicit metadata/name** (age in years, flavor, otherwise Standard), without fabricating variations.
- Minimum/maximum price inputs and sliders.
- Sort ascending/descending by **alcostore display price** (including current browser admin override).
- Filters work together with categories, discount-only and search; 7-language labels.
- Responsive sidebar: above catalog on narrow phones.

## Limitations
- Counts reflect only products presently loaded in the app (13 demo and 27 observed source-price items), not full catalogs on either external store.
- Prices and admin edits are browser-local only. No shared backend, import automation, or reliable up-to-date supplier-price sync.
- Delivery is demo-only. Photos must be verified product by product before production.
