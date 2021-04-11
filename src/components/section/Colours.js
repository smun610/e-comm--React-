import React, { Component } from "react";

export class Colours extends Component {
  render() {
    let { colours } = this.props;
    colours = colours.split(",");
    console.log(colours);
    return (
      <div className="colours">
        {colours.map((colour, index) => (
          <button key={index} style={{ background: colour }}></button>
        ))}
      </div>
    );
  }
}

export default Colours;
