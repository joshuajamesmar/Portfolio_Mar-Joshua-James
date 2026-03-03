// ================
// PORTFOLIO DATA 
// ================
import project1 from "/assets/images/lvtv.png";
import project2 from "/assets/images/lavaroom.png";

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
    title: "LVTV: Livestreaming Website",
    category: "Livestreaming Platform",
    description:
    "Live streaming platform built for the Bachelor of Arts in Broadcasting program at La Verdad Christian College - Apalit. Designed to reduce streaming interruptions and centralize cloud-based video archiving for students and faculty.",
    longDescription: 
    `LVTV is a full-stack live streaming platform developed as our Bachelor of Science in Information Systems capstone project for SY 2023–2024. The system was created to enhance the digital experience of BAB students at La Verdad Christian College - Apalit by addressing common issues such as live stream interruptions and inefficient video storage management. The platform optimizes live streaming performance and provides a centralized system for manually archiving recorded broadcasts into designated cloud storage.

    Development followed an agile methodology to ensure continuous feedback, flexibility, and client-focused iteration throughout the project lifecycle. To evaluate system effectiveness, we applied the Technology Acceptance Model (TAM) to measure perceived usefulness and ease of use, along with Website Usability Metrics (WUM) to assess overall usability and user experience. The final product improved user engagement, streamlined video management, and delivered a more reliable and user-friendly digital environment for broadcasting students.`,
    tech: ["Vite+React", "TypeScript", "TailwindCSS", "Laravel", "Node.js", "Owncast"],
    image: project1,
    githubUrl: "https://github.com/joshuajamesmar/LVTV",
    featured: true,
    color: "#002b71",
  },
  {
    id: 2,
    title: "LavaRoom",
    category: "Hot Desk Booking Website",
    description:
    "Workspace management system designed for freelance environments, enabling efficient hot desk scheduling and optimized space utilization while reducing client and workstation conflicts.",

    longDescription:
    `Lavaroom is an organizational workspace management system developed to support freelancers operating within shared work environments. The platform enables structured scheduling of employees across different time slots, allowing users to reserve and combine assigned workstations efficiently within a single venue.

    The system applies a hot desk approach to minimize unused workstations, maximize space efficiency, and reduce scheduling conflicts between freelancers and clients. By streamlining workspace allocation, Lavaroom helps create a more organized and productive environment.

    Through improved scheduling and flexible workspace usage, freelancers gain better opportunities to collaborate and communicate with clients, while clients benefit from a more reliable, well-managed, and productivity-focused working space.`,
    tech: ["HTMLS", "CSS", "JavaScript", "PHP"],
    image: project2,
    githubUrl: "https://github.com/joshuajamesmar/Hot-Desking",
    featured: true,
    color: "#de0303",
  },
  {
    id: 3,
    title: "Orange",
    category: "Web App",
    description:
      "MHMM",
    longDescription:
      "This orange is gineminasaurus.",
    tech: ["Orange", "Huge"],
    image: "https://static.scientificamerican.com/sciam/cache/file/68A02F93-F3F9-40C1-8A157B9F77108A85_source.jpg?w=900",
    githubUrl: "https://github.com/joshuajamesmar",
    featured: false,
    color: "#10b981",
  },
  {
    id: 4,
    title: "Dinosaur",
    category: "Rawhr",
    description:
      "dinonor",
    longDescription:
      "dinosor rohr",
    tech: ["Prehistoric", "Extinct"],
    image: "https://www.metro.pr/resizer/v2/5I2HTYGYLBEADCHMQK4FOVDH5M.jpeg?smart=true&auth=26952bb26c2fc08ff408a4d47b922e3022e5263ff93ac20e17858be4973f7a11&width=1600&height=898",
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
