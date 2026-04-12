import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
  const [theme,settheme] = useContext(ThemeDataContext)
  const changetheme =()=>{
    if(theme=='dark'){
            settheme('light');
        }else{
            settheme('dark');
        }   
  }
  return (
    <div className='flex gap-4 items-center'>
        <div className="">About</div>
        <div className="">More</div>
        <div className="">Contact</div>
        <div className="">Help</div>
        <div className={theme} onClick={changetheme}>{theme}</div>
    </div>
  )
}

export default Nav2