import Row from "./components/Row";

const ROW_COUNT = 5;

const Board = () => (
  <div className="border border-grey-300 round-md">
    {Array.from({ length: ROW_COUNT }).map((_, index) => (
      <Row key={index} />
    ))}
  </div>
);
export default Board;
