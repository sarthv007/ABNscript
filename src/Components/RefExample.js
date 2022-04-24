import React, { Component } from 'react';

class RefExample extends Component {
   constructor(props) {
     super(props);
     this.inputRef = React.createRef();
   } 

   componentDidMount(){
       this.inputRef.current.focus();
   }

   handleChange = (event) =>{
    console.log("User Input:",this.inputRef.current.value);
   }

   render() {
    return (
      <div>
          <form>
            <input type="text" onChange={this.handleChange} name="firstName" ref={this.inputRef} />    
          </form>
          
      </div>
    )
  }
}

export default RefExample;