import React from 'react'

const Box1 = (pp) => {
  return (
    <div className='box'>
    <div className="tittle">
      <h1>{pp.name} =</h1>
      <p>{pp.age}</p>
    </div>
    <img src={pp.img} alt="image" />
    <button className='btn'>Check</button>
    </div>
  )
}

export default Box1