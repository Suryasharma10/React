import React, { useState } from 'react'

const binding = (props) => {
  const [tittle, settittle] = useState('')
  const SubmitHandler=(e2)=>{
      e2.preventDefault();
      //alert("Form Submitted");
      console.log("Form Submitted By",tittle);
      settittle("");
  }
  return (
    <form onSubmit={(e2)=>{SubmitHandler(e2)}}>
      <div className='flex h-fit w-fit items-center justify-center p-2 flex-col border-2 rounded m-3'>
        <input type='text' placeholder='Enter Name' value={tittle} className='p-3 m-1 border-1'  onChange={(e2)=>{settittle(e2.target.value);}}></input>
        <button className='bg-violet-800 text-white p-[0.2rem_1.4rem] m-1 text-xl rounded-2xl'>Click</button>
      </div>
    </form>
  )
}

export default binding