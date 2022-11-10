import React from 'react'
import { useAppSelector } from '../../../../App/Hooks/Hooks'
import CardsContent from '../../../Molecules/CardsContent/CardsContent'
import SearchedCards from '../../../Molecules/SearchedCards/SearchedCards'
import Plan from '../../../Molecules/Plan/Plan'

function SHom() {

  const { filter } = useAppSelector((state) => state)
  
  return (
    <div className=''>
        {
          filter.activeSearch ? <SearchedCards category='all'/>
          : <CardsContent/>
        }
        <div className='mt-20' id='Membresias'>
            <Plan/>
        </div>
    </div>
  )
}

export default SHom