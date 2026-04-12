import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav1 = () => {
  const [theme,settheme] =useContext(ThemeDataContext);
  return (
    <div className='flex items-center'>
        <h1>Surya</h1>
    </div>
  )
}

export default Nav1