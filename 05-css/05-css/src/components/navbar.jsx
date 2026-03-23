import React from 'react'
import style from './navbar.module.css'
const navbar = () => {
  return (
    <>
    <div className={style.parent}>
    <h1 className={style.head}>Welcome</h1>
    <div className={style.box}>this is navbar</div>
    <button className={style.btn}>click</button>
    </div>
    </>
  )
}

export default navbar