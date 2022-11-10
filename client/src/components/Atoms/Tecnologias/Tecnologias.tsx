import React from 'react'
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiPostgresql, SiTypescript , SiSequelize ,  SiTailwindcss, SiExpress} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'

function Tecnologias() {
    const tec = [
        {icon: <FaReact/> , name: 'react'},
        {icon: <FaNodeJs/> , name: "node.js"},
        {icon: <SiPostgresql/> , name: "postgresql" },
        {icon: <SiTypescript/> , name: "typescript"},
        {icon: <SiSequelize/> , name: "sequelize"},
        {icon: <SiTailwindcss/>, name: "tailwindcss"},
        {icon: <SiExpress/> , name: "express"},
        {icon: <IoLogoJavascript/> , name:"javascript"},
    ] 
  return (
    <div>
        <div className="flex justify-center mr-28">
            <h2 className='text-2xl font-semibold text-redClare'>Tecnologias</h2>
        </div>
        <div className="w-max mt-8">
            <div className="flex flex-wrap gap-28 w-tec mr-1">
                {tec.map(t => (
                    <div className="wflex flex-col justify-center content-center">                
                        <span className='text-4xl text-center text-slate-400 '>{t.icon}</span>                  
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tecnologias