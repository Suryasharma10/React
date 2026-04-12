import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navi =useNavigate();
  const btnclicked =() =>{
    navi(-1);
  }
  const btnclicked2 =() =>{
    navi(+1);
  }
  return (
    <div className='flex justify-between bg-cyan-800 p-4'>
        <p className='font-bold text-2xl pl-4'>Surya</p>
        <div className="flex gap-4 pr-4 font-medium text-2xl">
            <p>More</p>
            <p>About</p>
            <p>Game</p>
            <button onClick={btnclicked}>back</button>
            <button onClick={btnclicked2}>Next</button>
        </div>
    </div>
  )
}

export default Nav