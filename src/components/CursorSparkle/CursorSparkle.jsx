import { useEffect } from "react";

export default function CursorSparkle() {

  useEffect(() => {

    const sparkle = e => {

      const div =
        document.createElement("div");

      div.innerHTML = "✨";

      div.style.position = "fixed";
      div.style.left = e.clientX + "px";
      div.style.top = e.clientY + "px";
      div.style.pointerEvents = "none";
      div.style.zIndex = "9999";

      document.body.appendChild(div);

      setTimeout(() => {
        div.remove();
      }, 800);
    };

    window.addEventListener(
      "mousemove",
      sparkle
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        sparkle
      );

  }, []);

  return null;
}