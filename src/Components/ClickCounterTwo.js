import React, { Component } from 'react'

class ClickCounterTwo extends Component {

// constructor(props) {
//   super(props)

//   this.state = {
//      count: 0
//   }
// }  

// incrementCount = () =>{
//     this.setState(prevCount=>({ count: prevCount.count+1}));
// }

render() {
    const {count, incrementCount} = this.props;
    console.log("props", this.props);
    return (
      <>
        <div>ClickCounterTwo : {count} </div>
        <button onClick={incrementCount}>Increment</button>
      </>
      
    )
  }
}

export default ClickCounterTwo;