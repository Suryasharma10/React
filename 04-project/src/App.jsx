import React from 'react'
import Box1 from '/src/smallcode/Box1'
import './App.css'
const Obj =[
  {
    name : 'Surya',
    age : 23,
    img : "/src/images/image copy 2.png"
  },
  {
    name : 'Amit',
    age : 21,
    img : "/src/images/image copy.png"
  },
  {
    name : 'Anita',
    age : 22,
    img : "/src/images/image.png"
  },
  {
    name : 'Mina',
    age : 17,
    img : "/src/images/image copy 4.png"
  },
  {
    name : 'Shreyansh',
    age : 19,
    img : "/src/images/image copy 3.png"
  },
  {
    name : 'Liana',
    age : 21,
    img : "/src/images/image copy 5.png"
  }
]
const App = () => {
  return (
    <div className="pp">
      {Obj.map(function(element){
      return ( <Box1 name ={element.name} age ={element.age} img ={element.img}/> )
      })}
    </div>
  )
}

export default App