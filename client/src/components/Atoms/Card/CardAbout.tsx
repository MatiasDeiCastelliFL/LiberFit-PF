import React from 'react'

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {TfiBag} from 'react-icons/tfi'

interface Props {
    image: string
    name: string
    description: string
    git: string
    linkedin: string
    portfolio: string
}

function CardAbout({image,name,description,git,linkedin,portfolio}:Props) {
    const icon = [
        {i: <AiFillGithub/>, link: git},
        {i:<AiFillLinkedin/>, link: linkedin},
        {i:<TfiBag/>, link: portfolio},
    ]
  return (
   <div className="h-card">
     <div className='group border-4 border-transparent hover:border-redClare hover:border-opacity-10  w-80 rounded-lg transition-all ease-in delay-75'>
        <div className="">
            <img src={image} alt="" className='w-80 rounded-full group-hover:rounded-t-xl transition-all ease-in-out delay-75'/>
        </div>
        <div className="mt-5 h-0 m-0 opacity-0 group-hover:m-5 group-hover:h-36 group-hover:opacity-100 transition-all ease-in delay-75">
            <div className="">
                <h1 className='text-3xl mb-3'>{name}</h1>
            </div>
            <div className="mt-2">
                <p className='text-1xl'>{description}</p>
            </div>
        </div>
        <div className="">
            <div className="flex justify-around items-center h-20 ">
                {icon.map(i => (
                    <a href={i.link} ><span className='text-3xl text-center w-10 h-10 transition-all ease-in flex justify-center items-center hover:bg-dark hover:border hover:border-dark rounded-lg hover:text-white'>{i.i}</span></a>
                ))}
            </div>
        </div>
    </div>
   </div>
  )
}

export default CardAbout