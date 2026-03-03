import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "../../data/data";

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = personal.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-[#080c14]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
            : "py-6"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f8ef7] to-[#a78bfa] flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform duration-200">
              {initials}
            </div>
            <span className="text-sm font-medium text-black/50 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors hidden sm:block">
              {personal.name}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4f8ef7] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                /* Sun icon — shown in dark mode to switch to light */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon — shown in light mode to switch to dark */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-200"
            >
              Let's talk
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              aria-label="Open menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  className="block h-px bg-current rounded"
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-px bg-current rounded"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-px bg-current rounded"
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#080c14]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-black/50 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
