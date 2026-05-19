<!-- AGENTS.md - Barrierefrei Badberatung -->
# Barrierefrei Badberatung - Agent Guide

## Project Overview

**Barrierefrei Badberatung** is a static, accessibility-focused landing page website for Alex Reimer, offering professional consulting for barrier-free bathroom renovation in Osnabrück, Germany. The target audience is seniors and people with mobility challenges. A key marketing message is the accessibility grant of up to €4,180 from the Pflegekasse (German long-term care insurance).

- **Website**: https://barrierefrei-badberatung.de
- **Author**: Alex Reimer
- **Contact**: Info@barrierefrei-badberatung.de
- **Phone**: 0541 80067046
- **Address**: In der Dodesheide 2, 49088 Osnabrück, Germany
- **Language**: German (de_DE)

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Astro | ^4.0.0 |
| Styling | Tailwind CSS | ^3.3.0 |
| Integration | @astrojs/tailwind | ^5.0.0 |
| Typography Plugin | @tailwindcss/typography | ^0.5.10 (devDependency) |
| Forms | Web3Forms | External API |
| Hosting | Netlify | Static |
| Node.js | - | 20 (specified in netlify.toml) |

The site is a purely static build (`output: 'static'`) with no server-side rendering, no client-side framework (React, Vue, etc.), and no JavaScript bundler beyond what Astro/Vite provide.

---

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.astro     # Sticky header with logo and phone CTA
│   │   └── Footer.astro     # Site footer with contact info and legal links
│   ├── layouts/
│   │   └── Layout.astro     # Base layout: SEO meta, Open Graph, cookie banner, schema.org JSON-LD
│   ├── pages/
│   │   ├── index.astro      # Landing page (all content inline, ~850 lines)
│   │   ├── impressum.astro  # Legal imprint (§ 5 TMG)
│   │   ├── datenschutz.astro # Privacy policy (DSGVO-compliant)
│   │   ├── danke.astro      # Thank-you page after form submission
│   │   └── 404.astro        # Custom 404 error page
│   ├── styles/
│   │   └── fonts.css        # Placeholder for local @font-face rules (currently commented out)
│   └── env.d.ts             # Astro TypeScript declarations
├── public/                  # Static assets (copied as-is to dist/)
│   ├── images/
│   │   ├── Bodengleich.jpg  # Walk-in shower section image
│   │   ├── Haltegriffe.jpg  # Grab bars section image
│   │   ├── beratung.png     # Consulting section image
│   │   ├── hero.png         # Hero section image (also used for OG/Twitter cards)
│   │   ├── logo.png         # Company logo
│   │   ├── rutschfest.jpg   # Anti-slip section image
│   │   └── uberuns.jpg      # About us portrait
│   ├── robots.txt           # SEO robots configuration
│   ├── sitemap.xml          # SEO sitemap (static, manually maintained)
│   └── site.webmanifest     # PWA manifest
├── astro.config.mjs         # Astro configuration
├── tailwind.config.cjs      # Tailwind customization (colors, spacing, touch targets)
├── netlify.toml             # Netlify deployment, headers, redirects
├── package.json             # Dependencies & scripts
└── package-lock.json
```

### Key Configuration Files

**`astro.config.mjs`**
- Integrations: `tailwind()`
- `site`: `https://barrierefrei-badberatung.de`
- `output`: `'static'`
- `compressHTML`: `true`
- `build.format`: `'file'`
- `build.assets`: `'_assets'`
- Vite build minification enabled for both JS and CSS

