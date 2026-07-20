import { useRef, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { SanskritGrid } from "./components/sanskritGrid/SanskritGrid";
// import styles from "./index.module.css";

const pub = "https://pub-325cad6835d84055b03bbf6cfa6642fa.r2.dev";

const TRACKS = [
  `${pub}/BIA-WE-ON-GO.mp3`,
  `${pub}/Devadevam -देवदेवं.mp3`,
  `${pub}/Headlock.webm`,
  `${pub}/Before I get bored.mp3`,
];

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // 2. Handle the play/pause logic here
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackEnd = () => {
    // Loop back to the first track if we hit the end of the array
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    console.log(currentTrackIndex);

    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 50);
    }
  };

  const PreviousTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? TRACKS.length - 1 : prev - 1));
    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 50);
    }
  };

  return (
    <main>
      <audio
        ref={audioRef}
        src={TRACKS[currentTrackIndex]}
        crossOrigin="anonymous"
        onEnded={handleTrackEnd}
      />
      <SanskritGrid audioRef={audioRef} />
      <Nav
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
        nextTrack={nextTrack}
        PreviousTrack={PreviousTrack}
      />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
