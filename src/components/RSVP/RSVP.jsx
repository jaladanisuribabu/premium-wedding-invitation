import { useState } from "react";

import { motion } from "framer-motion";

import RSVPForm from "./RSVPForm";

import SuccessAnimation from "./SuccessAnimation";

import "./RSVP.css";

export default function RSVP() {
  const [submitted, setSubmitted] =
    useState(false);

  return (
    <section
      id="rsvp"
      className="rsvp-section"
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
            RSVP
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            text-maroon
            "
          >
            Kindly Respond
          </h2>
        </motion.div>

        <div className="rsvp-card">

          {!submitted ? (
            <RSVPForm
              onSuccess={() =>
                setSubmitted(true)
              }
            />
          ) : (
            <SuccessAnimation />
          )}

        </div>

      </div>
    </section>
  );
}