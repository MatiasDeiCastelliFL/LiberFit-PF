import React from 'react'

interface Props{
    Placeholder: any
}

function Search({Placeholder}:Props) {
  return (
    <input className='bg-redClare p-2 rounded-lg outline-none w-input px-6' type="text" placeholder={Placeholder}/>
  )
}

export default Search