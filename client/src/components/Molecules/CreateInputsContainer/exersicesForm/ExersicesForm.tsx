import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { useAppDispatch } from "../../../../App/Hooks/Hooks";
import { postElement } from "../../../../App/Action/Action"
interface Props {
    background: React.CSSProperties
}




const ExersicesForm = ({background}:Props) => {

    const dispatch = useAppDispatch()
    
    const [data , setData] = useState({
        nombre: "",
        musculo:"",
        maquinas: [],
        video: "",
        imagen: "",
        descripcion: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(postElement(data, "Exersice"))
    }

    useEffect(() => {
        
    }, [data])

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
            <img src={logo} alt="logo" className="h-10" />
            <input type="text" name="nombre" value={data.nombre} onChange={handleChange} placeholder='nombre' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <input type="number" name="muculo" value={data.musculo} onChange={handleChange} placeholder='músculo' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <select name="ejercicios" value={data.maquinas} onChange={handleSelect} className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500">
                <option value="1">Ejercicio 1</option>
                <option value="2">Ejercicio 2</option>
                <option value="3">Ejercicio 3</option>
            </select>
            <input type="text" name="video" value={data.video} onChange={handleChange} placeholder='video' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <input type="text" name="imagen" value={data.imagen} onChange={handleChange} placeholder='imagen' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <img src={data.imagen} alt="" className="border h-20 w-40"/>
            <textarea name="descripcion" value={data.descripcion} onChange={handleTextArea} placeholder='descripcion' className="border border-cyan-600 px-2 rounded-xl font-light w-full text-gray-500"/>
            <input type="submit" value='Añadir' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
        </form>
    );
};

export default ExersicesForm;