import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./index.module.css";

interface NavProps {
  isPlaying: boolean;
  toggleMusic: () => void;
  nextTrack: () => void;
  PreviousTrack: () => void;
}

export const Nav = ({
  isPlaying,
  toggleMusic,
  nextTrack,
  PreviousTrack,
}: NavProps) => {
  return (
    <nav id="projects" className={styles.section}>
      <div className={styles.inner}>
        {/* Hidden audio element referencing your track in the public folder */}

        {/* The clickable container */}
        <div className={styles.container}>
          <button className={styles.ctrlBtn} onClick={PreviousTrack}>
            <ChevronLeft size={20} />
          </button>
          <div
            className={`${styles.imgContainer} ${styles.spin}  ${isPlaying ? styles.playing : ""}`}
            onClick={toggleMusic}
            title={isPlaying ? "Pause music" : "Play music"}
          >
            <img
              // Use a template literal to conditionally inject the spin class
              className={`${styles.img} `}
              src="/profile.webp"
              alt="buildwithsud"
            />
          </div>

          <button className={styles.ctrlBtn} onClick={nextTrack}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
