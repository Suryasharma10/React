import React from 'react'
import Scroll from './scroll'
import Grid from './grid'
const App = () => {
  function btnclicked(){
    console.log("button clicked");
  }
  function mouseEnter(){
    console.log("Mouse Enter");
  }
  return (
    <div className='flex justify-center flex-col items-center border-3 m-2 p-2 text-center'>
      <h1>hello,XYZ</h1>
      <input className='text-center' 
      onChange={(elem)=>{
        //console.log(elem);
        //console.log(elem.target);
        console.log(elem.target.value);
      }}
      onClick={()=>{
        console.log("Input Clicked")
      }} type='text'placeholder='Enter Name'/>
      <button onMouseEnter={mouseEnter} onClick={btnclicked} className='w-fit h-fit items-center border-1 m-1 text-center'>Change User</button>
      <button onClick={()=>{console.log("Again Clicked");}} className='border-1 m-1'>Re-click</button>
      <div onMouseMove={(elem)=>{
        console.log(elem.clientY);
      }} className="h-20 w-60 bg-amber-950"></div>
      <Scroll/>
      <Grid/>
    </div>
  )
}

export default App