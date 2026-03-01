import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/data";
import { useInView } from "../../hooks/useInView";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={item}
      className="group relative rounded-2xl overflow-hidden border border-black/8 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:border-black/15 dark:hover:border-white/15 transition-all duration-500 cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onClick(project)}
      data-cursor-hover
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      aria-label={`View ${project.title} project details`}
    >
      <div className="relative overflow-hidden h-52 sm:h-60">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-color"
          style={{ background: project.color }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f4f0] dark:from-[#080c14] via-transparent to-transparent" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute top-4 right-4 flex flex-wrap gap-1.5 justify-end"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/70 bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">
              {project.category}
            </p>
            <h3 className="text-lg font-medium text-black dark:text-white">{project.title}</h3>
          </div>
          <motion.div
            className="text-black/20 dark:text-white/20 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors"
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </div>
        <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed">{project.description}</p>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-md" />

      <motion.div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0d1220] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="relative h-56 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d1220] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <span className="text-xs uppercase tracking-widest text-black/30 dark:text-white/30">{project.category}</span>
          <h2 className="text-2xl font-medium text-black dark:text-white mt-1 mb-4">{project.title}</h2>
          <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl bg-[#4f8ef7] hover:bg-[#3d7de6] text-white text-sm font-medium transition-colors"
            >
              Live site ↗
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              className="text-xs uppercase tracking-widest text-[#4f8ef7] mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Selected work
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl font-extralight text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projects
            </motion.h2>
          </div>
          <motion.span
            className="text-sm text-black/20 dark:text-white/20 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {projects.length} case studies
          </motion.span>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
