import React from "react";
import Perfil from '../../Atoms/Perfil/Perfil';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie"
import NavBar from "../Navbar/NavBar";

const UserConfig = () => {

    const [user, setUser] = React.useState({
        name: "Lorem Isup",
        email: "LorenIsup@liberFit.com",
        phone: "+54 261 7253495",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        password: "**********",
        plan: "Premium",
    });
    const cookies = new Cookies()
    console.log(cookies)

    const today = new Date();
    //bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600
    return(  
        <div className=" flex flex-col justify-center items-center p-10 gap-5 bg-gradient-to-t from-green-400 via-blue-500 to-purple-600">
            <div className="flex flex-col w-screen fixed bg-zinc-900 top-0 justify-start">
                <NavBar dashboard={false} />
            </div>
            <h1 className=" text-4xl text-white font-black font-sans mt-10">Ajustes</h1>
                <Perfil width="28" />
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-60 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Cuenta</h1>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Nombre</h1>
                        <h2 className="text-lg h-full">{user.name}</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Contraseña</h1>
                        <h2 className="text-lg h-full">{user.password}</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Email</h1>
                        <h2 className="text-lg h-full">{user.email}</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-white"/>
                </div>
            </div>
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-60 gap-2 w-2/4 h-fit">
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
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-60 gap-2 w-2/4 h-fit">
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