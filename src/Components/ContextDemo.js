import React, { Component } from "react";
import ComponentA from "./ComponentA";
import UserContext from "../Context";
import { ChannelContext } from "../Context";

class ContextDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "sarthak",
      lastName: "vaidya",
      job: "developer",
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ChannelContext.Provider value={"React Training session"}>
            <ComponentA userData={this.state} />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default ContextDemo;
