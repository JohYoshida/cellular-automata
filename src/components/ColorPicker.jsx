import React, { Component } from "react";
import Cell from "./Cell";

class ColorPicker extends Component {
  render() {
    return (
      <div className="ColorPicker">
        <Picker id={1} selectColor={this.props.selectColor} />
        <Picker id={2} selectColor={this.props.selectColor} />
      </div>
    );
  }
}

class Picker extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="Picker">
        <label>Color {id}</label>
        <div className="colors">
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "red")}>
            <Cell data={0} color="red"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "pink")}>
            <Cell data={0} color="pink"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "purple")}>
            <Cell data={0} color="purple"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "deepPurple")}>
            <Cell data={0} color="deepPurple"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "indigo")}>
            <Cell data={0} color="indigo"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "blue")}>
            <Cell data={0} color="blue"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "lightBlue")}>
            <Cell data={0} color="lightBlue"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "cyan")}>
            <Cell data={0} color="cyan"/>
          </div>
        </div>
        <div className="colors">
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "teal")}>
            <Cell data={0} color="teal"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "green")}>
            <Cell data={0} color="green"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "lightGreen")}>
            <Cell data={0} color="lightGreen"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "lime")}>
            <Cell data={0} color="lime"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "yellow")}>
            <Cell data={0} color="yellow"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "amber")}>
            <Cell data={0} color="amber"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "orange")}>
            <Cell data={0} color="orange"/>
          </div>
          <div className="cell" onClick={this.props.selectColor.bind(this, id, "deepOrange")}>
            <Cell data={0} color="deepOrange"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
