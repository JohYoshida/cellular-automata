import React, { Component } from "react";
import Controls from "./components/Controls";
import Board from "./components/Board";
import SituationPanel from "./components/SituationPanel";
import ColorPicker from "./components/ColorPicker";

class App extends Component {
  constructor(props) {
    super(props);
    let x  = 25;
    const data = seed(x);
    this.state = {
      rule: 22,
      x,
      data,
      colors: ["", ""]
    };
  }

  render() {
    const { rule, x, data, colors } = this.state;
    return (
      <div className="App">
        <div className="header">
          <Controls
            x={x}
            rule={rule}
            updateRule={this.updateRule}
            evolveState={this.evolveState}
            rapidEvolve={this.rapidEvolve}
            updateInputX={this.updateInputX}
            resetData={this.resetData}
          />
          <SituationPanel
            rule={rule}
            colors={colors}
            binaryRule={makeBinaryRule(rule)}
            changeRule={this.changeRule}
          />
        <ColorPicker selectColor={this.selectColor}/>
        </div>
        <Board
          rule={rule}
          data={data}
          colors={colors}
          x={x}
        />
      </div>
    );
  };

  changeRule = (position, value) => {
    let { rule } = this.state;
    let binaryRule = makeBinaryRule(rule);
    // switch value
    switch (Number(value)) {
      case 0:
        value = "1";
        break;
      case 1:
        value = "0";
        break;
      default:
        console.log("Error in App.js method changeRule");
    }
    // construct and apply new rule
    let arr = binaryRule.split("");
    arr[position] = value;
    let newBinaryRule = arr.join("");
    rule = parseInt(newBinaryRule, 2);
    this.resetData();
    this.setState({ rule });
  }

  evolveState = () => {
    const { data, rule, x } = this.state;
    const state = [];
    // Get binary representation of rule #
    const binaryRule = makeBinaryRule(rule);
    for (var i = 0; i < x; i++) {
      // Check against rule
      let num = checkRule(binaryRule, data[data.length - 1], i);
      state.push(num)
    }
    data.push(state);
    this.setState({ data });
  }

  rapidEvolve = () => {
    const { x } = this.state;
    for (var i = 0; i < x; i++) {
      this.evolveState();
    }
  }

  resetData = x => {
    if (!x) x = this.state.x;
    const data = [];
    const state = [];
    for (var i = 0; i <= x; i++) {
      state.push(Math.floor(Math.random() * 2));
    }
    data.push(state);
    this.setState({ data });
  }

  selectColor = (id, color) => {
    console.log(id, color);
    let { colors } = this.state;
    colors[id - 1] = color;
    this.setState({ colors });
  }

  updateInputX = evt => {
    const x = Number(evt.target.value)
    this.resetData(x);
    this.setState({ x });
  };

  updateRule = evt => {
    this.resetData();
    this.setState({
      rule: Number(evt.target.value),
    });
  };
}

function checkRule(binaryRule, data, i) {
  let num;
  let left = (i === 0) ? data.length - 1 : i - 1;
  let right = (i === data.length - 1) ? 0 : i + 1;
  // // Check left neighbour
  if (data[left] === 0) {
    // Check self
    if (data[i] === 0 ) {
      // Check right neighbour
      if (data[right] === 0) {
        num = binaryRule[7];
      } else if (data[right] === 1) {
        num = binaryRule[6];
      }
    } else if (data[i] === 1) {
      // Check right neighbour
      if (data[right] === 0) {
        num = binaryRule[5];
      } else if (data[right] === 1) {
        num = binaryRule[4];
      }
    }
  } else if (data[left] === 1) {
    // Check self
    if (data[i] === 0 ) {
      // Check right neighbour
      if (data[right] === 0) {
        num = binaryRule[3];
      } else if (data[right] === 1) {
        num = binaryRule[2];
      }
    } else if (data[i] === 1) {
      // Check right neighbour
      if (data[right] === 0) {
        num = binaryRule[1];
      } else if (data[right] === 1) {
        num = binaryRule[0];
      }
    }
  } else {
    console.log("Error in App.js function checkRule()");
  }
  return Number(num);
}

function makeBinaryRule(rule) {
  let binaryRule = rule.toString(2);
  while (binaryRule.length < 8) {
    binaryRule = "0" + binaryRule;
  }
  return binaryRule;
}

function seed(x) {
  const data = [];
  const state = [];
  for (var i = 0; i < x; i++) {
    state.push(Math.floor(Math.random() * 2));
  }
  data.push(state);
  return data;
}

export default App;
