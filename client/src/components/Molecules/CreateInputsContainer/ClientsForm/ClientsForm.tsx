import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { postElement } from "../../../../App/Action/Action"
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { useForm, Controller } from "react-hook-form";
import Select  from  "react-select";

interface Props {
    background: React.CSSProperties
}

// interface form {
//     name: string,
//     phone: number,
//     email: string,
//     password: string,
//     active: boolean,
//     image: string,
//     RolId: string,
// }

const ClientsForm = ({background}:Props) => {

    const dispatch = useAppDispatch()
    const { data } =  useAppSelector((state) => state)
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [image, setImage] = useState("")

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setImage(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    function onSubmit (data: any){
        const body = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            password: data.password,
            active: data.active,
            RolId: data.RolId,
        }

        dispatch(postElement(body, "clients"))
    }

    useEffect(() => {
        
    }, [image])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
            <img src={logo} alt="logo" className="h-10" />

            <input  type="text" 
                    {...register('name', {required:true})} 
                    placeholder='nombre' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.name?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
            
            <input  type="number" 
                    {...register('phone', {required:true})} 
                    placeholder='Teléfono' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.phone?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="number" 
                    {...register('email', {required:true})} 
                    placeholder='Email' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.email?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text"
                    {...register('password', {required:true})}
                    placeholder='Contraseña'
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.password?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text"
                    {...register('active', {required:true})}
                    placeholder='active'
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.active?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text" 
                    {...register('RolId', {required:true})}
                    placeholder='Rol' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.RolId?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <img src={image} alt="" className="border h-20 w-40"/>

            <input type="submit" value='Crear Empleado' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
        </form>

        
    );
}


export default ClientsForm;