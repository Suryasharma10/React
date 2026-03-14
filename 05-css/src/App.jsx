import React from 'react'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {
      const arr =[1,2,3,4,5,6];
  return (
    <>
    <div className="gp">\
    {arr.map(function(){
      return(
        <>
        <Navbar/>
        <Card/>
        </>
      )
    })}
    </div>
    </>
  )
}

export default App