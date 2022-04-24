import React from 'react'
import Child from './Child';
function Counter() {
const [count, setCount] = React.useState(0);
const [todo, setTodo] = React.useState([
    {
        id:1,
        name: 'sarthak'
    }
]);

return (
    <div>
        <Child todo={todo} />
        Counter value is: {count}<br/>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter;