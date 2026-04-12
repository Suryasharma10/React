import Binding from './TwoWayBinding/binding'
import ObjBinding from './TwoWayBinding/objBinding'
import React from 'react'
const App = () => {
  const box =[
    {
      Id:"Surya123",
      age : 23
    },
    // {
    //   Id:"Sumit113",
    //   age : 27
    // },
    // {
    //   Id:"Nikhil231",
    //   age : 21
    // },
    // {
    //   Id:"Ritika119",
    //   age : 23
    // }
]
  return (
    <div className='flex h-screen w-screen justify-center items-center flex-wrap'>
      {box.map(function (e,idx) {
        return(
          <div className='flex justify-center flex-col items-center'>
          <Binding  Id = {e.Id} age = {e.age}/>
          <ObjBinding/>
          </div>
        )
      })}
    </div>
  )
}

export default App