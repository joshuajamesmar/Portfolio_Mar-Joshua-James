# Joshua Mar — Personal Portfolio

> A personal portfolio website built to showcase my projects, skills, and growth as an aspiring frontend developer. Designed and coded from scratch with ReactJS, TailwindCSS, and Framer Motion — prioritizing clean aesthetics, smooth animations, and a great experience on any device.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white)

---

## 📌 About This Project

This is my personal portfolio — built from scratch as both a showcase and a learning project. The goal was to go beyond a basic template and build something that reflects how I think about frontend work: intentional design, meaningful interactions, and clean code structure.

The portfolio features a dark and light mode toggle, scroll-triggered animations throughout every section, interactive project cards with modal detail views, an animated skill tracker, an experience timeline, and a validated contact form — all built without any external UI component libraries.

---

## ✨ Features

- **Dark / Light Mode** — Full site-wide theme toggle, class-based via Tailwind, persists across all components
- **Animated Hero Section** — Word-by-word text reveal, ambient glowing orbs, and a parallax float on scroll
- **Interactive Project Cards** — Hover effects that reveal the tech stack, click-to-open modal with full description and live/GitHub links
- **Skill Bars** — Animated progress indicators grouped by category, triggered on scroll entry
- **Experience Timeline** — Vertical line draws in on scroll with staggered role entries
- **Scroll-Triggered Animations** — Every section animates in using a custom `useInView` hook built on the IntersectionObserver API
- **Contact Form** — Client-side field validation, loading state, and success feedback
- **Custom Cursor** — Dual-layer cursor (precise dot + spring-lagged ring) that follows the pointer on desktop
- **Preloader** — Animated entrance screen on first page load
- **Scroll-Aware Navbar** — Gains a blur/border after 40px of scroll, includes animated mobile hamburger menu
- **Fully Responsive** — Mobile-first layout across all breakpoints
- **Accessible** — Semantic HTML5 elements, ARIA labels, keyboard navigation support on interactive elements
- **Performance-Focused** — Lazy-loaded images, scroll animations fire only once per element, minimal runtime dependencies

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| [React 18](https://react.dev/) | Component-based UI framework |
| [Vite 5](https://vitejs.dev/) | Development server and build tool |
| [Tailwind CSS (CDN)](https://tailwindcss.com/) | Utility-first styling — no PostCSS setup needed |
| [Framer Motion 11](https://www.framer.com/motion/) | Page animations, transitions, spring physics |
| [Google Fonts](https://fonts.google.com/) | Syne (headings) + DM Sans (body text) |

No UI kits. No pre-built component libraries. Everything is written by hand.

---

## 📁 Project Structure

```
portfolio/
├── index.html                      ← Entry point with Tailwind CDN config and SEO meta
├── vite.config.js
├── package.json
└── src/
    ├── App.jsx                     ← Root layout, theme state, preloader gate
    ├── main.jsx                    ← React DOM root
    ├── data/
    │   └── data.js                 ← ✏️ Single source of truth — edit this to personalize
    ├── components/
    │   ├── sections/
    │   │   ├── Hero.jsx            ← Animated headline, parallax scroll, CTAs, socials
    │   │   ├── Projects.jsx        ← Card grid, hover reveal, modal preview
    │   │   ├── Skills.jsx          ← Animated progress bars by category
    │   │   ├── About.jsx           ← Bio, stats, and experience timeline
    │   │   └── Contact.jsx         ← Validated form with loading and success states
    │   └── ui/
    │       ├── Navbar.jsx          ← Scroll-aware header, theme toggle, mobile menu
    │       ├── CustomCursor.jsx    ← Spring-physics dual cursor (desktop)
    │       ├── Preloader.jsx       ← Initial load animation
    │       └── Footer.jsx
    ├── hooks/
    │   └── useInView.js            ← IntersectionObserver hook, fires once per element
    └── styles/
        └── globals.css             ← Font imports, custom scrollbar, text selection
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/joshuajamesmar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

> Tailwind CSS loads via CDN in `index.html` — no PostCSS or additional config needed for styling to work.

---

## ✏️ Personalizing the Content

Everything visible on the site — your name, bio, projects, skills, experience, and links — comes from one file:

```
src/data/data.js
```

You don't need to edit any component files. Just update the exported objects:

```js
// Personal info
export const personal = {
  name: "Your Name",
  tagline: "Your Role | Your Title",
  bio: "A short description of who you are...",
  location: "Your City, Country",
  availability: "Open to opportunities",
  email: "you@email.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

// Projects
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Web App",
    description: "Short one-liner shown on the card.",
    longDescription: "Full detail shown in the modal.",
    tech: ["React", "TailwindCSS"],
    image: "https://your-image-url.com/image.jpg",
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    color: "#4f8ef7",   // tint color on hover
  },
];

// Skills
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React JS", level: 80 },  // level = 0-100
      { name: "HTML", level: 90 },
    ],
  },
];

// Experience
export const experience = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2023 — Present",
    description: "What you did there.",
  },
];
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# Output: dist/ folder
```

### Netlify

```bash
# Via CLI
npm i -g netlify-cli
netlify deploy --dir=dist --prod

# Or drag and drop dist/ at netlify.com/drop
```

### Vercel

```bash
# Via CLI
npm i -g vercel
vercel

# Or import your GitHub repo at vercel.com → Framework: Vite → Deploy
```

### GitHub Pages

```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## 📬 Connecting the Contact Form

The form currently validates on the client side but simulates a send with a timeout. To wire it up to actually send emails, swap the `setTimeout` in `Contact.jsx` for a real service:

**Formspree (recommended, free tier available):**

1. Sign up at [formspree.io](https://formspree.io) and create a form
2. Replace the fake send in `Contact.jsx` with:

```js
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify(form),
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
if (res.ok) setStatus("sent");
else setStatus("idle");
```

**EmailJS (fully client-side, no backend needed):**
See [emailjs.com/docs](https://www.emailjs.com/docs/) for setup.

---

## 🎨 Design Notes

- **Fonts:** Syne for headings (geometric, distinctive), DM Sans for body (clean, highly readable)
- **Color palette:** Near-black `#080c14` dark mode, warm off-white `#f5f4f0` light mode — neither is a plain grey default
- **Accent gradient:** Blue `#4f8ef7` → Purple `#a78bfa` → Pink `#f472b6` — used sparingly on key moments only
- **Animation philosophy:** Every motion has a reason. Animations should feel inevitable, not decorative
- **Dark mode:** Implemented with Tailwind's `darkMode: 'class'` — toggled by adding/removing `dark` on `<html>` via React state

---

## 📄 License

MIT — free to use as a base for your own portfolio. If you do, a credit or a star on the repo is appreciated but not required.

---

*Made by [Joshua Mar](https://github.com/joshuajamesmar) — CSS-DE | Aspiring Frontend Developer, Metro Manila, Philippines.*
