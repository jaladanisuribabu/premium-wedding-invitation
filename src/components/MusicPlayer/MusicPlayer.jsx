import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef();

  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (muted) {
      audio.play();
    } else {
      audio.pause();
    }

    setMuted(!muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/wedding-music.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
          p-4
          rounded-full
          bg-white
          shadow-xl
        "
      >
        {muted ? (
          <VolumeX />
        ) : (
          <Volume2 />
        )}
      </button>
    </>
  );
}