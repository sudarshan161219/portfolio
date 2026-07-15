import { useState, useEffect } from "react";
import { useAudioVisualizer } from "../../utils/useAudioVisualizer";
import styles from "./index.module.css";

interface GridItem {
  id: number;
  fontSize: string;
  baseOpacity: number;
  animationDelay: string;
}

export const SanskritGrid = ({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) => {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  // Attach the hook to calculate CSS variables based on the audio
  const containerRef = useAudioVisualizer(audioRef);

  useEffect(() => {
    // Push the state update to the next tick to avoid cascading renders
    // const timer = setTimeout(() => {
    //   const items = Array.from({ length: 40 }).map((_, i) => ({
    //     id: i,
    //     fontSize: `${Math.random() * 2.5 + 1}rem`,
    //     baseOpacity: Math.random() * 0.2 + 0.1,
    //     animationDelay: `${Math.random() * 5}s`,
    //   }));

    //   setGridItems(items);
    // }, 0);

    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      fontSize: `${Math.random() * 2.5 + 1}rem`,
      baseOpacity: Math.random() * 0.1 + 0.1,
      animationDelay: `${Math.random() * 5}s`,
    }));

    setGridItems(items);

    // Cleanup the timer if the component unmounts quickly
    // return () => clearTimeout(timer);
  }, []);

  if (gridItems.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={styles.sanskritGridContainer}
      aria-hidden="true"
    >
      {gridItems.map((item) => (
        <div
          key={item.id}
          className={styles.sanskritGridItem}
          style={
            {
              fontSize: item.fontSize,
              // We pass the base opacity to CSS so it can be combined with the audio math
              "--base-opacity": item.baseOpacity,
              animationDelay: item.animationDelay,
            } as React.CSSProperties
          }
        >
          यजतं विश्वरुपम्
        </div>
      ))}
    </div>
  );
};
