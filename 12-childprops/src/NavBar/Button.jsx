import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme,settheme] =useContext(ThemeDataContext);
    const changetheme =()=>{
        if(theme=='dark'){
            settheme('light');
        }else{
            settheme('dark');
        }   
    }
  return (
    <div className='px-7 py-3 m-2 bg-green-800 text-white font-bold text-3xl rounded-3xl  text-center  'onClick={changetheme}>Change Theme {settheme}</div>
  )
}

export default Button