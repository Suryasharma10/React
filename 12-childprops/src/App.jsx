import React, { useContext } from 'react'
import Nav1 from './NavBar/Nav1'
import Nav2 from './NavBar/Nav2'
import { ThemeDataContext } from './context/ThemeContext'
import Button from './NavBar/Button'
const App = () => {
  const [theme,settheme]=useContext(ThemeDataContext);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className={theme}>
      <Nav1/>
      <Nav2/>
    </div>
    <Button/>
    </div>
  )
}

export default App