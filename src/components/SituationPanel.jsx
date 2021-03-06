import React, { Component } from "react";
import Situation from "./Situation";

class SituationPanel extends Component {
  render() {
    const { binaryRule, colors } = this.props;
    return (
      <div className="SituationPanel">
        <Situation
          data={[0, 0, 0, 0]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[1, 0, 0, 1]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[2, 0, 1, 0]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[3, 0, 1, 1]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[4, 1, 0, 0]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[5, 1, 0, 1]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[6, 1, 1, 0]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
        <Situation
          data={[7, 1, 1, 1]}
          binaryRule={binaryRule}
          changeRule={this.props.changeRule}
          colors={colors}
        />
      </div>
    );
  }
}

export default SituationPanel;
