import { motion } from "framer-motion";

import { venueData } from "../../data/venue";

import VenueCard from "./VenueCard";

import "./Venue.css";

export default function Venue() {
  return (
    <section
      id="venue"
      className="venue-section"
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
            Venue
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            text-maroon
            "
          >
            Wedding Location
          </h2>
        </motion.div>

        <div className="venue-wrapper">

          <motion.div
            initial={{
              opacity: 0,
              x: -80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
          >
            <VenueCard
              venue={venueData}
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
          >
            <div className="map-container">

              <iframe
                src={venueData.mapEmbed}
                width="100%"
                height="500"
                allowFullScreen=""
                loading="lazy"
                title="Wedding Venue"
              />

            </div>
          </motion.div>

        </div>

      </div>

      <div className="venue-flower flower1">
        🌸
      </div>

      <div className="venue-flower flower2">
        🌺
      </div>

      <div className="venue-flower flower3">
        🌷
      </div>

    </section>
  );
}