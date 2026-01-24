import { Terminal } from "lucide-react";
import styles from "./index.module.css"

export const TechStackJson = () => (
  <div className={styles.jsonBox}>
    <div className={styles.sectionHeader}>
      <Terminal size={12} />
      <span>package.json</span>
    </div>
    <div style={{ lineHeight: "1.6", color: "#a3a3a3" }}>
      <span className={styles.textGray}>{"{"}</span>
      <div style={{ paddingLeft: "1rem" }}>
        <span className={styles.textWhite}>"role"</span>:{" "}
        <span className={styles.textGreen}>"Full-Stack Developer"</span>,
      </div>
      <div style={{ paddingLeft: "1rem" }}>
        <span className={styles.textWhite}>"stack"</span>:{" "}
        <span className={styles.textGray}>{"{"}</span>
        <div style={{ paddingLeft: "1rem" }}>
          <span className={styles.textBlue}>"frontend"</span>:{" "}
          <span className={styles.textYellow}>"React, Vite, Tailwind"</span>,
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          <span className={styles.textBlue}>"backend"</span>:{" "}
          <span className={styles.textYellow}>"Node.js, Express, Prisma"</span>,
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          <span className={styles.textBlue}>"language"</span>:{" "}
          <span className={styles.textYellow}>"TypeScript"</span>
        </div>
        <span className={styles.textGray}>{"}"}</span>
      </div>
      <span className={styles.textGray}>{"}"}</span>
    </div>
  </div>
);