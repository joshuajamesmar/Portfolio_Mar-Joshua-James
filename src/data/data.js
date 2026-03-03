// ================
// PORTFOLIO DATA 
// ================
import project1 from "/assets/images/lvtv.png";
import project2 from "/assets/images/lavaroom.png";
import project3 from "/assets/images/biblicite.png";
import project4 from "/assets/images/realtor.png";
import resume from "/assets/files/Joshua_Mar_Resume.pdf";

export const personal = {
  name: "Joshua Mar",
  tagline: "CSS - DE | Aspiring Frontend Developer",
  bio: "I create interactive digital experiences that blend design and development. I bring a passion for crafting elegant, user-friendly interfaces that are both functional and enjoyable to use, translating ideas into code with precision and creativity.",
  location: "Mandaluyong City, Metro Manila, Philippines",
  availability: "Open to opportunities",
  email: "joshuajames.d.mar@gmail.com",
  phone: `+63 921-295-3760  
  +63 917-129-0373`,
  resumeUrl: resume,
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
    category: "Backend",
    items: [
      { name: "Laravel", level: 55 },
      { name: "Node.js", level: 55 },
      { name: "REST APIs", level: 60 },
      { name: "MySQL", level: 50 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Figma", level: 75 },
      { name: "Git / GitHub", level: 75 },
      { name: "Netlify / Vercel", level: 75 },
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
    title: "Biblicite",
    category: "Mobile Application",
    description:
    "Mobile digital Bible application featuring offline reading, verse search, note-taking, and daily scripture highlights designed to improve accessibility and usability for modern users.",
    longDescription:
    `Digibible is a mobile digital Bible application developed to make scripture more accessible in today’s modern, technology-driven environment. The platform provides users with a fully digitized version of the Bible that can be accessed online or offline through smartphones, supporting both the King James Version (KJV) and Ang Dating Biblia 1905 translations.

    The application was designed to simplify Bible navigation by allowing users to quickly browse books, chapters, and verses through an intuitive interface. Key features include verse search functionality, a Verse of the Day dashboard, customizable themes, and an integrated note-taking system that enables users to record reflections and lessons directly within the app.

    Digibible also integrates useful resources such as official church links and media channels to support religious learning and engagement beyond scripture reading. Users can highlight verses, organize notes, and personalize the application’s appearance to enhance their reading experience.

    Built with usability and efficiency in mind, the application prioritizes simplicity, low data consumption, and offline accessibility. No user registration is required, ensuring privacy while allowing immediate access to all features. The result is a lightweight, user-friendly digital companion designed to support Bible study, church activities, and daily spiritual learning.`,
    tech: ["Expo", "Expo CLI", "React Native", "JavaScript"],
    image: project3,
    githubUrl: "https://github.com/joshuajamesmar/Bible-App",
    featured: false,
    color: "#7a6c03",
  },
  {
    id: 4,
    title: "Modern Realtor Landing Page",
    category: "Website Redesign",
    description:
    "Modernized realtor website homepage redesign focused on improving visual hierarchy, usability, and overall user experience while maintaining existing content and branding.",
    longDescription:
    `This project was completed as part of a Web Builder technical assessment focused on redesigning a realtor website homepage. The objective was to revamp the existing design while preserving all original content and assets, transforming the page into a cleaner, more modern, and user-friendly experience.

    The redesign emphasized simplicity and elegance by improving layout structure, typography, spacing, and visual hierarchy. Rather than replicating the original page, the goal was to enhance usability and create a more engaging first impression for potential property clients.

    Using HTML, CSS, and JavaScript, the homepage was rebuilt as a single-page website with responsive design principles to ensure accessibility across different screen sizes. Additional refinements included improved navigation flow, clearer call-to-action sections, and optimized content organization to better guide users through property information.

    This project demonstrates my ability to interpret client requirements, apply creative problem-solving, and deliver a polished interface under real-world assignment constraints while balancing aesthetics and functionality.`,
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Google Maps API", "REST API Integration"],
    image: project4,
    liveUrl: "https://dynamic-gaufre-9beb05.netlify.app/",
    githubUrl: "https://github.com/joshuajamesmar/pft-web-builder-assignment",
    featured: false,
    color: "#f9d375",
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
