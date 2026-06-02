import { motion } from "framer-motion";

import {
  brideFamily,
  groomFamily
} from "../../data/family";

import FamilyCard from "./FamilyCard";

import "./Family.css";

export default function Family() {
  return (
    <section
      id="family"
      className="family-section"
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
            Our Families
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            text-maroon
            "
          >
            With Love & Blessings
          </h2>
        </motion.div>

        <div className="family-wrapper">

          <div className="family-column">

            <h3 className="family-title">
              {brideFamily.title}
            </h3>

            <div className="family-grid">

              {brideFamily.parents.map(
                member => (
                  <FamilyCard
                    key={member.name}
                    member={member}
                  />
                )
              )}

            </div>

          </div>

          <div className="family-column">

            <h3 className="family-title">
              {groomFamily.title}
            </h3>

            <div className="family-grid">

              {groomFamily.parents.map(
                member => (
                  <FamilyCard
                    key={member.name}
                    member={member}
                  />
                )
              )}

            </div>

          </div>

        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          className="blessing-card"
        >
          <h3 className="font-vibes text-5xl mb-6">
            Blessings
          </h3>

          <p>
            We are blessed to celebrate
            this beautiful occasion with
            the love and support of our
            families and friends. Your
            presence and blessings will
            make our day even more
            memorable.
          </p>
        </motion.div>

      </div>

      <div className="family-flower flower-1">
        🌸
      </div>

      <div className="family-flower flower-2">
        🌺
      </div>

      <div className="family-flower flower-3">
        🌷
      </div>

    </section>
  );
}