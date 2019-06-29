import React, { Component } from "react";

class Cell extends Component {
  render() {
    const className = makeClassName(this.props.data, this.props.color);
    return <div className={className} />;
  }
}

function makeClassName(data, color) {
  let className = "Cell";
  if (data === 0) {
    className += " down";
  } else if (data === 1) {
    className += " up";
  }
  switch (color) {
    case "red":
      className += " red";
      break;
    case "pink":
      className += " pink";
      break;
    case "purple":
      className += " purple";
      break;
    case "deepPurple":
      className += " deepPurple";
      break;
    case "indigo":
      className += " indigo";
      break;
    case "blue":
      className += " blue";
      break;
    case "lightBlue":
      className += " lightBlue";
      break;
    case "cyan":
      className += " cyan";
      break;
    case "teal":
      className += " teal";
      break;
    case "green":
      className += " green";
      break;
    case "lightGreen":
      className += " lightGreen";
      break;
    case "lime":
      className += " lime";
      break;
    case "yellow":
      className += " yellow";
      break;
    case "amber":
      className += " amber";
      break;
    case "orange":
      className += " orange";
      break;
    case "deepOrange":
      className += " deepOrange";
      break;
    default:
  }

  return className;
}

export default Cell;
