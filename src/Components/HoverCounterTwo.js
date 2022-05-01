import React, { Component } from 'react'

class HoverCounterTwo extends Component {

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

    return (
      <>
        <div onMouseEnter={incrementCount}>ClickCounterTwo : {count} </div>
      </>
      
    )
  }
}

export default HoverCounterTwo;