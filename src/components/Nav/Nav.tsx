import styles from "./index.module.css";

export const Nav = () => {
  return (
    <nav id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src="/public/profile.jpeg"
            alt="buildwithsud"
          />
        </div>
      </div>
    </nav>
  );
};
