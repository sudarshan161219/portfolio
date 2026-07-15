import styles from "./index.module.css";

interface NavProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export const Nav = ({ isPlaying, toggleMusic }: NavProps) => {
  return (
    <nav id="projects" className={styles.section}>
      <div className={styles.inner}>
        {/* Hidden audio element referencing your track in the public folder */}

        {/* The clickable container */}
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
      </div>
    </nav>
  );
};
