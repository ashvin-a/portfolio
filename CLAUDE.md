# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at localhost:3000
npm run build      # Production build → /build
npm test           # Run tests (interactive watch mode)
npm test -- --watchAll=false  # Run tests once (CI mode)
npm run deploy     # Build + push to gh-pages branch
```

No linter script is configured; ESLint runs automatically through `react-scripts` (config in `package.json` under `"eslintConfig"`).

## Architecture

This is a **Create React App** single-page portfolio, deployed to Vercel at `https://ashvin-portfolio.vercel.app`.

### Routing

`src/App.js` is the root. It manages the 1.2 s preloader state and owns all `<Route>` declarations. To add a new page: (1) create a component under `src/components/`, (2) add a `<Route>` in `App.js`, (3) add a `<Nav.Link>` in `src/components/Navbar.js`.

Current routes: `/` → Home, `/about` → About, `/project` → Projects, `/contribution` → Contributions, `/resume` → Resume. Unknown paths redirect to `/`.

**Planned routes (researcher revamp):** `/` → Home, `/about` → About, `/research` → Research Projects, `/publications` → Publications, `/teaching` → Teaching, `/resume` → Resume.

### Particle Background

`src/components/Particle.js` renders the starry background using `react-tsparticles`. It is `position: fixed` and covers the full viewport via `#tsparticles` in `style.css`. **Every page component renders `<Particle />` as its first child** inside the section container — this is the established pattern.

### Styling

All section-level CSS lives in one file: `src/style.css`. `src/index.css` only sets the body font and background. There is no CSS Modules or styled-components — styles are applied via `className`.

**Color palette** (defined as CSS variables on `html` in `style.css`):
- Accent/highlight: `--imp-text-color: #FF6500` (orange) — also used directly as `#FF6500` throughout
- Dark navy: `#0B192C`
- Background: pure black `#000000`

The `.purple` utility class applies `var(--imp-text-color)` (despite the name, it renders orange).

**Fonts**: Raleway (body, loaded via Google Fonts in `index.css`), Gilda Display (`.heading-name` in the hero).

### Assets

Static assets (images, SVGs, GIFs, PDFs) live in `src/Assets/` and are imported directly into components. The resume PDF (`src/Assets/Resume.pdf`) is rendered in-browser via `react-pdf` with `pdfjs-dist` worker loaded from unpkg CDN.

### Key Dependencies

- `react-tsparticles` — starry particle background
- `react-pdf` + `@react-pdf/renderer` — in-browser PDF viewer and download for resume
- `react-bootstrap` + `bootstrap` — layout (Container/Row/Col) and Navbar
- `react-router-dom` v6 — client-side routing
- `typewriter-effect` — animated role titles on the Home page
- `@vercel/analytics` — injected once in `src/index.js`
- `react-icons` — all icons (AiOutline*, Cg*, etc.)

### Dependency Overrides

`package.json` has an extensive `"overrides"` block patching transitive vulnerabilities (node-forge, qs, serialize-javascript, nth-check, svgo, etc.). Do not remove these without checking `npm audit`.
