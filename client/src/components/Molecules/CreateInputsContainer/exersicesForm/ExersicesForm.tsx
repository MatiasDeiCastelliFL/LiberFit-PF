import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { postElement } from "../../../../App/Action/Action"
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { useForm, Controller } from "react-hook-form";
import Select  from  "react-select";

interface Props {
    background: React.CSSProperties
}

const ExersicesForm = ({background}:Props) => {

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
            repetition: data.repetition,
            series: data.series,
            video: data.video,
            image: image,
            muscle: data.muscle,
        }

        dispatch(postElement(body, "exercises"))
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
                    {...register('repetition', {required:true})} 
                    placeholder='Repeticiones' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.repetition?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="number" 
                    {...register('series', {required:true})} 
                    placeholder='Series' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.series?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text"
                    {...register('muscle', {required:true})}
                    placeholder='Músculo'
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.muscle?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text"
                    {...register('video', {required:true})}
                    placeholder='Video'
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.video?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <input  type="text" 
                    {...register('image', {required:true})}
                    onChange={handleImage} 
                    placeholder='imagen' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.image?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            <img src={image} alt="" className="border h-20 w-40"/>

            <input type="submit" value='Añadir' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
        </form>

        
    );
}


export default ExersicesForm;