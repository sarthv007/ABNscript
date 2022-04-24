import React from 'react'

function Child(props) {
  console.log("child compoent is called");
  return (
    <div>Child</div>
  )
}

export default React.memo(Child);