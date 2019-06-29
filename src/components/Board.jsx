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
    const { x, data, colors } = this.props;
    // Make each row
    for (var i = 0; i < data.length; i++) {
      // Make each cell
      for (var j = 0; j < x; j++) {
        let value = data[i][j];
        row.push(<Cell key={j} data={value} color={colors[value]}/>);
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
