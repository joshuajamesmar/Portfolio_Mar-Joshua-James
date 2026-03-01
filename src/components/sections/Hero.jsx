import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personal } from "../../data/data";

function SplitReveal({ text, className, delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,142,247,0.13) 0%, transparent 70%)",
          top: "-10%",
          right: "-5%",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
          bottom: "10%",
          left: "5%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <AmbientOrbs />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20"
        style={{ y }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-black/50 dark:text-white/50">
            {personal.availability}
          </span>
          <span className="text-black/20 dark:text-white/20">·</span>
          <span className="text-xs text-black/40 dark:text-white/40">
            {personal.location}
          </span>
        </motion.div>
        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-extralight leading-[1.05] tracking-tight mb-6 overflow-hidden">
          <div className="overflow-hidden">
            <SplitReveal
              text="Building things"
              className="block text-[#1a1a2e] dark:text-white"
              delay={0.3}
            />
          </div>
          <div className="overflow-hidden">
            <SplitReveal
              text="worth using."
              className="block bg-gradient-to-r from-[#4f8ef7] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"
              delay={0.5}
            />
          </div>
        </h1>

        <motion.p
          className="max-w-xl text-base text-black/50 dark:text-white/45 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {personal.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4f8ef7] hover:bg-[#3d7de6] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#4f8ef7]/20 hover:-translate-y-0.5"
          >
            View my work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {Object.entries(personal.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-black/30 dark:text-white/30 hover:text-black/70 dark:hover:text-white/70 uppercase tracking-widest transition-colors duration-200"
              aria-label={platform}
            >
              {platform}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[10px] text-black/20 dark:text-white/20 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent rounded-full"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
