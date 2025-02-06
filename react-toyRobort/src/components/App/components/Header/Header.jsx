import Actions from "./components/Actions";
import Logo from "./components/Logo";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.container}>
    <div className={styles.layout}>
      <Logo />
      <Actions />
    </div>
    <hr className={styles.divider} />
  </header>
);
export default Header;
