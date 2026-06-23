import { useRef, useState } from "react";
import song from "../../../../assets/audio/song.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>
<button
  onClick={toggleMusic}
  className="
    fixed
    bottom-[150px]
    right-5
    z-[99999]
    flex
    items-center
    gap-2
    rounded-[10px]
    bg-green-600
    px-4
    py-3
    text-white
    shadow-[0_8px_25px_rgba(0,0,0,0.2)]
    transition-all
    duration-300
    active:scale-95
  "
> 

  <span className="text-sm font-medium">
    {playing ? "njettiyo..." : "First ith thod"}
  </span>
</button>
    </>
  );
};

export default MusicPlayer;