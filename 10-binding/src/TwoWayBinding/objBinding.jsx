import React, { useState } from 'react'
const objBinding = () => {
    const [obj, setObj] = useState({user:"Surya",age :21,Section : "A1"});
    function OnDoubleClicked(){
        setObj({user:"Aman", age:23, Section:"A2"});
    }
  return (
    <div className='border-[2px] rounded p-2'>
        <h1>Name = {obj.user},<br></br>Age = {obj.age},<br></br> Section = {obj.Section},</h1>
        <button onDoubleClick={OnDoubleClicked} className='bg-blue-900 text-white p-[3px_17px] rounded-full m-2 items-center'>Click</button>
    </div>
  )
}
export default objBinding