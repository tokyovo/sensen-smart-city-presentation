# SenSen Smart City Presentation

An interactive presentation showcasing SenSen's Smart City Technology Ecosystem. Features a dual-theme system with terminal-based and modern light themes, keyboard navigation, and fullscreen presentation mode.

## Live Demo

View the presentation: [https://tokyovo.github.io/sensen-smart-city-presentation/](https://tokyovo.github.io/sensen-smart-city-presentation/)

## Features

- **Dual Theme System**: Toggle between terminal-based (dark) and light modern themes
- **Keyboard Navigation**: Arrow keys for navigation, F for fullscreen, P for theme toggle
- **Fullscreen Mode**: Optimized for presentations
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Ecosystem Diagram**: Multi-layer technology stack visualization

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- Recharts

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push the compiled files to the `gh-pages` branch.

## Project Structure

```
/components          # React components
  /EcosystemSlide.tsx
  /SlideRenderer.tsx
  /charts/SlideCharts.tsx
/slides             # Slide content data
  /titleSlide.ts
  /ecosystemSlide.ts
  /senForceSlide.ts
  /senMapSlide.ts
  /senShieldSlide.ts
  /senPicSlide.ts
  /ecosystemIntegratedSlide.ts
```

## Keyboard Shortcuts

- `←/→` or `Arrow Left/Right`: Navigate slides
- `F`: Toggle fullscreen mode
- `P`: Toggle theme (Terminal ↔ Light)
- `Esc`: Exit fullscreen

## License

Proprietary - SenSen Networks
