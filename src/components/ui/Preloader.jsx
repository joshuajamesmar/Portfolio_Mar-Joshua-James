import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080c14]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo mark */}
        <motion.div
          className="relative w-12 h-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl border border-[#4f8ef7]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[6px] rounded-lg bg-gradient-to-br from-[#4f8ef7] to-[#a78bfa]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-px bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-[#4f8ef7] to-[#a78bfa] rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
