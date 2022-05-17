import axios from "axios";
import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userList: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);

      this.setState({
        userList: result.data,
      });
    });
  }

  componentDidUpdate(prevState, prevProps) {
    alert("test componentDidUpdate");
  }

  incrementCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
    //this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count - 1 }));
  };

  render() {
    const { count, userList } = this.state;
    console.log("xx", userList);
    const userHtml = userList.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });

    return (
      <>
        <h2>Counter: {count}</h2>
        <br />
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <br />
        <ul>{userHtml}</ul>
      </>
    );
  }
}

export default Counter;
