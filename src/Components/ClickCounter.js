import React, { Component } from 'react'
import HOCCounter from './HOCCounter';

class ClickCounter extends Component {

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
    console.log("HOC Props added",this.props);
    const {count, incrementCount} = this.props;
    return (
        <>
            <div>ClickCounter : {count} </div>
            <button onClick={incrementCount}>Increment</button>  
        </>
      
    )
  }
}

export default HOCCounter(ClickCounter);