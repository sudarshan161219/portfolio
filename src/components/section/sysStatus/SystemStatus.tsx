import styles from "./index.module.css";

export const SystemStatus = () => (
  <div className={styles.systemStatus}>
    <div className={styles.statusDotContainer}>
      <span className={styles.ping}></span>
      <span className={styles.dot}></span>
    </div>
    <span className={styles.statusText}>SYSTEM ONLINE: AVAILABLE FOR HIRE</span>
  </div>
);
