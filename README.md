# Hayden Howell — Portfolio Site

Personal portfolio site built with React, Three.js, and Framer Motion. Animated 3D data pipeline hero, project gallery with deep-dive modals, work experience timeline, and an embedded resume.

**Live Site:** [hayden-howell-portfolio.web.app](https://hayden-howell-portfolio.web.app)

## Features

- 3D data pipeline visualization on the hero section (React Three Fiber + Drei)
- Project cards with detailed modals (architecture, data flow, tech stack, screenshots)
- Floating 3D technology balls
- 3D Earth globe on the contact page
- Smooth scroll animations via Framer Motion
- Tools & Platforms showcase
- Work experience timeline
- Contact form (FormSubmit.co)
- Embedded one-page and full-length resume PDFs
- Fully responsive design

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Three.js / React Three Fiber / Drei | 3D graphics |
| Framer Motion | Animations |
| Tailwind CSS 3 | Styling |
| FormSubmit.co | Contact form email delivery |
| Firebase Hosting | Deployment |

## Setup

```bash
npm install --legacy-peer-deps
npx vite          # dev server
npx vite build    # production build
```

## Resume Workflow

The portfolio links to two resume PDFs at the project root and in `public/`:

- `Hayden_Howell_Resume.pdf` — primary 1-page version (rendered from `resume-onepage.html`)
- `Hayden_Howell_Resume_Full.pdf` — long-form 2-page version (rendered from `resume.html`)

To regenerate after editing either HTML, run Chrome headless:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
  --print-to-pdf="Hayden_Howell_Resume.pdf" \
  "file:///absolute/path/to/resume-onepage.html"
```

Then copy the PDF into `public/` so Firebase picks it up on the next build.

## Deploy

```bash
npx vite build
npx firebase deploy --only hosting
```
