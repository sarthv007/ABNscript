import React, { Component } from "react";

export class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.counter = 0;

    this.inputRef = React.createRef(null);
  }

  handleChange = () => {
    console.log(this.inputRef.current);
    this.setState({ inputValue: this.inputRef.current.value });
  };

  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          ref={this.inputRef}
          name="userName"
          value={this.state.inputValue}
        />
        <h2>{this.state.inputValue}</h2>
      </>
    );
  }
}

export default RefComponent;
