import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onsquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onsquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onsquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onsquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onsquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onsquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onsquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onsquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onsquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
