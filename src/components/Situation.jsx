import React, { Component } from "react";
import Cell from "./Cell";

class Situation extends Component {
  render() {
    const { data, binaryRule, colors } = this.props;
    const situation = data[0];
    let value = Number(binaryRule[7 - situation]);
    return (
      <div className="situation">
        <label>{situation}</label>
        <Cell data={data[1]} color={colors[data[1]]}/>
        <Cell data={data[2]} color={colors[data[2]]}/>
        <Cell data={data[3]} color={colors[data[3]]}/>
        <label>=</label>
        <span
          className="situation"
          onClick={this.props.changeRule.bind(
            this,
            7 - situation,
            value
          )}
        >
          <Cell data={value} color={colors[value]} />
        </span>
      </div>
    );
  }
}

export default Situation;
