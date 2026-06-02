import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import InvitationOpening from "../InvitationOpening/InvitationOpening";
import FloatingEffects from "../FloatingEffects/FloatingEffects";

import "./Hero.css";

export default function Hero() {
  const titleRef = useRef();

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5
      }
    );
  }, [opened]);

  return (
    <>
      {!opened && (
        <InvitationOpening
          onOpen={() => setOpened(true)}
        />
      )}

      <section
        className="
          hero-section
          min-h-screen
          flex
          items-center
          justify-center
          relative
          overflow-hidden
        "
      >
        <FloatingEffects />

        <motion.div
          className="text-center z-20"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: opened ? 1 : 0
          }}
          transition={{
            duration: 1.5
          }}
        >
          <p className="font-playfair tracking-[6px] uppercase text-gold mb-4">
            Together With Their Families
          </p>

          <h1
            ref={titleRef}
            className="
              font-vibes
              text-7xl
              md:text-9xl
              text-maroon
            "
          >
            Bride Name
          </h1>

          <div className="text-4xl my-4 text-gold">
            &
          </div>

          <h1
            className="
              font-vibes
              text-7xl
              md:text-9xl
              text-maroon
            "
          >
            Groom Name
          </h1>

          <motion.p
            className="
              max-w-xl
              mx-auto
              mt-8
              text-gray-600
            "
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: opened ? 1 : 0
            }}
            transition={{
              delay: 1
            }}
          >
            We invite you to celebrate
            our wedding ceremony and
            bless us with your presence.
          </motion.p>

          <motion.a
            href="#countdown"
            whileHover={{
              scale: 1.05
            }}
            className="
              inline-block
              mt-10
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-yellow-500
              to-yellow-300
              text-white
              font-semibold
              shadow-xl
            "
          >
            Save The Date
          </motion.a>
        </motion.div>

        <div className="absolute top-10 left-10 text-6xl floating">
          🦋
        </div>

        <div className="absolute bottom-20 right-20 text-6xl floating">
          🌺
        </div>
      </section>
    </>
  );
}