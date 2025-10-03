# Mirai Consultant

Vite + React + TypeScript site for Mirai Consultant.

## Development

- Start dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Deployment

### Netlify (recommended)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: `_redirects` file is included (`/*  /index.html  200`)

### GitHub Pages (optional)

If you want to deploy to GitHub Pages under a subpath, set `base` in `vite.config.ts` and add a Pages workflow.
# Mirai Consultant – React + Vite + Tailwind

Ultra-premium dark theme single-page application with animated neon accents, particles background, and a striking hero. Built with React + TypeScript, Vite, Tailwind CSS v4, Framer Motion, tsParticles, and React Router.

## Quick Start

Prerequisites:
- Node.js 18+ and npm

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Type-check and create a production build
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- Framer Motion for subtle entrance animations
- tsParticles for neon particle background
- React Router for client-side routing

## Project Structure

- `src/components/`
  - `Navbar.tsx` – Sleek, responsive navigation with Core Services dropdown
  - `Hero.tsx` – Split hero with animated headline, CTAs, and Lottie embed on the right
  - `About.tsx` – Premium About section with capability cards
  - `ParticlesBackground.tsx` – Neon particles backdrop
  - `Footer.tsx` – Professional footer
- `src/pages/`
  - `Layout.tsx` – Persistent layout (Navbar + Particles + Footer)
  - `Home.tsx` – Home composition (Hero + About)
  - `SimplePage.tsx` – Reusable page shell for Gallery, Projects, Contact, Services
- `src/App.tsx` – Routes configuration
- `src/index.css` – Tailwind import, theme variables, and keyframes

## Routes

- `/` – Home (Hero + About)
- `/about` – Rich About section
- `/gallery` – Gallery page (stub)
- `/projects` – Projects page (stub)
- `/contact` – Contact page (stub)
- `/services/*` – Service detail pages (Railways, Bridges, Buildings, Survey, Highway)

## Tailwind v4 Notes

Tailwind v4 uses a different PostCSS setup. This project is already configured with `@tailwindcss/postcss` in `postcss.config.js`. Avoid using the old `tailwindcss` PostCSS plugin directly.

## Customization

- Colors & glow: Adjust CSS variables and utility classes in `src/index.css`
- Particles: Tweak density, colors, and motion in `src/components/ParticlesBackground.tsx`
- Lottie: Update the iframe in `src/components/Hero.tsx` to change the right-side visual
- Fonts: Edit `index.html` to change Google Fonts

## Build

Create a production build and preview it locally:

```powershell
npm run build
npm run preview
```

## License

Proprietary – for Mirai Consultant.
