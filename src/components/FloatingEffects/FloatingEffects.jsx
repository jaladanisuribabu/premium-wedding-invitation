import { motion } from "framer-motion";

const petals = Array.from({ length: 25 });

export default function FloatingEffects() {
  return (
    <>
      {petals.map((_, index) => (
        <motion.div
          key={index}
          className="fixed top-0 z-10 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}