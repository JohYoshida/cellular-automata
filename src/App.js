import React, { Component } from "react";
import Controls from "./components/Controls";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const data = seed();
    this.state = {
      rule: 1,
      data,
    };
  }

  render() {
    const { rule, data } = this.state;
    return (
      <div className="App">
        <Controls 
          rule={rule}
          updateRule={this.updateRule}
          evolveState={this.evolveState}
          submit={this.submit}
        />
        <Board 
          rule={rule}
          data={data}
        />
      </div>
    );
  };
  
  updateRule = evt => {
    this.setState({ rule: evt.target.value });
  };
  
  
  submit = () => {
    console.log("submit");
  }
  
  evolveState = () => {
    const { data } = this.state;
    const state = [];
    for (var i = 0; i < 20; i++) {
      // TODO: change
      state.push(Math.floor(Math.random() * 2));
    }
    data.push(state);
    this.setState({ data });
  }
}

function seed() {
  const data = [];
  const state = [];
  for (var i = 0; i < 20; i++) {
    state.push(Math.floor(Math.random() * 2));
  }
  data.push(state);
  return data;
}

function makeBinaryRule(rule) {
  let binaryRule = rule.toString(2);
  while (binaryRule.length < 8) {
    binaryRule = "0" + binaryRule;
  }
  return binaryRule;
}
export default App;
