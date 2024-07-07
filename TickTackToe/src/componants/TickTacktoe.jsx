import React, { useState } from "react";
import Board from "./Board";
const TickTacktoe = (props) => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const handleSquareClick = (index) => {};
  return (
    <div>
      <Board square={square} />
    </div>
  );
};

export default TickTacktoe;
