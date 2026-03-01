import { personal, navLinks } from "../../data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-black/20 dark:text-white/20">
          © {year} {personal.name} — Built with React & Framer Motion
        </p>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-black/25 dark:text-white/25 hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(personal.social).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-black/20 dark:text-white/20 hover:text-black/50 dark:hover:text-white/50 uppercase tracking-widest transition-colors"
              aria-label={name}
            >
              {name[0].toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
