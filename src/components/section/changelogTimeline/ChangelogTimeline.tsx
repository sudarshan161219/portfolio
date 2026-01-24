import { History } from "lucide-react";
import { history } from "../../../constants/data";
import styles from "./index.module.css";

export const ChangelogTimeline = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <History size={16} />
        <h2 className={styles.sectionTitle}>Changelog</h2>
      </div>
      <div className={styles.timeline}>
        {history.map((item, i) => (
          <div key={i} className={styles.timelineItem}>
            <span className={styles.timelineDot} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.25rem",
              }}
            >
              <span className={styles.versionBadge}>{item.version}</span>
              <span className={styles.timelineDate}>{item.date}</span>
            </div>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "#e5e5e5",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#737373",
                marginTop: "0.25rem",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
