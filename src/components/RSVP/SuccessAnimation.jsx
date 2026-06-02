import { motion } from "framer-motion";

export default function SuccessAnimation() {
  return (
    <motion.div
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      className="success-box"
    >
      <div className="text-6xl mb-4">
        🎉
      </div>

      <h3 className="text-3xl font-playfair">
        Thank You
      </h3>

      <p>
        Your RSVP has been received.
      </p>
    </motion.div>
  );
}