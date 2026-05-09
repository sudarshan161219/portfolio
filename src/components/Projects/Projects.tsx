import { projects } from "../../data/projects";
import styles from "./index.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <span className={styles.eyebrow}>selected work</span>
          <div className={styles.rule} />
        </div>
        <div className={styles.list}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
            >
              <span className={styles.index}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.content}>
                <div className={styles.top}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <span className={styles.tag}>{p.tag}</span>
                </div>
                <p className={styles.desc}>{p.desc}</p>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
