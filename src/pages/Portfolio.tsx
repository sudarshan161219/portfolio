import { MainGrid } from "@/components/layout/mainGrid/MainGrid";
import { Hero, Contact, Footer, Navbar } from "@/components/export";
import styles from "./index.module.css";

export const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Background Grid */}
      <div className={styles.backgroundGrid} />

      <div className={styles.contentWrapper}>
        {/* --- HEADER --- */}
        <Hero />

        {/* --- MAIN GRID --- */}
        <MainGrid />

        {}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
