import React from 'react'
import CardsContent from '../../../Molecules/CardsContent/CardsContent'
import Plan from '../../../Molecules/Plan/Plan'

function SHom() {
  
  return (
    <div className='xl2:w-xl2_custom lg:w-xl_custom'>
        <CardsContent/>
        <div className='mt-20' id='Membresias'>
          <Plan/>
        </div>
    </div>
  )
}

export default SHom