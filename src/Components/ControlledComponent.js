import React, { Component } from 'react'

class ControlledComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     userName: '',
     password: ''
  }
}

handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
}

handleUserNameChange = (event) =>{
    this.setState({
        userName: event.target.value
    });
}

handlePasswordChange = (event) =>{
    this.setState({
        password: event.target.value
    });
}

render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" value='login' />
        </form>
      </>
    )
  }
}

export default ControlledComponent