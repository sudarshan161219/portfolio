import { ExternalLink, Globe } from "lucide-react";
import { projects } from "../../../constants/data";
import styles from "./index.module.css";

export const Projects = () => {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.sectionHeader}>
        <Globe size={16} />
        <h2 className={styles.sectionTitle}>Deployed_Projects</h2>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || undefined}
            target="_blank"
            rel="noreferrer"
            className={`${styles.projectCard} ${
              project.highlight ? styles.featured : ""
            } ${!project.link ? "cursor-default" : ""}`}
          >
            <div className={styles.projectHeader}>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className={styles.projectName}>{project.name}</h3>
                  {/* Optional: Add a visual indicator for highlighted projects */}
                  {project.highlight && (
                    <span className="text-[10px] bg-white text-black px-1 font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                <span className={styles.projectTag}>{project.tag}</span>
              </div>

              {/* The icon now changes color if the card is hovered (handled by CSS) */}
              {project.link && (
                <ExternalLink size={18} className={styles.linkIcon} />
              )}
            </div>

            <p className={styles.projectDesc}>{project.desc}</p>

            <div className={styles.techBadgeContainer}>
              {project.stack.map((t) => (
                <span key={t} className={styles.techBadge}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
