import React from 'react'
import './App.css'
import Name1 ,{Card , Image} from './components/card'
import Navbar,{Parent} from './components/navbar'
const App = () => {
  return (
    <>
    <h1>No good to see u</h1>
    <Card />
    <Image/>
    <Navbar/>
    <Name1 />
    <div className='card'>App</div>
    <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente incidunt qui blanditiis quae, labore consequunt animi expedita dolorem. Quia, consequatur earum.</div>
    <Parent/>
    <Parent/>
    </>
  )
}

export default App