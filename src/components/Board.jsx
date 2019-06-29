import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  render() {
    const Board = this.makeBoard();
    return <div className="Board">{Board}</div>;
  }

  makeBoard = () => {
    const Board = [];
    let row = [];
    const { x, data } = this.props;
    // Make each row
    for (var i = 0; i < data.length; i++) {
      // Make each cell
      for (var j = 0; j < x; j++) {
        row.push(<Cell key={j} data={data[i][j]} />);
      }
      // Add row to board
      Board.push(
        <div key={i} className="row">
          {row}
        </div>
      );
      row = [];
    }
    return Board;
  };
}

export default Board;
