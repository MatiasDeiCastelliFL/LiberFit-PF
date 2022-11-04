import React from 'react'
import Ejercicios from './Content/Ejercicios'
import { useLocation } from 'react-router-dom'

function Cliente() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      {location.pathname.includes('ejercicios')? (
        <Ejercicios/>
      ): location.pathname.includes('rutinas')? null : null}
    </div>
  )
}

export default Cliente