import React, { Component } from "react";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({
      count: this.state.count + 1000,
    });
  }

  render() {
    return <div>Count:{this.state.count}</div>;
  }
}

export default ContactUs;
