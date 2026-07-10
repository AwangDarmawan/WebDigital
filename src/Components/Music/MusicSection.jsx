import { Disc3, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import music from "../../assets/masaindah-nuca.mp3";

export default function FloatingMusicButton() {
 const audioRef = useRef(null);
const [playing, setPlaying] = useState(false);

useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current
      ?.play()
      .then(() => {
        setPlaying(true);
      })
      .catch((err) => console.log(err));

    localStorage.removeItem("playMusic");
  }
}, []);
const toggleMusic = async () => {
  if (!audioRef.current) return;

  try {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <button
        onClick={toggleMusic}
        aria-label="Toggle Music"
        className="
          fixed

          bottom-24
          right-9

          z-50

          w-10
          h-10
  
          rounded-full

            bg-gradient-to-br
 from-[#E5C76B]
        to-[#8B6B2E]

          shadow-[0_10px_30px_rgba(229,199,107,0.45)]

          flex
          items-center
          justify-center

          transition-all
          duration-300

          hover:scale-110
          active:scale-95
        "
      >
        <div
          className={`
            relative

            flex
            items-center
            justify-center

            ${
              playing
                ? "animate-[spin_4s_linear_infinite]"
                : ""
            }
          `}
        >
          <Disc3
            size={34}
            className="text-white"
          />

          <div
            className="
              absolute

              w-5
              h-5

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center
              font-bold
            "
          >
            {playing ? (
              <Pause size={10} className="text-black/55 " />
            ) : (
              <Play
                size={10}
                className="text-black/55  ml-[1px]"
              />
            )}
          </div>
        </div>
      </button>

      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>
    </>
  );
}