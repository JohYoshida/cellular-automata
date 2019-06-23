import React, { Component } from "react";

class Cell extends Component {
  render() {
    const className = makeClassName(this.props.data);
    return(
      <div className={className}></div>
    )
  }
}

function makeClassName(data) {
  let className = "Cell"
  if (data === 0) {
    className += " down"
  } else if (data === 1) {
    className += " up"
  }


  return className;
}

export default Cell;
