import { motion } from "framer-motion";
import { personal, experience } from "../../data/data";
import { useInView } from "../../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: bio */}
          <div>
            <motion.p
              className="text-xs uppercase tracking-widest text-[#4f8ef7] mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              About
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl font-extralight text-black dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The person
              <br />
              behind the work
            </motion.h2>

            <motion.p
              className="text-black/50 dark:text-white/50 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personal.bio}
            </motion.p>
            <motion.p
              className="text-black/35 dark:text-white/35 leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              When I’m not in an editor, I’m likely exploring type design, experimenting with generative art, or analyzing why some UIs feel effortless while others don’t.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mt-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "4", label: "Academic Years exp" },
                { value: "8", label: "Projects built" },
                { value: "100%", label: "Passion" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-3 rounded-xl border border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.02]"
                >
                  <div className="text-xl font-light text-black dark:text-white">{stat.value}</div>
                  <div className="text-xs text-black/30 dark:text-white/30">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: experience timeline */}
          <div>
            <motion.h3
              className="text-xs uppercase tracking-widest text-black/30 dark:text-white/30 mb-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Experience
            </motion.h3>

            <div className="relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-black/8 dark:bg-white/8"
                initial={{ scaleY: 0, originY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <div className="space-y-10 pl-8">
                {experience.map((job, i) => (
                  <motion.div
                    key={job.company}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
                  >
                    <div className="absolute -left-8 top-1 w-1.5 h-1.5 rounded-full bg-[#4f8ef7]" />
                    <div className="flex items-baseline gap-3 mb-2">
                      <h4 className="text-black dark:text-white font-medium">{job.role}</h4>
                      <span className="text-black/30 dark:text-white/30 text-sm">@ {job.company}</span>
                    </div>
                    <p className="text-xs text-black/25 dark:text-white/25 mb-3 font-mono">{job.period}</p>
                    <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
