import { BRAND_NAME } from "../../../constants/data";
import styles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {BRAND_NAME}. All systems normal.
    </footer>
  );
};
