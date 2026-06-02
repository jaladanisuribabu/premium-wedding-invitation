import { motion } from "framer-motion";
import { events } from "../../data/events";
import EventCard from "./EventCard";

import "./EventSection.css";

export default function EventSection() {
  return (
    <section
      id="events"
      className="event-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-gold
            mb-4
            "
          >
            Wedding Events
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            md:text-7xl
            text-maroon
            "
          >
            Celebration Schedule
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            mt-6
            text-gray-600
            "
          >
            Join us in every beautiful
            moment leading to our wedding.
          </p>
        </motion.div>

        <div
          className="
          grid
          lg:grid-cols-3
          md:grid-cols-2
          gap-8
          "
        >
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}