import React from 'react'
import NavForm from '../../Molecules/NavForm/NavForm'

function NavBar() {
  return (
    <header>
        <div className='fixed w-full h-16 border-b border-redGray bg-white'>
          <NavForm/>
        </div>
    </header>
  )
}

export default NavBar