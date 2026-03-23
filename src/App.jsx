import React, { useState } from 'react'
import "./App.css"
const Counter = () => {
  const increase = () =>{
    //console.log("increaded");
    setnum(num+1);
  }
  const decrease = () =>{
    setnum(num-1);
  }
  const reset = () =>{
    console.log("decreased");
    setnum(0);
  }
   function increaseBY5(){
    console.log("decreased");
    setnum(num+5);
  }
  function decreaseBY5(){
    console.log("decreased");
    setnum(num-5);
  }

  const [num, setnum] = useState(0);
  return (
    <div>
      <div className="counter">
      <h1>{num}</h1>
      <div className="btn">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseBY5}>Increase By 5</button>
      <button onClick={()=>{
        decreaseBY5();
      }}>Decrease By 5</button>
      <button onClick={reset}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default Counter