import React, { Component,PureComponent } from 'react'
import PureChild from './PureChild';

class PureCounter extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       name: 'sarthak'
    }
  }

  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name: 'sarthak'
        });
    },1000);
  }

  render() {
    console.log("Parent Component is called");
    return (
        <>
            <div>PureCounter</div>
            <PureChild />
        </>
      
    )
  }
}

export default PureCounter