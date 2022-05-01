import React, { Component } from 'react'
import HOCCounter from './HOCCounter';

class HoverCounter extends Component {

// constructor(props) {
//   super(props)

//   this.state = {
//      count: 0
//   }
//   this.incrementCount = this.incrementCount.bind(this);
// }  

// incrementCount(){
//     this.setState((prevCount)=>({count: prevCount.count+1}));
// }

render() {
    const {count, incrementCount} = this.props;
    return (
        <>
            <div onMouseEnter={incrementCount}>ClickCounter : {count} </div>
        </>
      
    )
  }
}

export default HOCCounter(HoverCounter);