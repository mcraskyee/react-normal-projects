import Board from "./components/Board/Board";
import Robot from "./components/Robot/Robot";

const Stage = () => (
  <div className="relative">
    <div className="absolute">
      <Board />
    </div>
    <Robot />
  </div>
);

export default Stage;
