# Barrierefrei Badberatung - Website

Hochkonvertierende, seniorenfreundliche Website für Alex Reimer (Barrierefrei Badberatung) in Osnabrück.

## 🚀 Tech Stack

- **Framework:** Astro 4.x (Static Site Generation)
- **Styling:** Tailwind CSS
- **Formular:** Web3Forms (kein Backend nötig)
- **Hosting:** Netlify

## 📁 Projektstruktur

```
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/         # Layout-Komponenten
│   │   └── Layout.astro
│   ├── pages/           # Seiten
│   │   ├── index.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   └── styles/          # Globale Styles
│       └── fonts.css
├── public/              # Statische Assets
│   ├── fonts/           # Lokale Schriftarten (DSGVO-konform)
│   └── images/          # Bilder
├── package.json
├── astro.config.mjs
├── tailwind.config.cjs
└── netlify.toml         # Netlify Config mit Security Headers
```

## 🛠️ Installation & Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Produktions-Build
npm run build
```

## 🖼️ Bilder einfügen

Platziere deine Bilder in `/public/images/`:

| Pfad | Verwendung |
|------|------------|
| `/public/images/hero-bad.jpg` | Hero-Bereich Startseite |
| `/public/images/zuschuss-beratung.jpg` | Zuschuss-Sektion |
| `/public/images/alex-reimer-portrait.jpg` | Portrait Alex Reimer |
| `/public/images/og-image.jpg` | Social Media Preview |

## 🔤 Schriftarten einfügen (DSGVO-konform)

1. Lade **Inter** von [Google Fonts](https://fonts.google.com/specimen/Inter) herunter
2. Konvertiere zu WOFF2 (z.B. mit [transfonter.org](https://transfonter.org/))
3. Speichere in `/public/fonts/`
4. Entferne die Kommentare in `/src/styles/fonts.css`

## 📧 Web3Forms einrichten

1. Registriere dich auf [web3forms.com](https://web3forms.com/)
2. Kopiere deinen Access Key
3. Ersetze `YOUR_WEB3FORMS_KEY` in `src/pages/index.astro`

## 🚀 Deployment auf Netlify

1. Repository auf GitHub pushen
2. Auf [Netlify](https://netlify.com) mit GitHub verbinden
3. Build-Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## ♿ Accessibility Features

- Semantisches HTML5
- ARIA-Labels überall
- Skip-Link für Screen Reader
- Hohe Kontraste (WCAG AAA)
- Mindestens 18px Fließtext
- Touch-Targets min. 48px
- Reduced Motion Support

## 📱 Lighthouse Ziele

- Performance: 100/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

## 📞 Kontakt

Bei Fragen: Info@barrierefrei-badberatung.de
