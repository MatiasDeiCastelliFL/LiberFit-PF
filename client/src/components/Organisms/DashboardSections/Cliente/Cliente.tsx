import React from 'react'
import Ejercicios from './Content/Ejercicios'
import { useLocation } from 'react-router-dom'
import Rutinas from './Content/Rutinas';

function Cliente() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      {location.pathname.includes('ejercicios')? (
        <Ejercicios/>
      ): location.pathname.includes('rutinas')? (
          <Rutinas/>
      ) : null}
    </div>
  )
}

export default Cliente