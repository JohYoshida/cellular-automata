import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <div>
          <label>Rule</label>
          <input
            id="rule"
            type="number"
            name="Rule"
            min="0"
            max="255"
            step="1"
            value={this.props.rule}
            onChange={evt => this.props.updateRule(evt)}
            />
        </div>
        <div>
          <label>X</label>
          <input
            type="range"
            name="X"
            min="1"
            max="99"
            step="1"
            value={this.props.x}
            onChange={evt => this.props.updateInputX(evt)}
          />
          <label>{this.props.x}</label>
        </div>
        <div>
          <button type="button" onClick={this.props.evolveState}>
            Evolve State
          </button>
          <button type="button" onClick={this.props.rapidEvolve}>
            Rapid Evolve
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
