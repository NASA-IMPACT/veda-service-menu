# VEDA Service Menu

A book/menu-styled interactive application showcasing VEDA (Visualization, Exploration, and Data Analysis) services and user personas.

## Features

- 📖 **Book-style Interface**: Beautiful, interactive two-page spread with realistic book design
- 🔄 **3D Page Flip Animation**: Smooth 3D perspective page turns when navigating
- 📑 **Sequential Navigation**: Forward/backward buttons to browse through all pages like a real book
- 🎯 **Static Menu Page**: Service categories always visible on the left for easy navigation
- 🎨 **Customizable Theme**: CSS variable-based theming system for easy customization
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
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── services/            # Service category pages
├── components/
│   ├── book/                # Book UI components
│   │   ├── Book.tsx
│   │   ├── Page.tsx
│   │   ├── ServiceButton.tsx
│   │   └── PersonaCard.tsx
│   └── pages/               # Page components
│       ├── HomePage.tsx
│       └── ServicePage.tsx
├── public/                  # Static assets
└── amplify.yml             # AWS Amplify configuration
```

## Customization

### Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: #f5f1e8;
  --foreground: #2c2416;
  --book-bg: #faf7f0;
  --button-primary: #4a7c9e;
  --accent: #8b6f47;
}
```

### Adding Content

1. Edit service descriptions in `components/pages/HomePage.tsx`
2. Update user personas in the same file
3. Add detailed content to individual service pages in `app/services/*/page.tsx`

## Deployment

### AWS Amplify

The application is configured for AWS Amplify deployment with `amplify.yml`. Simply connect your repository to Amplify and it will automatically build and deploy.

### Static Export

The app is configured to export as static files:

```bash
npm run build
```

The output will be in the `out/` directory, ready for hosting on any static site platform.

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
