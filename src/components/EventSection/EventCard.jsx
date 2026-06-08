import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Clock3 } from "lucide-react";
import { MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -10
      }}
      transition={{
        duration: 0.3
      }}
      className="
      event-card
      relative
      overflow-hidden
      rounded-[35px]
      p-8
      shadow-xl
      "
      style={{
        background: event.color
      }}
    >
      <div className="mb-6 overflow-hidden rounded-2xl bg-white/35">
        <img
          src={event.image}
          alt={event.title}
          className="
          h-64
          w-full
          object-cover
          object-top
          "
        />
      </div>

      <h3
        className="
        text-3xl
        font-playfair
        text-maroon
        mb-6
        "
      >
        {event.title}
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarDays size={18} />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 size={18} />
          <span>{event.time}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={18} />
          <span>{event.venue}</span>
        </div>
      </div>

      <motion.div
        animate={{
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="
        absolute
        bottom-4
        right-4
        text-3xl
        "
      >
        ✨
      </motion.div>
    </motion.div>
  );
}
