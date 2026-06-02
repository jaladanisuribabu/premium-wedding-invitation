import { useState } from "react";

import { motion } from "framer-motion";

import { galleryImages } from "../../data/gallery";

import GalleryItem from "./GalleryItem";

import "./Gallery.css";

export default function Gallery() {

  const [activeCategory, setActiveCategory] =
    useState("all");

  const categories = [
    "all",
    "prewedding",
    "engagement",
    "family",
    "wedding"
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          img =>
            img.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="gallery-section"
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
          className="text-center mb-16"
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-gold
            mb-4
            "
          >
            Memories
          </p>

          <h2
            className="
            font-vibes
            text-6xl
            text-maroon
            "
          >
            Gallery
          </h2>
        </motion.div>

        <div className="filter-buttons">

          {categories.map(category => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={
                activeCategory === category
                  ? "active-filter"
                  : ""
              }
            >
              {category}
            </button>
          ))}

        </div>

        <div className="masonry-gallery">

          {filteredImages.map(image => (
            <GalleryItem
              key={image.id}
              image={image.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
}