import React from 'react'
import'./App.css'
import Cards from './components/card'
const App = () => {
  return (
    <div className="parent">
    <Cards user="Aman" age ={21} img="https://images.unsplash.com/photo-1771924310799-930349452c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    <Cards user="Rahul" age ={31} img="https://images.unsplash.com/photo-1749742756654-1468ccc3c0ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
    <Cards user ="Vishwa" age ={16} img="https://images.unsplash.com/photo-1771782191574-caf77b4522fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    <Cards user="Komal" age ={13} img="https://images.unsplash.com/photo-1771924310799-930349452c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default App