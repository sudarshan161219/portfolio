import styles from "./index.module.css";
import {
  Services,
  Projects,
  TechStackJson,
  ChangelogTimeline,
} from "@/components/export";

export const MainGrid = () => {
  return (
    <div className={styles.mainGrid}>
      {/* LEFT COLUMN */}
      <div className={styles.leftColumn}>
        {/* Services */}
        <Services />

        {/* Active Projects */}
        <Projects />
      </div>

      {/* RIGHT COLUMN */}
      <div className={styles.rightColumn}>
        {/* Tech Stack JSON */}
        <TechStackJson />

        {/* Changelog Timeline */}
        <ChangelogTimeline />
      </div>
    </div>
  );
};