**`tailwind.config.cjs`**
- Custom colors: `primary` (#1c3867 family), `secondary` (#449c9d family)
- Custom font sizes with tight line-heights for headings
- Custom spacing: `18` (4.5rem), `22` (5.5rem)
- Touch-target utilities: `min-h-touch` (48px), `min-w-touch` (48px)
- Font family: Inter with system fallbacks
- Content glob: `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`

**`netlify.toml`**
- Build command: `npm run build`
- Publish directory: `dist`
- Security headers: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, HSTS, CSP, Permissions-Policy
- Cache headers for `/_assets/*` (1 year), `/fonts/*` (1 year), `/images/*` (30 days)
- Redirects: `/impressum.html` → `/impressum`, `/datenschutz.html` → `/datenschutz` (301)

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Create production build
npm run build

# Preview production build locally
npm run preview

# Astro CLI access
npm run astro
```

### Build Output
- **Output Directory**: `dist/`
- **Output Mode**: Static (`output: 'static'`)
- **Asset Prefix**: `/_assets/`
- **HTML Format**: File-based (`build.format: 'file'`)

---

## Code Organization & Conventions

### Language
- All user-facing content is in **German**
- Code comments are in **German**
- Variable names and file names use English following JavaScript conventions

### File Organization
- **Pages**: All pages in `src/pages/` use `.astro` extension
- **Components**: All components in `src/components/` use `.astro` extension
- **Layouts**: Single base layout in `src/layouts/`
- **Styles**: Global styles in `src/styles/` (fonts.css placeholder), component-level styles use `<style>` tags or Tailwind

### Astro Component Pattern
```astro
---
// Frontmatter: TypeScript imports and logic
import Layout from '../layouts/Layout.astro';

export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!-- Template: HTML with JSX-like syntax -->
<div class="example">{title}</div>
```

### Naming Conventions
- Components: PascalCase (e.g., `Header.astro`, `Footer.astro`)
- Pages: lowercase (e.g., `index.astro`, `impressum.astro`)
- CSS Classes: Tailwind utility classes preferred; custom classes in lowercase with hyphens

### Comments in Code
The project uses German HTML comments to mark major sections:
```astro
<!-- ==========================================
     SECTION NAME
     ========================================== -->
```

### Page Structure Pattern
Every page follows this exact structure:
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const pageTitle = "Page Title | Barrierefrei Badberatung Osnabrück";
const pageDescription = "SEO description for the page";
---

<Layout title={pageTitle} description={pageDescription}>
  <Header />
  <main id="main-content">
    <!-- Page sections -->
  </main>
  <Footer />
</Layout>
```

---

## Design System

### Color Palette (Tailwind Config)

| Name | Tailwind Class | Hex | Usage |
|------|----------------|-----|-------|
| Primary | `text-primary` / `bg-primary` | `#1c3867` | Headers, primary brand color |
| Primary Dark | `text-primary-dark` / `bg-primary-dark` | `#152a4d` | Hover states, gradients |
| Primary Light | `text-primary-light` / `bg-primary-light` | `#254a85` | Lighter accents |
| Secondary | `text-secondary` / `bg-secondary` | `#449c9d` | CTAs, buttons, accents |
| Secondary Dark | `text-secondary-dark` / `bg-secondary-dark` | `#367d7e` | Button hover states |
| Secondary Light | `text-secondary-light` / `bg-secondary-light` | `#5ab0b1` | Highlights, badges |

### Typography
- **Primary Font**: Inter (system fallback: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- **Base Size**: 18px minimum
- **Line Height**: 1.15–1.3 for headings, relaxed for body
- Note: `src/styles/fonts.css` contains commented-out `@font-face` rules for local Inter WOFF2 files. Currently the site relies entirely on the system font stack via Tailwind.

### Spacing Customizations
- `spacing-18`: 4.5rem (72px)
- `spacing-22`: 5.5rem (88px)

### Touch Targets
- `min-h-touch`: 48px minimum height
- `min-w-touch`: 48px minimum width
- Applied to all buttons, links, and interactive elements

---

## Accessibility Requirements

All code MUST follow these accessibility standards, which are implemented throughout:

1. **Semantic HTML**: Proper HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<address>`)
2. **ARIA Labels**: All interactive elements have descriptive `aria-label` attributes
3. **Skip Links**: `href="#main-content"` skip link in `Layout.astro` for screen readers
4. **Touch Targets**: Minimum 48×48px for all interactive elements (via `min-h-touch` / `min-w-touch`)
5. **Focus Styles**: Visible focus indicators with `outline: 3px solid #449c9d` and `outline-offset: 2px`
6. **Reduced Motion**: `@media (prefers-reduced-motion: reduce)` disables animations and transitions
7. **Color Contrast**: High contrast between text and background (WCAG AAA target)
8. **Font Size**: Minimum 18px for body text
9. **Section Labels**: `aria-labelledby` pointing to section heading IDs on major `<section>` elements
10. **Image Attributes**: All images have descriptive German `alt` text, plus `width`/`height` and appropriate `loading` (`eager` for hero, `lazy` for below-fold)

---

## Third-Party Integrations

### Web3Forms
- **Purpose**: Contact form submission without backend
- **Endpoint**: `https://api.web3forms.com/submit`
- **Access Key**: `73ea3a14-05ca-4997-8c1a-10fba25bebed` (embedded in `src/pages/index.astro`)
- **Data Flow**: Form data sent directly to Web3Forms API, then emailed to owner
- **Spam Protection**: Honeypot field (`botcheck` checkbox) implemented
- **Redirect**: After submission, redirects to `https://barrierefrei-badberatung.de/danke`
- **Form fields**: Name (required), Phone (required, pattern-validated), Email (optional), Message (required), Privacy checkbox (required)

### Structured Data (Schema.org)
LocalBusiness schema is embedded as inline JSON-LD in `Layout.astro`:
- `@type`: `LocalBusiness`
- Business name, address (Osnabrück)
- Contact: `telephone` (+4954180067046), `email`
- Geo coordinates (52.2799, 8.0472)
- Opening hours: Mo–Fr 08:00–18:00
- Price range: `$$`
- Area served: Osnabrück

---

## SEO Configuration

### Meta Tags (Per Page)
Each page defines in its frontmatter:
- `pageTitle`: Page-specific title (max ~60 chars)
- `pageDescription`: Page description (max ~160 chars)
- Canonical URL auto-generated via `Astro.site` and `Astro.url.pathname`

### Open Graph / Twitter Cards
- Image: `/images/hero.png`
- Type: `website`
- Locale: `de_DE`
- Card type: `summary_large_image`

### Pages

| Route | Purpose | Priority (sitemap) |
|-------|---------|-------------------|
| `/` | Landing page (main conversion) | 1.0 |
| `/impressum` | Legal imprint (§ 5 TMG) | 0.5 |
| `/datenschutz` | Privacy policy (DSGVO) | 0.5 |
| `/danke` | Thank you page after form submission | not in sitemap |
| `/404` | Custom 404 error page | not in sitemap |

### Sitemap
Static sitemap at `/public/sitemap.xml` with manual `lastmod` dates. Must be updated when pages change.

### Robots
`robots.txt` allows all crawlers and references sitemap.

---

## Testing Instructions

This project has **no automated test suite** (no Jest, Vitest, Playwright, or similar). All testing is manual.

### Manual Testing Checklist

1. **Accessibility Audit**
   - Run Lighthouse accessibility test (target: 100/100)
   - Verify keyboard navigation works for all interactive elements
   - Test with screen reader (NVDA/VoiceOver)
   - Check color contrast ratios
   - Verify skip link works
   - Test focus visibility on all buttons and links

2. **Responsive Testing**
   - Mobile: 320px – 768px
   - Tablet: 768px – 1024px
   - Desktop: 1024px+
   - Verify phone CTA is always prominent

3. **Form Testing** (Index Page)
   - Form submits to Web3Forms API
   - Redirects to `/danke` after successful submission
   - Verify honeypot (`botcheck`) is hidden and not tabbable
   - Test loading state (button shows spinner)
   - Test error state (button resets on `pageshow` event)
   - Verify phone input pattern validation
   - Verify privacy checkbox is required

4. **Cookie Banner Testing**
   - Clear `localStorage` to re-trigger banner
   - Verify accept/decline functionality
   - Check that choice persists in `localStorage` (`cookie_consent` key)
   - Banner uses `aria-labelledby` and `role="dialog"`

5. **Performance**
   - Lighthouse Performance target: 100/100
   - Verify lazy loading on below-fold images
   - Hero image uses `loading="eager"` and `fetchpriority="high"`
   - Check asset compression in build output

---

## Deployment Process

### Netlify Configuration
The site deploys automatically via Netlify with settings in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### Deployment Steps
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Build settings auto-detected from `netlify.toml`
4. Site deploys automatically on push to main branch

### Environment Variables
No environment variables required for basic deployment. The Web3Forms access key is embedded directly in the HTML form (client-side) in `src/pages/index.astro`.

---

## Security Considerations

### Security Headers (Configured in netlify.toml)

| Header | Value |
|--------|-------|
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| X-XSS-Protection | 1; mode=block |
| Referrer-Policy | strict-origin-when-cross-origin |
| Strict-Transport-Security | max-age=31536000; includeSubDomains; preload |
| Permissions-Policy | Restricted (no camera, geolocation, etc.) |

### Content Security Policy
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
font-src 'self';
img-src 'self' data:;
connect-src 'self' https://api.web3forms.com;
frame-ancestors 'none';
base-uri 'self';
form-action 'self' https://api.web3forms.com;
```

### Caching Strategy
- Assets (`/_assets/*`): 1 year cache (immutable)
- Fonts (`/fonts/*`): 1 year cache (immutable)
- Images (`/images/*`): 30 days cache

### DSGVO/GDPR Compliance
1. **Local Fonts**: Fonts intended to be served locally (no Google Fonts CDN). `src/styles/fonts.css` is a placeholder; the site currently uses the system font stack.
2. **Cookie Banner**: Implements consent for essential cookies only (stored in `localStorage` as `cookie_consent`)
3. **No Tracking**: No Google Analytics or third-party trackers
4. **Privacy Policy**: Complete Datenschutzerklärung page at `/datenschutz`
5. **Imprint**: Legal imprint (Impressum) page at `/impressum` as required by German law
6. **Web3Forms**: Contact form uses Web3Forms API; privacy notice exists in Datenschutzerklärung
7. **Hosting Disclosure**: Netlify hosting disclosed in Datenschutzerklärung

---

## Common Tasks

### Adding a New Page
1. Create `.astro` file in `src/pages/`
2. Import `Layout`, `Header`, `Footer` components
3. Define `pageTitle` and `pageDescription` constants
4. Use standard page structure (`<Layout>`, `<Header>`, `<main id="main-content">`, `<Footer>`)
5. Add page to `public/sitemap.xml` if it should be indexed

### Adding Images
1. Place images in `/public/images/`
2. Reference with root-relative path: `/images/filename.jpg`
3. Include descriptive `alt` attributes in German
4. Use `loading="lazy"` for below-fold images, `loading="eager"` for hero
5. Include `width` and `height` attributes to prevent layout shift

### Adding Local Fonts
1. Download WOFF2 font files (e.g., Inter from Google Fonts)
2. Create `/public/fonts/` directory and place files there
3. Uncomment and update `@font-face` rules in `src/styles/fonts.css`
4. Verify the `<link rel="stylesheet" href="/src/styles/fonts.css" />` in `Layout.astro` works in production; consider importing the CSS file in the frontmatter instead for Astro/Vite processing

### Modifying Colors
Edit `tailwind.config.cjs` in the `theme.extend.colors` section.

### Updating Contact Information
Contact details are duplicated in multiple files and must be updated consistently:
- `src/components/Header.astro` — Phone CTA
- `src/components/Footer.astro` — Address, phone, email, opening hours
- `src/layouts/Layout.astro` — Schema.org structured data (JSON-LD)
- `src/pages/index.astro` — Contact section, form, CTAs
- `src/pages/impressum.astro` — Legal imprint
- `src/pages/datenschutz.astro` — Privacy policy

---

## Known Issues / TODOs

1. **Local Fonts**: `src/styles/fonts.css` is a placeholder with commented-out `@font-face` rules. The site currently relies on the system font stack. To use Inter locally, download WOFF2 files to `/public/fonts/` and uncomment the rules.
2. **Favicon files**: `Layout.astro` references `/favicon.svg`, `/favicon-32x32.png`, `/favicon-16x16.png`, and `/apple-touch-icon.png`, but these files are not present in `/public/`.

---

## Contact & Support

- **Project Owner**: Alex Reimer
- **Email**: Info@barrierefrei-badberatung.de
- **Phone**: 0541 80067046
- **Address**: In der Dodesheide 2, 49088 Osnabrück, Germany
