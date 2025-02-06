import styles from "./App.module.css";
import Header from "./components/Header";
import Game from "./components/Game";

const App = () => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <Header />
      <div>
        <Game />
      </div>
    </div>
  </div>
);

export default App;
