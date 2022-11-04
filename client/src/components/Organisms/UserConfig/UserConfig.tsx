import React from "react";
import Perfil from '../../Atoms/Perfil/Perfil';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie"
import NavBar from "../Navbar/NavBar";
import EditConfig from "../../Atoms/EditConfig/EditConfig";

const UserConfig = () => {
    
    const cookies = new Cookies()
    const [user, setUser] = React.useState({
        name: cookies.get("name"),
        email: cookies.get("email"),
        phone: cookies.get("phone"),
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        password: "12345",
        plan: "Premium",
    });

    const today = new Date();
    console.log(cookies)
    //bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600
    return(  
        <div className=" flex flex-col justify-center items-center p-10 gap-5 bg-gradient-to-b from-rose-900 via-rose-700 to-rose-500">
            <div className="flex flex-col w-screen fixed z-50 bg-rose-900 top-0 justify-start">
                <NavBar dashboard={false} />
            </div>
            <h1 className=" text-4xl text-white font-black font-sans mt-10">Ajustes</h1>
                <Perfil width="28" />
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Cuenta</h1>
                <EditConfig type="text" name="name" />
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Contraseña</h1>
                        <input type="password" className="text-white bg-transparent text-lg h-full" value={user.password}/>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Email</h1>
                        <input type="text" className="text-white bg-transparent w-72 text-lg h-full" value={user.email}/>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Teléfono</h1>
                        <h2 className="text-lg h-full">{user.phone}</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
            </div>
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Membrecía</h1>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Plan actual</h1>
                        <h2 className="text-lg h-full">{user.plan}</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Facturación</h1>
                        <h2 className="text-lg h-full">Su facturación es realizada a través de Paypal</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
            </div>
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Información</h1>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Plataforma</h1>
                        <h2 className="text-lg h-full">{user.plan}</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Versión</h1>
                        <h2 className="text-lg h-full">Web</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Hora</h1>
                        <h2 className="text-lg h-full">{`${today.getHours()}:${today.getMinutes()}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserConfig;