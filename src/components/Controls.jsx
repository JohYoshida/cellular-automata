import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <label for="rule">Rule</label>
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
        <button type="button" onClick={this.props.submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Controls;
