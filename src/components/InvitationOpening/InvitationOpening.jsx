import { motion } from "framer-motion";

export default function InvitationOpening({ onOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-b from-cream to-blush flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1.5
          }
        }}
        className="bg-white p-10 rounded-[30px] shadow-2xl text-center max-w-md"
      >
        <h2 className="font-vibes text-5xl text-maroon mb-4">
          Wedding Invitation
        </h2>

        <p className="font-playfair text-gray-600 mb-8">
          Together with our families,
          we invite you to celebrate our special day.
        </p>

        <button
          onClick={onOpen}
          className="px-8 py-3 rounded-full bg-gold text-white font-semibold hover:scale-105 transition"
        >
          Open Invitation
        </button>
      </motion.div>
    </motion.div>
  );
}