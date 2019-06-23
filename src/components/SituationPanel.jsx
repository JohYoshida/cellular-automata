import React, { Component } from "react";
import Cell from "./Cell";

class SituationPanel extends Component {
  render() {
    const { rule, binaryRule } = this.props;
    return (
      <div className="SituationPanel">
        <div className="column">
          <div>Situation</div>
          <div className="situation">0</div>
          <div className="situation">1</div>
          <div className="situation">2</div>
          <div className="situation">3</div>
          <div className="situation">4</div>
          <div className="situation">5</div>
          <div className="situation">6</div>
          <div className="situation">7</div>
        </div>
        <div className="column">
          <div>Left Neighbour</div>
          <Cell data={0} />
          <Cell data={0} />
          <Cell data={0} />
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={1} />
          <Cell data={1} />
          <Cell data={1} />
        </div>
        <div className="column">
          <div>Self</div>
          <Cell data={0} />
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={1} />
          <Cell data={0} />
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={1} />
        </div>
        <div className="column">
          <div>Right Neighbour</div>
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={0} />
          <Cell data={1} />
          <Cell data={0} />
          <Cell data={1} />
        </div>
        <div className="column">
          <div>Rule {rule}</div>
          <Cell className="cell" data={Number(binaryRule[7])} />
          <Cell className="cell" data={Number(binaryRule[6])} />
          <Cell className="cell" data={Number(binaryRule[5])} />
          <Cell className="cell" data={Number(binaryRule[4])} />
          <Cell className="cell" data={Number(binaryRule[3])} />
          <Cell className="cell" data={Number(binaryRule[2])} />
          <Cell className="cell" data={Number(binaryRule[1])} />
          <Cell className="cell" data={Number(binaryRule[0])} />
        </div>
      </div>
    );
  }
}

export default SituationPanel;
