import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="col-7 status">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
