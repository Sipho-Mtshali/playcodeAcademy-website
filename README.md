# PlayCode Academy Website

Modern marketing site for PlayCode Academy built with Vite + React, Tailwind CSS v4, and React Router. Includes responsive navigation (auto-closing mobile menu), content pages, enrollment flows, and optional payments integration.

## Tech Stack

- React 18 (Vite)
- Tailwind CSS v4 (utility-first styling)
- React Router (file-based routes defined in code)
- React Toastify (notifications)
- Lucide Icons (SVG icons)

## Project Structure

```
.
├── public/
│   └── images/
│       ├── PCALogo.png
│       ├── studentOnBoard.png
│       ├── studentPlay.png
│       └── studentPlaying.png
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Mobile menu auto-closes on link tap and route change
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx        # Hero, highlights, calls-to-action
│   │   ├── About.jsx       # White hero background for better contrast with header
│   │   ├── Programs.jsx
│   │   ├── Parents.jsx
│   │   ├── Blog.jsx
│   │   ├── Enroll.jsx
│   │   ├── Contact.jsx
│   │   └── Payment.jsx
│   ├── content/
│   │   └── content.js      # Optional centralized copy/config
│   ├── App.jsx             # Layout with Header/Footer and <Outlet />
│   ├── index.css           # Tailwind entry
│   └── main.jsx            # Router setup
└── README.md
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Routing

Routes are declared in `src/main.jsx` via React Router’s `createBrowserRouter`:

- `/` → `Home`
- `/about` → `About`
- `/programs` → `Programs`
- `/parents` → `Parents`
- `/blog` → `Blog`
- `/enroll` → `Enroll`
- `/contact` → `Contact`

## Navigation and Responsiveness

- The header (`src/components/Header.jsx`) provides desktop links and a mobile menu.
- On mobile, tapping any menu item closes the menu automatically.
- The menu also closes on any route change (back/forward), preventing content from being obscured.

## Styling

- Tailwind CSS utilities are used across pages.
- The About page hero uses a white background for clearer contrast with the dark header.

## Content and Assets

- Update copy directly in files under `src/pages/` or centralize text in `src/content/content.js`.
- Place images in `public/images/`. Current assets:
  - `PCALogo.png`
  - `studentOnBoard.png`
  - `studentPlay.png`
  - `studentPlaying.png`

## Payments

The `Payment.jsx` page supports linking out to payment providers. If you want embedded PayPal buttons:

1. Create a `.env` file in the project root with:

```
VITE_PAYPAL_CLIENT_ID=YOUR_SANDBOX_OR_LIVE_CLIENT_ID
```

2. Restart the dev server. When set, PayPal Smart Buttons will render on the Payment page (if enabled in the page code).

For direct links (no buttons), update `Enroll.jsx` or `Payment.jsx` with your real URLs (PayPal/PayFast/EFT) and ensure relevant logos exist in `public/images/` if referenced.

## Build and Deploy

Build locally:

```bash
npm run build
```

The production output is generated in `dist/`.

Deploy options:

- Vercel: Import the repo → framework: Vite → build command `npm run build` → output `dist`
- Netlify: New site from Git → build command `npm run build` → publish directory `dist`

## Accessibility and SEO

- Basic meta tags live in `index.html`. Add page-specific meta as needed.
- Images include `alt` attributes; keep them descriptive for accessibility.
- Ensure link text is meaningful and color contrast remains readable (especially on white sections).

## Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build locally

## Troubleshooting

- If styles don’t load, ensure Tailwind is properly configured in `index.css` and that dependencies are installed.
- If the mobile menu doesn’t close, confirm you’re navigating via `<Link>` elements and that `Header.jsx` includes the `useLocation` effect to close on route changes.

## License

Proprietary — PlayCode Academy. All rights reserved.
