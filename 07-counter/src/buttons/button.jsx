import React from 'react'
const button = ({num,setnum}) => {
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
  return (
      <div className="btn">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increaseBY5}>Increase By 5</button>
        <button onClick={()=>{decreaseBY5();}}>Decrease By 5</button>
        <button onClick={reset}>Reset</button>
      </div>
  )
}

export default button