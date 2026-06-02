import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="
      fixed
      inset-0
      z-[9999]
      bg-cream
      flex
      items-center
      justify-center
      "
      exit={{
        opacity: 0
      }}
    >
      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
          className="text-7xl"
        >
          🌸
        </motion.div>

        <h2
          className="
          font-vibes
          text-5xl
          mt-5
          "
        >
          Loading Invitation...
        </h2>

      </div>
    </motion.div>
  );
}