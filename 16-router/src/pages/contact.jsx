import React from 'react'
import { Link , Outlet} from 'react-router-dom'
const contact = () => {
  return (
    <div className='flex gap-40 flex-col h-[80vh] items-center' >
      <div className="gap-7  w-fit">
      <Link className='p-2 text-2xl' to='/contact/women'>Women</Link>
      <Link className='p-2 text-2xl' to='/contact/men'>Men</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default contact