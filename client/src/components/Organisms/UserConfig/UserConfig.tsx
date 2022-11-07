import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import Perfil from '../../Atoms/Perfil/Perfil';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie"
import EditConfig from "../../Atoms/EditConfig/EditConfig";
import PasswordConfig from "../../Atoms/EditConfig/PasswordConfig";
import EditProfileImage from "../../Atoms/EditConfig/EditProfileImage";
import { getUserInfo } from "../../../App/Action/Action";

const UserConfig = () => {
    
    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    const { data } = useAppSelector((state) => state);
    const { user } = data

    useEffect( () => {
        dispatch(getUserInfo(cookies.get("id")))
    }, [])


    useEffect(() => {
    }, [user])

    const today = new Date();
    return(  
        <div className=" flex flex-col justify-center items-center p-10 gap-5 bg-gradient-to-br from-black via-emerald-900 to-green-900">
            <h1 className=" text-4xl text-white font-black font-sans mt-10">Ajustes</h1>
                <EditProfileImage />
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Cuenta</h1>
                <EditConfig type="text" field="name" title="Nombre" info={user} />
                <PasswordConfig  field="password" title="Contraseña" info={user} />
                <EditConfig type="text" field="email" title="Correo" info={user} />
                <EditConfig type="text" field="phone" title="Teléfono" info={user} />
            </div>
            <div className="flex flex-col divide-y text-white rounded-lg items-start p-5 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Membrecía</h1>
                <EditConfig type="text" field="membership" title="Plan Actual" info={user}/>
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
                        <h2 className="text-lg h-full">Web</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Versión</h1>
                        <h2 className="text-lg h-full">1.0</h2>
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