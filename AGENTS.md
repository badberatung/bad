<!-- From: /Users/albinsalihu/Downloads/bad-master/AGENTS.md -->
# Barrierefrei Badberatung - Agent Guide

## Project Overview

**Barrierefrei Badberatung** is a static website for Alex Reimer, offering professional consulting for barrier-free bathroom renovation in Osnabrück, Germany. The website targets seniors and people with mobility challenges, focusing on accessibility grants (up to €4,180 from Pflegekasse).

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
| Forms | Web3Forms | External API |
| Hosting | Netlify | Static |
| Node.js | - | 20 (specified in netlify.toml) |

---

## Project Structure

```
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro     # Sticky header with phone CTA
│   │   └── Footer.astro     # Site footer with contact/legal links
│   ├── layouts/             # Layout templates
│   │   └── Layout.astro     # Base layout with SEO, cookie banner, schema
│   ├── pages/               # Route pages (Astro file-based routing)
│   │   ├── index.astro      # Landing page (main content)
│   │   ├── impressum.astro  # Legal imprint page
│   │   ├── datenschutz.astro # Privacy policy page
│   │   ├── danke.astro      # Thank you page after form submission
│   │   └── 404.astro        # Custom 404 error page
│   ├── styles/
│   │   └── fonts.css        # Local font definitions (DSGVO-compliant, placeholder)
│   └── env.d.ts             # Astro TypeScript declarations
├── public/                  # Static assets (copied as-is to dist)
│   ├── images/              # Images
│   │   ├── Bodengleich.jpg  # Walk-in shower section image
│   │   ├── Haltegriffe.jpg  # Grab bars section image
│   │   ├── beratung.png     # Consulting section image
│   │   ├── hero.png         # Hero section image
│   │   ├── logo.png         # Company logo
│   │   ├── rutschfest.jpg   # Anti-slip section image
│   │   └── uberuns.jpg      # About us portrait
│   ├── robots.txt           # SEO robots configuration
│   ├── sitemap.xml          # SEO sitemap
│   └── site.webmanifest     # PWA manifest
├── astro.config.mjs         # Astro configuration
├── tailwind.config.cjs      # Tailwind customization
├── netlify.toml             # Netlify deployment & security headers
└── package.json             # Dependencies & scripts
```

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

## Code Style Guidelines

### Language
- All user-facing content is in **German**
- Code comments are in **German**
- Variable names use English following JavaScript conventions

### File Organization
- **Pages**: All pages in `src/pages/` use `.astro` extension
- **Components**: All components in `src/components/` use `.astro` extension
- **Layouts**: Single base layout in `src/layouts/`
- **Styles**: Global styles in `src/styles/`, component styles use `<style>` tags

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

<style>
  /* Scoped styles (only apply to this component) */
  .example { color: red; }
</style>
```

### Naming Conventions
- Components: PascalCase (e.g., `Header.astro`, `Footer.astro`)
- Pages: lowercase (e.g., `index.astro`, `impressum.astro`)
- CSS Classes: Tailwind utility classes preferred
- Custom classes: lowercase with hyphens

### Comments in Code
The project uses German comments in the code, following this pattern:
```astro
<!-- ==========================================
     SECTION NAME
     ========================================== -->
```

### Page Structure Pattern
Every page follows this structure:
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

## Accessibility Requirements

All code MUST follow these accessibility standards:

1. **Semantic HTML**: Use proper HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, etc.)
2. **ARIA Labels**: All interactive elements need descriptive `aria-label` attributes
3. **Skip Links**: Include skip-to-content link for screen readers (`#main-content`)
4. **Touch Targets**: Minimum 48x48px for all interactive elements (use `min-h-touch`/`min-w-touch` classes)
5. **Focus Styles**: Visible focus indicators with `outline: 3px solid #449c9d`
6. **Reduced Motion**: Respect `prefers-reduced-motion` media query
7. **Color Contrast**: WCAG AAA compliance required (high contrast between text and background)
8. **Font Size**: Minimum 18px for body text
9. **Section Labels**: Use `aria-labelledby` pointing to section heading IDs

---

## Design System

### Color Palette (Tailwind Config)

| Name | CSS Variable | Hex | Usage |
|------|--------------|-----|-------|
| Primary | `text-primary` | `#1c3867` | Headers, primary brand color |
| Primary Dark | `text-primary-dark` | `#152a4d` | Hover states |
| Primary Light | `text-primary-light` | `#254a85` | Lighter accents |
| Secondary | `text-secondary` | `#449c9d` | CTAs, buttons, accents |
| Secondary Dark | `text-secondary-dark` | `#367d7e` | Button hover |
| Secondary Light | `text-secondary-light` | `#5ab0b1` | Highlights |

