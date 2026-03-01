import { motion } from "framer-motion";
import { skills } from "../../data/data";
import { useInView } from "../../hooks/useInView";

function SkillBar({ name, level, index, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-black/70 dark:text-white/70">{name}</span>
        <motion.span
          className="text-xs font-mono text-black/30 dark:text-white/30"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-px bg-black/8 dark:bg-white/8 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4f8ef7] to-[#a78bfa] rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          animate={animate ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(79,142,247,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          className="text-xs uppercase tracking-widest text-[#4f8ef7] mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Expertise
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-extralight text-black dark:text-white mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 + 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-px bg-[#4f8ef7]" />
                <h3 className="text-xs uppercase tracking-widest text-black/30 dark:text-white/30">
                  {group.category}
                </h3>
              </div>

              {group.items.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={si + gi * 4}
                  animate={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
