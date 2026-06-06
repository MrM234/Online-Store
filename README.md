# TechStore

**The project does not have realization of all pages.**

This workspace contains a small electronics online store demo.

Structure
- `db.json` — mock REST API data (products, categories, orders) used with `json-server`.
- `shop/` — Vite + React front-end showing products and a simple cart.
- root `index.html` — legacy demo (not used by the React app).

Quick start
1. Install dependencies for root and shop:

```powershell
npm run install-all
```

2. Run json-server (API):

```powershell
npm run json-server
```

API will be available at `http://localhost:3000` (endpoints: `/products`, `/orders`, `/categories`).

3. Run React app (in separate shell):

```powershell
cd shop
npm run dev
```

- Products are stored in `db.json`.
- Cart persists in `localStorage` and `Checkout` posts an order to `/orders`.

Design reference
- Design preview: https://www.figma.com/design/eLhCSHbtLhOciXjZF2adBL/Web-Store?node-id=40-1498&t=5iZeGz9vkfENsiym-1
