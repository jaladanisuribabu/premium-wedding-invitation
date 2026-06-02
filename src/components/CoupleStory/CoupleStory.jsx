import { motion } from "framer-motion";

import { storyData } from "../../data/story";

import StoryCard from "./StoryCard";

import "./CoupleStory.css";

export default function CoupleStory() {
  return (
    <section
      id="story"
      className="story-section"
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
          className="text-center mb-24"
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-gold
            mb-4
            "
          >
            Our Love Story
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            md:text-7xl
            text-maroon
            "
          >
            Journey To Forever
          </h2>
        </motion.div>

        <div className="timeline-container">

          <div className="timeline-line"></div>

          {storyData.map((item, index) => (
            <div
              key={item.id}
              className={`
              timeline-item
              ${
                index % 2 === 0
                  ? "left"
                  : "right"
              }
              `}
            >
              <div className="timeline-dot">
                ❤️
              </div>

              <StoryCard
                item={item}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>

      <div className="floating-heart heart-1">
        ❤️
      </div>

      <div className="floating-heart heart-2">
        💕
      </div>

      <div className="floating-heart heart-3">
        💖
      </div>
    </section>
  );
}