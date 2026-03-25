import React, { useState } from 'react'
import Button from "./buttons/button.jsx"
import "./App.css"
const Counter = () => {
  const [num, setnum] = useState(0);
  return (
    <div>
      <p>Counter</p>
      <div className="counter">
      <div className="heading">
        <h1>{num}</h1>
      </div>
      <Button num={num} setnum={setnum}/>
      </div>
    </div>
  )
}
export default Counter