import React from 'react'

function Hero(props) {
  if(props.name === 'Jocker'){
    throw new Error("Not a hero");
  }
  return (
    <div>Hero Name is {props.name}</div>
  )
}

export default Hero