### Typography
- **Primary Font**: Inter (system fallback: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- **Base Size**: 18px minimum
- **Line Height**: 1.2-1.3 for headings, relaxed for body

### Spacing Customizations
- `spacing-18`: 4.5rem (72px)
- `spacing-22`: 5.5rem (88px)

### Tailwind Touch Classes
- `min-h-touch`: 48px minimum height
- `min-w-touch`: 48px minimum width

---

## Testing Instructions

### Manual Testing Checklist

1. **Accessibility Audit**
   - Run Lighthouse accessibility test (target: 100/100)
   - Verify keyboard navigation works for all interactive elements
   - Test with screen reader (NVDA/VoiceOver)
   - Check color contrast ratios

2. **Responsive Testing**
   - Mobile: 320px - 768px
   - Tablet: 768px - 1024px
   - Desktop: 1024px+

3. **Form Testing** (Index Page)
   - Form submits to Web3Forms API
   - Web3Forms key is configured: `73ea3a14-05ca-4997-8c1a-10fba25bebed`
   - Redirects to `/danke` after submission
   - Test success/error states
   - Verify honeypot spam protection is present

4. **Cookie Banner Testing**
   - Clear localStorage to re-trigger banner
   - Verify accept/decline functionality
   - Check that choice persists in localStorage (`cookie_consent` key)

5. **Performance**
   - Lighthouse Performance target: 100/100
   - Verify lazy loading on images (`loading="lazy"` for below-fold, `loading="eager"` for hero)
   - Check asset compression

### Note on Automated Testing
This project does **not** have automated tests configured (no Jest, Vitest, or Playwright setup). All testing is manual.

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
No environment variables required for basic deployment. Web3Forms key is embedded directly in the HTML form (client-side) at `src/pages/index.astro`.

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
1. **Local Fonts**: Fonts served locally (no Google Fonts CDN) - placeholder config in `src/styles/fonts.css`
2. **Cookie Banner**: Implements consent for essential cookies only (stored in localStorage as `cookie_consent`)
3. **No Tracking**: No Google Analytics or third-party trackers
4. **Privacy Policy**: Complete Datenschutzerklärung page at `/datenschutz`
5. **Imprint**: Legal imprint (Impressum) page at `/impressum` as required by German law
6. **Web3Forms**: Contact form uses Web3Forms API with privacy notice in Datenschutzerklärung

---

## Third-Party Integrations

### Web3Forms
- **Purpose**: Contact form submission without backend
- **Endpoint**: `https://api.web3forms.com/submit`
- **Access Key**: `73ea3a14-05ca-4997-8c1a-10fba25bebed` (configured in `src/pages/index.astro`)
- **Data Flow**: Form data sent directly to Web3Forms API, then emailed to owner
- **Spam Protection**: Honeypot field (`botcheck` checkbox) implemented
- **Redirect**: After submission, redirects to `/danke`

### Structured Data (Schema.org)
LocalBusiness schema embedded in `Layout.astro`:
- Business name, address (Osnabrück)
- Contact: phone, email
- Geo coordinates (52.2799, 8.0472)
- Opening hours (Mo-Fr 08:00-18:00)
- Price range ($$)

---

## SEO Configuration

### Meta Tags (Per Page)
Each page defines:
- `pageTitle`: Page-specific title (60 chars max)
- `pageDescription`: Page description (160 chars max)
- Canonical URL auto-generated via `Astro.site` and `Astro.url.pathname`

### Open Graph / Twitter Cards
- Image: `/images/hero.png`
- Type: website
- Locale: de_DE

### Pages
| Route | Purpose |
|-------|---------|
| `/` | Landing page (main conversion) |
| `/impressum` | Legal imprint |
| `/datenschutz` | Privacy policy |
| `/danke` | Thank you page after form submission |
| `/404` | Custom 404 error page |

### Redirects
- `/impressum.html` → `/impressum` (301)
- `/datenschutz.html` → `/datenschutz` (301)

### Sitemap
Static sitemap at `/public/sitemap.xml` with all pages listed.

### Robots
`robots.txt` allows all crawlers and references sitemap.

---

## Common Tasks

### Adding a New Page
1. Create `.astro` file in `src/pages/`
2. Import Layout, Header, Footer components
3. Define `pageTitle` and `pageDescription` constants
4. Use standard page structure as shown in Code Style Guidelines
5. Add page to `public/sitemap.xml`

### Adding Images
1. Place images in `/public/images/`
2. Reference with root-relative path: `/images/filename.jpg`
3. Include descriptive `alt` attributes (German language)
4. Use `loading="lazy"` for below-fold images, `loading="eager"` for hero
5. Include `width` and `height` attributes to prevent layout shift

### Adding Local Fonts
1. Download WOFF2 font files
2. Create `/public/fonts/` directory and place files there
3. Uncomment and update `@font-face` rules in `src/styles/fonts.css`

### Modifying Colors
Edit `tailwind.config.cjs` theme.extend.colors section.

### Updating Contact Information
Contact details are located in multiple files:
- `src/components/Header.astro` - Phone CTA
- `src/components/Footer.astro` - Address, phone, email
- `src/layouts/Layout.astro` - Schema.org structured data
- `src/pages/index.astro` - Contact section, form
- `src/pages/impressum.astro` - Legal imprint
- `src/pages/datenschutz.astro` - Privacy policy

---

## Known Issues / TODOs

1. **Local Fonts**: Currently using system fonts; local Inter font files can be added to `/public/fonts/` (directory does not exist yet)

---

## Contact & Support

- **Project Owner**: Alex Reimer
- **Email**: Info@barrierefrei-badberatung.de
- **Phone**: 0541 80067046
- **Address**: In der Dodesheide 2, 49088 Osnabrück, Germany
