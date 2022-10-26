import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import style from "./NavBar.module.css"
import { ChatBubbleBottomCenterIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const NavForm = () => {
    const links = [
        {name:"home",link:"/home"},
        {name:"about",link:"/about"},
    ]

    const link2 = [
      {name:"Membresias",link:"/", icon : <BanknotesIcon/>},
      {name:"Chat",link:"/",icon: <ChatBubbleBottomCenterIcon/>},
    ]

    const params = useLocation()
   //  console.log(params.pathname)

    const name = params.pathname.split("/").map((e,i) => e)
    console.log(name[1])

    return (
      <div className="w-full h-10 flex item-center font-medium justify-between py-4 border-b border-redGray">
            <div className="flex px-8" >
                {
                    links.map((elem,i) =>(
                      <div key={i} className="md:ml-8">
                            <Link to={elem.link} className={`${name[1] === elem.name ? "active: border-b border-orange" : null } text-black hover:text-gray duration-500`}  >{elem.name}</Link>
                        </div>
                    ))
                  }
            </div>
            <div className="flex px-8">    
                {
                  link2.map((elem,i) =>(
                    <div key={i} className="md:ml-8">
                            <Link to={elem.link} className="text-black hover:text-gray duration-500 flex flex-row" >
                              <div >
                              <div className="flex flex-row">
                              {elem.name}
                              {elem.icon}

                              </div>
                              </div>
                              </Link>
                        </div>
                    ))
                  }
            </div>
      </div>
    )
}

export default NavForm
