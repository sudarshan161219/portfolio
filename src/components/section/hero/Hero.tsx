import { useEffect, useState } from "react";
import { SystemStatus } from "../sysStatus/SystemStatus";
import styles from "./index.module.css";
import { ExternalLink, Terminal } from "lucide-react";

export const Hero = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <SystemStatus />

      {/* The "Command" Line - Shows conversion of idea to product */}
      <div className={styles.cmdLine}>
        <span className={styles.cmdPrompt}>
          <Terminal size={18} />
        </span>
        <span className={styles.cmdText}>run build: </span>
        <span className="text-white">"your_next_big_idea_$"</span>
      </div>

      <h1 className={styles.title}>
        TECHNICAL_PARTNER
        <span
          className={styles.cursor}
          style={{ opacity: cursorVisible ? 1 : 0 }}
        />
      </h1>

      <p className={styles.intro}>
        I translate business requirements into reliable software. Specializing
        in custom <span className={styles.highlight}>dashboards</span>,{" "}
        <span className={styles.highlight}>SaaS MVPs</span>, and{" "}
        <span className={styles.highlight}>automation tools</span> so you can
        focus on growth.
      </p>

      {/* HIRE BUTTONS */}
      <div className={styles.buttonGroup}>
        <a
          href="https://www.upwork.com/freelancers/~01e5b163c79e61259b?mp_source=share"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.upwork}`}
        >
          <ExternalLink size={18} />
          Hire on Upwork
        </a>

        <a
          href="https://www.fiverr.com/sudarshan100m"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.fiverr}`}
        >
          <ExternalLink size={18} />
          Hire on Fiverr
        </a>
      </div>
    </header>
  );
};
