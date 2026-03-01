// ================
// PORTFOLIO DATA 
// ================

export const personal = {
  name: "Joshua Mar",
  tagline: "CSS - DE | Aspiring Frontend Developer",
  bio: "I create interactive digital experiences that blend design and development. I bring a passion for crafting elegant, user-friendly interfaces that are both functional and enjoyable to use, translating ideas into code with precision and creativity.",
  location: "Mandaluyong City, Metro Manila, Philippines",
  availability: "Open to opportunities",
  email: "joshuajames.d.mar@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/joshuajamesmar",
    linkedin: "https://www.linkedin.com/in/joshua-james-mar/",
    facebook: "https://www.facebook.com/joshuajmar",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React JS", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS / Tailwind", level: 80 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Figma", level: 75 },
      { name: "Git / GitHub", level: 75 },
      { name: "Netlify", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Beacon Analytics",
    category: "SaaS Dashboard",
    description:
      "Real-time analytics platform with customizable dashboards. Built for scale — handles 2M+ events/day with sub-200ms query response times.",
    longDescription:
      "Beacon is a full-stack SaaS analytics platform I designed and built end-to-end. Features include real-time event streaming, custom dashboard builder with drag-and-drop widgets, multi-tenant architecture, and a React-based query editor. The UI was designed with a focus on data density without cognitive overload.",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "https://beacon.example.com",
    githubUrl: "https://github.com/alexmercer/beacon",
    featured: true,
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Forma Design System",
    category: "Design System",
    description:
      "Comprehensive component library with 60+ components, full dark mode, and a11y compliance. Used by 3 internal products.",
    longDescription:
      "Forma is a design system I built from scratch after noticing inconsistencies across our product suite. It includes a Figma library, a React component library with Storybook documentation, automated visual regression testing via Chromatic, and a documentation site.",
    tech: ["React", "Storybook", "Radix UI", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    liveUrl: "https://forma.example.com",
    githubUrl: "https://github.com/alexmercer/forma",
    featured: true,
    color: "#a855f7",
  },
  {
    id: 3,
    title: "Meridian Maps",
    category: "Web App",
    description:
      "Interactive geospatial visualization tool for urban planners. Processes city-scale datasets with WebGL-accelerated rendering.",
    longDescription:
      "A geospatial data visualization tool built for a city planning consultancy. Features WebGL rendering via deck.gl for smooth 60fps animations on datasets with millions of points, custom map styles, and an AI-assisted layer recommendation system.",
    tech: ["React", "deck.gl", "Mapbox GL", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    liveUrl: "https://meridian.example.com",
    githubUrl: "https://github.com/alexmercer/meridian",
    featured: false,
    color: "#10b981",
  },
  {
    id: 4,
    title: "Pulse Streaming",
    category: "Media Platform",
    description:
      "High-performance video streaming interface with adaptive bitrate, custom player controls, and creator analytics dashboard.",
    longDescription:
      "A custom video streaming platform built for independent creators. Features include adaptive bitrate streaming via HLS.js, a fully custom React video player, creator analytics, comment threading, and subscription management.",
    tech: ["Next.js", "HLS.js", "Stripe", "Prisma", "Vercel"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    liveUrl: "https://pulse.example.com",
    githubUrl: "https://github.com/alexmercer/pulse",
    featured: false,
    color: "#f59e0b",
  },
];

export const experience = [
  {
    role: "Internship",
    company: "La Verdad Christian College",
    period: "March 2024 — September 2024",
    description:
      "On the Job Training as a Web Developer and Maintenance, Developed and maintained a Digital Library System, As well as Record keeping and encoding.",
  },
  {
    role: "Client Support Specialist - Data Entry",
    company: "Global Strategic Business Process Solutions",
    period: "2020 — 2022",
    description:
      "Manage foreclosure accounts monthly, maintaining 98% billing accuracy, reducing processing turnaround time by 50%, and ensuring 99% on-time completion through proactive file monitoring and organized documentation.",
  },
];

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
