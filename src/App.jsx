import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";
import Preloader from "./components/ui/Preloader";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Toggle the 'dark' class on <html> — this is what Tailwind's darkMode:'class' reads
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    // Single root div — bg and text colors respond to the dark class on <html>
    <div className="min-h-screen bg-[#f5f4f0] dark:bg-[#080c14] text-[#1a1a2e] dark:text-[#e8eaf0] transition-colors duration-500 font-sans">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar isDark={isDark} toggleTheme={() => setIsDark((p) => !p)} />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
