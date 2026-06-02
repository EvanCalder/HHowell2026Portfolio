# Timothy Calder — Portfolio Site

Personal portfolio site built with React, Three.js, and Framer Motion. Animated 3D AI/ML pipeline hero, project gallery with detail modals, work experience timeline, and contact form.

## Features

- 3D AI/ML pipeline visualization on the hero section (React Three Fiber + Drei)
- Project cards with detailed modals (architecture, data flow, tech stack)
- Floating tech stack showcase
- 3D Earth globe on the contact page
- Smooth scroll animations via Framer Motion
- Tools & Platforms showcase aligned with AI/ML engineering skills
- Work experience timeline
- Contact form (FormSubmit.co)
- Resume download (`public/Timothy_Calder_Resume.docx`)
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

## Setup

```bash
npm install --legacy-peer-deps
npm run dev
```

Open **http://127.0.0.1:5173**

```bash
npm run build
npm run preview
```

## Resume

Resume source: `public/Timothy_Calder_Resume.docx` (copied from your local resume file).

To use a PDF instead, export the Word document to PDF, place it at `public/Timothy_Calder_Resume.pdf`, and update the Resume links in `src/components/Navbar.jsx`.

## Contact

- Email: timothy.calder.dev@gmail.com
- Phone: +1 339 365-7217
- Location: Makati, National Capital Region, Philippines
