import { useRef, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { SanskritGrid } from "./components/sanskritGrid/SanskritGrid";
// import BIAWEONGO from "./assets/BIA-WE-ON-GO.mp3";
import BIAWEONGO from "./assets/Headlock.webm";
// import styles from "./index.module.css";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <main>
      <audio ref={audioRef} src={BIAWEONGO} loop />
      <SanskritGrid audioRef={audioRef} />
      <Nav isPlaying={isPlaying} toggleMusic={toggleMusic} />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
