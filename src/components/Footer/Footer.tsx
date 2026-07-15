import { useState } from "react";
import styles from "./index.module.css";

const DISCORD = "build_withsud";

const socials = [
  { label: "github", href: "https://github.com/sudarshan161219" },
  { label: "twitter", href: "https://x.com/buildwithSud" },
  { label: "instagram", href: "https://www.instagram.com/build_withsud/" },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(DISCORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.brand}>buildwithsud</span>
          <span className={styles.copy}>© {year}</span>
        </div>
        <div className={styles.right}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={copyDiscord}
            className={styles.discordBtn}
            title="Click to copy Discord username"
          >
            {copied ? "copied!" : "discord"}
          </button>
          <a href="mailto:hosalli90956@gmail.com" className={styles.link}>
            email
          </a>
        </div>
      </div>
    </footer>
  );
};
