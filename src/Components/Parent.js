import React, { Component } from 'react';
import List from './List';
import './Parent.scss'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       formData:{
        name: '',
        lname: '',
        email: '',
       },
       data: [
         {
           id: 1,
           name: 'sarthak',
           lname: 'vaidya',
           email: 'sarthak@gmail.com'
         },
         {
          id: 2,
          name: 'sarthak1',
          lname: 'vaidya1',
          email: 'sarthak1@gmail.com'
        },
        {
          id: 3,
          name: 'sarthak2',
          lname: 'vaidya2',
          email: 'sarthak2@gmail.com'
        }
       ]
    }
  }

  handleChange = (event) =>{
    this.setState({
      formData:{
        ...this.state.formData,
        [event.target.name]:event.target.value
      }
       
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let newObj = {id: this.state.data.length+1, ...this.state.formData}
    let _data = [newObj, ...this.state.data];
    console.log(_data)
    
    this.setState({
      data:_data
    })
  }

  render() {
    const {data, formData} = this.state;
    let form = (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="name" value={formData.name} />
          <input type="text" onChange={this.handleChange} name="lname" value={formData.lname} />
          <input type="text" onChange={this.handleChange} name="email" value={formData.email} />
          <input type="submit" value="Submit" /> 
        </form>
      </div>
    )
    let list = data.length > 0 && data.map((item, index)=>{
      return(
        <List item={item}  key={item.id}/>
      )
    });

    return (
      <div className="Parent">
        <h2>List Rending in react</h2>
            {form}
            {list}        
      </div>
    )
  }
}

export default Parent;