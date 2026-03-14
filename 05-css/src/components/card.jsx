import React from 'react'
import style from './card.module.css'
const Card = () => {
  return (
    <>
    <div className={style.parent}>
        <h1 className={style.heading}>Card</h1>
        <button className={style.btn}>Click</button>
    </div>

    </>
  )
}

export default Card