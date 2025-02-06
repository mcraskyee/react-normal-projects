import Commands from "./components/Commands/Commands";
import Stage from "./components/Stage/Stage";

const Game = () => (
  <main className="p-12 flex justify-between">
    <Stage />
    <Commands />
  </main>
);
export default Game;
