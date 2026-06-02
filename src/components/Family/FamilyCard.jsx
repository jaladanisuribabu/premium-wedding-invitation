import { motion } from "framer-motion";

export default function FamilyCard({
  member
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03
      }}
      className="
      family-card
      "
    >
      <img
        src={member.image}
        alt={member.name}
        className="
        family-image
        "
      />

      <div className="p-5">
        <h3
          className="
          text-2xl
          font-playfair
          text-maroon
          "
        >
          {member.name}
        </h3>

        <p
          className="
          text-gold
          mt-2
          "
        >
          {member.relation}
        </p>
      </div>
    </motion.div>
  );
}