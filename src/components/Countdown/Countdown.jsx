import { motion } from "framer-motion";

export default function CountdownCard({
  value,
  label
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5
      }}
      className="
      bg-white/50
      backdrop-blur-lg
      rounded-3xl
      shadow-xl
      border
      border-white/30
      p-6
      w-32
      text-center
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-maroon
        mb-2
        "
      >
        {value}
      </h2>

      <p
        className="
        uppercase
        tracking-widest
        text-gray-600
        text-sm
        "
      >
        {label}
      </p>
    </motion.div>
  );
  
}
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import useCountdown from "../../hooks/useCountdown";

import { weddingData } from "../../data/weddingData";

import CountdownCard from "./CountdownCard";

import "./Countdown.css";

export default function Countdown() {
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdown(
    weddingData.weddingDate
  );

  const weddingStarted =
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds === 0;

  return (
    <section
      id="countdown"
      className="
      countdown-section
      relative
      overflow-hidden
      "
    >
      {weddingStarted && (
        <Confetti
          recycle={true}
          numberOfPieces={500}
        />
      )}

      <div className="container mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center"
        >
          <p
            className="
            text-gold
            uppercase
            tracking-[6px]
            mb-4
            "
          >
            Save The Date
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-vibes
            text-maroon
            mb-8
            "
          >
            January 17, 2026
          </h2>

          <div
            className="
            save-date-card
            max-w-4xl
            mx-auto
            p-8
            rounded-[40px]
            mb-14
            "
          >
            <h3
              className="
              text-3xl
              font-playfair
              mb-3
              "
            >
              Wedding Ceremony
            </h3>

            <p className="text-gray-600">
              {weddingData.venue}
            </p>
          </div>

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-6
            "
          >
            <CountdownCard
              value={days}
              label="Days"
            />

            <CountdownCard
              value={hours}
              label="Hours"
            />

            <CountdownCard
              value={minutes}
              label="Minutes"
            />

            <CountdownCard
              value={seconds}
              label="Seconds"
            />
          </div>
        </motion.div>
      </div>

      <div className="petal petal-1">
        🌸
      </div>

      <div className="petal petal-2">
        🌺
      </div>

      <div className="petal petal-3">
        🌼
      </div>

      <div className="petal petal-4">
        🌷
      </div>
    </section>
  );
}