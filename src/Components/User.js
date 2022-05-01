import React from 'react'

function User(props) {
  return (
    <div>{props.render(100,200)}</div>
  )
}

export default User;