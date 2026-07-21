import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface HeroProps {
  isPlaying: boolean;
  author: string;
  title: string;
}

export const Hero = ({ isPlaying, author, title }: HeroProps) => {
  const [showSongInfo, setShowSongInfo] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isPlaying) {
      // Toggle the text every 3 seconds
      interval = setInterval(() => {
        setShowSongInfo((prev) => !prev);
      }, 2000);
    } else {
      // Reset to default name if music is paused
      setShowSongInfo(false);
    }

    // Cleanup the interval on unmount or when isPlaying changes
    return () => clearInterval(interval);
  }, [isPlaying]);

  const eyebrowText =
    isPlaying && showSongInfo ? `${title} - ${author}` : "buildwithsud";

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <span key={eyebrowText} className={styles.eyebrow}>
          {eyebrowText}
        </span>
        <h1 className={styles.heading}>
          Full-stack developer.
          <br />
          <span className={styles.muted}>Building tools that work.</span>
        </h1>
        <p className={styles.sub}>
          I design and build SaaS products, APIs, and dashboards for freelancers
          and small teams — clean code, minimal friction.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View projects
          </a>
          <a href="mailto:hosalli90956@gmail.com" className={styles.btnGhost}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};
