import React, { useState } from 'react'

const Counter = () => {
    const [counter,setcounter] = useState(0);
  const incre = () => {
      setcounter(counter+1)
  }

  const decre = () => {
 
    if (counter>0){
        setcounter(counter-1)
    }
 
}
  return (
    <div>
      state component 
      <br></br>
      <div>Count - {counter}</div>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Counter
