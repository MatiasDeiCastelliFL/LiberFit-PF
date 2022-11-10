import React from 'react'
import { useAppSelector } from '../../../../App/Hooks/Hooks'
import CardsContent from '../../../Molecules/CardsContent/CardsContent'
import SearchedCards from '../../../Molecules/SearchedCards/SearchedCards'
import Plan from '../../../Molecules/Plan/Plan'

function SHom() {

  const { filter } = useAppSelector((state) => state)
  
  return (
    <div className='xl2:w-xl2_custom lg:w-xl_custom'>
        {
          filter.activeSearch ? <SearchedCards />
          : <CardsContent/>
        }
        <div className='mt-20' id='Membresias'>
          <Plan/>
        </div>
    </div>
  )
}

export default SHom