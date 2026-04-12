import React from 'react'

const grid = () => {
  return (
    <div>
    <div className="grid grid-cols-4 gap-[2rem]">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
    </div>
    <div className="grid grid-cols-3 mt-[2rem] gap-[2rem]">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
    </div>
    </div>
  )
}

export default grid