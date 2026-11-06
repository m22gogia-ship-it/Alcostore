# alcostore v1.4 — ბრენდები, კატალოგი, ფასები

Static Vercel demo. index.html, app.js, style.css and vercel.json in repository root.

## Changes
- 13 brands on the hero; 13 matching products in the catalog.
- Product cards show brand-accurate Wikimedia Commons photos where a specific file was verified; otherwise a clean brand placeholder, not a random/misleading picture.
- Admin demo editor (⚙ Admin) allows per-city price changes and exact product image URL override.
- Browser localStorage only: changes are **not shared with customers**, nor protected by admin authentication. Production requires backend roles and a centralized product database.
- Example prices are illustrative and NOT current market prices.
- Existing 7 languages, 6 cities, local demo account and points calculation retained.

## Photograph attribution / sources
Verified Commons files for Sprite Glass Bottle.jpg, Jameson Irish Whiskey.JPG (Datenralfi, CC BY-SA 3.0 DE), Cognac Hennessy Very Special.jpg, Absolut vodka bottle.png (Justus Blümer, CC BY 3.0), Martini Bianco.JPG (ChickenFalls, CC BY-SA 3.0), Chivas regal 12yo.jpg. For Coca-Cola use Coca-cola 50cl white-bg.jpg (Christian Gidlöf, CC BY 2.5), for Fanta use Fanta Orange.jpg (El Gran Dee, CC BY 2.0). Red Bull and XL currently show a clean placeholder pending a verified studio product image. Photo license must be checked individually before real commercial launch, and proper attribution displayed where required. Commons: https://commons.wikimedia.org/

If any remote photo fails, brand placeholder is shown automatically; administrator can add exact approved HTTPS product image URLs from the editor.

The admin editor is deliberately marked DEMO. Orders, payments and online tobacco sales remain disabled. Age verification at fulfillment is required for alcohol.
