import React, { Component } from 'react'

class PureChild extends Component {
  render() {
    console.log("Pure Child component is called");
    return (
      <div>PureChild</div>
    )
  }
}

export default PureChild;