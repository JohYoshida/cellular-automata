import React, { Component } from "react";
import Cell from "./Cell";

class Situation extends Component {
  render() {
    const { data, binaryRule } = this.props;
    const situation = data[0];
    return (
      <div className="situation">
        <label>{situation}</label>
        <Cell data={data[1]} />
        <Cell data={data[2]} />
        <Cell data={data[3]} />
        <label>=</label>
        <span
          className="situation"
          onClick={this.props.changeRule.bind(this, 7 - situation, binaryRule[7 - situation])}
        >
          <Cell data={Number(binaryRule[7 - situation])} />
        </span>
      </div>
    );
  }
}

export default Situation;
