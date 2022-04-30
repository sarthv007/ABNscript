import React, { Component } from 'react'
import InputComponent from './InputComponent';

class RefToClassComp extends Component {
constructor(props) {
  super(props)
  this.componentRef = React.createRef();  
  
}  

clickHandler = () =>{
    console.log(this.componentRef)
    this.componentRef.current.focusInput();
}

render() {
    return (
      <div>
          <InputComponent ref={this.componentRef}></InputComponent>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefToClassComp