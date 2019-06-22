import React, { Component } from "react";
import Controls from "./components/Controls";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: 1
    };
  }

  render() {
    const { rule } = this.state;
    return (
      <div className="App">
        <Controls 
          rule={rule}
          updateRule={this.updateRule}
          submit={this.submit}
        />
        <Board 
          rule={rule}
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
}

export default App;
