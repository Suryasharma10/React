import React, { useState } from 'react'
import Nav from './Components/Nav'

const App = () => {
  const [theme, settheme] = useState('Dark')
  return (
    <div>
      <h1>This is {theme}</h1>
      <Nav theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App