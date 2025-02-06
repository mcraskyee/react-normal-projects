import styles from "./Logo.module.css";

const Logo = () => (
  <h1 className={styles.container}>
    Toy<span className={styles.highlight}>Robot</span>
  </h1>
);
export default Logo;
