import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring following for the trailing dot
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const isHovering = useRef(false);

  useEffect(() => {
    // Hide default cursor on desktop
    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        isHovering.current = true;
      }
    };
    const onLeave = () => {
      isHovering.current = false;
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Precise dot — follows mouse exactly */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
      />
      {/* Trailing ring — smooth spring follow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
