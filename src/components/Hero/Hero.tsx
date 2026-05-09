import styles from "./index.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.eyebrow}>buildwithsud</span>
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
          <a href="mailto:invii@invii.online" className={styles.btnGhost}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};
