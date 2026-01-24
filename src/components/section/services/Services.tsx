import { services } from "../../../constants/data";
import styles from "./index.module.css";
import { Code2 } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.sectionHeader}>
        <Code2 size={16} />
        <h2 className={styles.sectionTitle}>Core_Services</h2>
      </div>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            {/* <div className={styles.serviceIcon}>{}</div> */}
            <service.icon className={styles.serviceIcon} />
            <div>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#737373" }}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
