# PlayCode Academy Website

Tech stack: Vite + React, Tailwind CSS v4, React Router, Framer Motion, React Hook Form, React Toastify.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Content updates

- Add all images to `public/images/`:
  - `logo.png` (your provided logo/picture)
  - `hero-illustration.png` (home page hero image)
  - `about-illustration.png` (about page image)
  - `social-preview.png` (for social media link previews)
  - `Level0-Starter-Kit.pdf` (curriculum PDF)

Edit copy directly in page files under `src/pages/` or update `src/content/content.js`.

## Deploy

- Vercel: Import the repo → framework: Vite → build: `npm run build` → output: `dist`
- Netlify: New site from Git → build: `npm run build` → publish directory: `dist`

## SEO

Basic meta tags are in `index.html`. For advanced per-page SEO, add an SEO library once React 19 compatible versions are available.
"# playcodeAcademy-website" 
