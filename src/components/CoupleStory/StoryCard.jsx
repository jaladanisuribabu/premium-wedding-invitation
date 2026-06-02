import { motion } from "framer-motion";

export default function StoryCard({
  item,
  index
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.8
      }}
      className="
      relative
      bg-white
      rounded-[30px]
      overflow-hidden
      shadow-xl
      "
    >
      <img
        src={item.image}
        alt={item.title}
        className="
        w-full
        h-64
        object-cover
        "
      />

      <div className="p-6">
        <div className="text-4xl mb-3">
          {item.icon}
        </div>

        <p className="text-gold font-semibold mb-2">
          {item.date}
        </p>

        <h3
          className="
          text-3xl
          font-playfair
          text-maroon
          mb-4
          "
        >
          {item.title}
        </h3>

        <p className="text-gray-600 leading-7">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}