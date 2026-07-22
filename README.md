# VEDA Service Menu

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

**🚀 Live Demo:** [https://YOUR-SITE-NAME.netlify.app](https://YOUR-SITE-NAME.netlify.app)

An interactive application showcasing VEDA (Visualization, Exploration, and Data Analysis) services and user personas, styled to follow NASA's Horizon Design System (HDS).

## Features

- 🛰️ **NASA Horizon Design System**: Clean, professional styling with Inter / Public Sans / DM Mono typography and a NASA-blue design-token palette
- 🎨 **Design tokens**: CSS custom properties + Tailwind theme for consistent color, spacing, radius, and elevation
- 🧭 **App shell**: Sticky header with the official NASA VEDA logo, breadcrumb + prev/next navigation, and a footer of related VEDA/ODSI/Development Seed links
- 🖼️ **Consistent iconography**: `lucide-react` line icons throughout (no emoji)
- ♿ **Accessible**: Semantic landmarks, skip link, visible focus states, AA contrast, and reduced-motion support
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- 🔗 **Embeddable**: Designed to be embedded in Quarto GitHub pages
- ⚡ **Static Export**: Built with Next.js static export for easy deployment

## Service Categories

1. **Data Services** 🛰️ - Access and integrate Earth observation data and APIs
2. **Cloud Infrastructure** 🏗️ - Scalable cloud infrastructure and deployment solutions
3. **Custom Visualization Development** 📊 - Create custom data visualizations and dashboards
4. **Website Management** 🌐 - Professional web development and management services
5. **Content Curation** 📚 - Expert content curation and management solutions
6. **User Services** 🤝 - Dedicated user support and assistance services
7. **Cloud Computing** ☁️ - High-performance cloud computing resources
8. **Access Management** 🔐 - Secure access control and authentication services

## User Personas

- 🔬 Data Scientist
- 💻 Application Developer
- 🌍 Earth Scientist
- 📊 Decision Maker
- 👨‍🏫 Educator

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
veda-service-menu/
├── app/                      # Next.js app directory
│   ├── globals.css          # HDS design tokens and base styles
│   ├── layout.tsx           # Root layout (fonts + header/footer shell)
│   ├── page.tsx             # Home page (hero + grids + resources)
│   ├── services/            # Service category pages (9)
│   └── personas/            # User persona pages (5)
├── components/
│   ├── layout/              # SiteHeader, SiteFooter, VedaLogo, PrevNextNav
│   ├── ui/                  # Primitives: Container, Card, Button, Badge, SectionHeading, IconBadge
│   └── pages/               # ServiceGrid, PersonaGrid, ServiceDetailPage, PersonaDetail, ...
├── lib/                     # navigation, icons, links, cn helpers
├── public/                  # Static assets (veda-logo.svg)
└── netlify.toml            # Netlify deployment configuration
```

## Customization

### Theme Colors

Edit the design tokens in `app/globals.css`:

```css
:root {
  --background: #f4f6f8;
  --foreground: #12233b;
  --surface: #ffffff;
  --primary: #0066b3;      /* NASA blue (matches the VEDA logo) */
  --accent: #d04200;       /* VEDA orange */
}
```

### Adding Content

1. Edit service descriptions in `components/pages/HomePage.tsx`
2. Update user personas in the same file
3. Add detailed content to individual service pages in `app/services/*/page.tsx`

## Deployment

### Netlify (Recommended)

The application is deployed on Netlify with automatic deployments on every push to `main`.

**Live Site:** [https://YOUR-SITE-NAME.netlify.app](https://YOUR-SITE-NAME.netlify.app)

The `netlify.toml` configuration handles:
- Automatic builds with `npm run build`
- Static file serving from `out/` directory
- Client-side routing for SPA navigation
- Asset optimization (CSS, JS, images)

### Manual Static Export

The app is configured to export as static files:

```bash
npm run build
```

The output will be in the `out/` directory, ready for hosting on any static site platform (Vercel, GitHub Pages, S3, etc.).

## Embedding in Quarto

To embed this application in a Quarto document, use an iframe:

```html
<iframe
  src="https://your-app-url.com"
  width="100%"
  height="800px"
  frameborder="0">
</iframe>
```

## License

This project is developed for NASA IMPACT VEDA initiative
