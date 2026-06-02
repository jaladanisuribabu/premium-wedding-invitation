import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

export default function GalleryItem({ image }) {
  return (
    <PhotoProvider>
      <PhotoView src={image}>
        <motion.div
          whileHover={{
            scale: 1.04
          }}
          className="gallery-item"
        >
          <img
            src={image}
            alt=""
            className="gallery-image"
          />

          <div className="gallery-overlay">
            View Photo
          </div>
        </motion.div>
      </PhotoView>
    </PhotoProvider>
  );
}