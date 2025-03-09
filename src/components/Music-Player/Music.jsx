import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack ] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsPlaying(true);
    audioRef.current.play().catch(error => {
      // Handle autoplay restrictions
      console.log("Autoplay prevented:", error);
      setIsPlaying(false);
    });
  }, []);

  const playlist = [
    {
      title: "Welcome, My Friend",
      artist: "Jay Vegad",
      src: "/Song/Final.mp3",
    },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.log("Play failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-[1.5rem] md:bottom-[3.5rem] left-5 sm:left-5 h-12 w-12 border border-white/40 bg-opacity-80 rounded-3xl shadow-lg backdrop-blur-xl bg-black sm:bg-transparent md:sm:bg-transparent lg:sm:bg-transparent text-white flex items-center justify-center p-3 z-50
      md:left-5 md:right-auto
      lg:right-5 lg:left-auto lg:w-72 lg:h-16 lg:justify-start">
      
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Album art and track info - only visible on desktop */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <img
          src="/Song/song-cd.svg"
          alt="Music CD"
          className={`w-12 h-12 ${
            isPlaying ? "animate-spin" : ""
          }`}
          style={{ animationDuration: "3s", animationTimingFunction: "linear" }}
        />

        <div className="mx-3 flex-grow">
          <p className="text-sm font-semibold truncate">
            {playlist[currentTrack].title}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {playlist[currentTrack].artist}
          </p>
        </div>
      </div>

      {/* Play/Pause button - visible on all screen sizes */}
      <button
        onClick={togglePlay}
        className="p-2 flex items-center justify-center rounded-full 
          w-8 h-8
          lg:ml-2"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </div>
  );
};

export default MusicPlayer;