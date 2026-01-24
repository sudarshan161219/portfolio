import { ExternalLink, Mail, Twitter, Instagram, Terminal } from "lucide-react";
import { CONTACT_EMAIL } from "../../../constants/data";
import styles from "./index.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      {/* Decorative "System Message" Container */}
      <div className={styles.terminalBox}>
        <div className="flex items-center justify-center gap-2 text-green-500 mb-4 text-xs font-bold uppercase tracking-widest">
          <Terminal size={14} />
          <span>End_of_Stream</span>
        </div>

        <h2 className={styles.title}>Ready to initiate?</h2>

        <p className={styles.intro}>
          I operate as a{" "}
          <span className={styles.highlight}>
            Remote-First Technical Partner
          </span>
          . I prioritize clean code, strict confidentiality, and asynchronous
          communication.
        </p>
      </div>

      {/* Hiring Platforms */}
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

      {/* Email + Social */}
      <div className={styles.footer}>
        <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
          <Mail size={16} />
          <span>{CONTACT_EMAIL}</span>
        </a>

        <div className={styles.socialRow}>
          <a
            href="https://x.com/buildwithSud"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
            aria-label="Twitter / X"
          >
            <Twitter size={20} />
          </a>

          <a
            href="https://www.instagram.com/build_withsud/?hl=en"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
