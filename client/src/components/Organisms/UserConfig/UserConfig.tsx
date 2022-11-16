import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../App/Hooks/Hooks";
import { Toaster } from 'react-hot-toast';
import { PencilSquareIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie"
import EditConfig from "../../Atoms/EditConfig/EditConfig";
import PasswordConfig from "../../Atoms/EditConfig/PasswordConfig";
import EditProfileImage from "../../Atoms/EditConfig/EditProfileImage";
import { getUserInfo } from "../../../App/Action/Action";
import EditMembership from "../../Atoms/EditConfig/EditMembership";
import ModalRenovation from '../../Molecules/Modal/ModalRenovation';

const UserConfig = () => {
    
    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    const navigate = useNavigate()

    const handleReturn = () => {
        // navigate(`/Dashboard/${cookies.get("name")}`)
        window.history.back()
    }

    useEffect( () => {
        dispatch(getUserInfo({id:cookies.get("id"), token:cookies.get("token")}))
    }, [])



    //bg-gradient-to-bl from-gray-700 via-gray-900 to-black
    const today = new Date();
    return(  
        <div className=" flex flex-col justify-center items-center p-10 gap-5 bg-gray-100 ">
            <Toaster
                position="top-right"
            />
            <ModalRenovation />
            <button onClick={handleReturn} className='fixed left-5 top-5 text-neutral-900 flex p-2 gap-2 justify-center items-center bg-redClare rounded-xl'>
                <HomeModernIcon className="h-10 w-10"/>
                <p>Volver a Liberfit</p>
            </button>
            <h1 className=" text-4xl text-neutral-900 font-black font-sans">Ajustes</h1>
                <EditProfileImage />
            <div className="flex flex-col divide-y bg-white text-neutral-900 rounded-lg items-start p-5 border shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Cuenta</h1>
                <EditConfig type="text" field="name" title="Nombre"  />
                <PasswordConfig  title="Contraseña"/>
                <EditConfig type="text" field="email" title="Correo"  />
                <EditConfig type="text" field="phone" title="Teléfono" />
            </div>
            <div className="flex flex-col divide-y text-neutral-900 rounded-lg items-start p-5 border shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
                <h1 className="text-3xl font-black font-sans mb-5">Membrecía</h1>
                <EditMembership type="text" field="membership" title="Plan Actual" />
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h1 className="text-xl font-black font-sans">Facturación</h1>
                        <h2 className="text-lg h-full">Su facturación es realizada a través de Paypal</h2>
                    </div>
                    <PencilSquareIcon className="h-8 w-8 text-neutral-900"/>
                </div>
            </div>
            <div className="flex flex-col divide-y text-neutral-900 rounded-lg items-start p-5 border shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-40 gap-2 w-2/4 h-fit">
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