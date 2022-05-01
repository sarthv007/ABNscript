import React, { Component } from 'react'

export class RenderPropsDemoCounter extends Component {

constructor(props) {
    super(props)
    
    this.state = {
        count: 0
    }
}  
    
incrementCount = () =>{
    this.setState(prevCount=>({ count: prevCount.count+1}));
}
  
render() {
    const { count } = this.state;
    return this.props.render(count, this.incrementCount);
  }
}

export default RenderPropsDemoCounter;