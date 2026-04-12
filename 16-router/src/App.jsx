import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Nav from './pages/Nav'
import NotFound from './pages/notFound'
import Men from './pages/men'
import Women from './pages/women'
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Nav/>
      <div className="flex justify-center items-center h-[80vh] text-6xl font-bold ">
        {/* <Link className='p-3' to='/contact'>Contact</Link> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About/:id' element={<About/>}/>

        <Route path='/Contact' element={<Contact/>}>
          <Route path='men'element={<Men/>}/>
          <Route path='women'element={<Women/>}/> 
        </Route>

        <Route path ='*'element={<NotFound/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App