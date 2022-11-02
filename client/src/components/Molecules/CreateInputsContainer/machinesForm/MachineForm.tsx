import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { postElement } from "../../../../App/Action/Action"
import { useAppDispatch } from "../../../../App/Hooks/Hooks";

interface Props {
    background: React.CSSProperties
}




const ProductForm = ({background}:Props) => {

    const dispatch = useAppDispatch()

    const [data , setData] = useState({
        nombre: "",
        musculo:"",
        ejercicios: [],
        sedes: [],
        imagen: "",
        descripcion: "",
    })

    const [error, setError] = useState({
        nombre: "",
        musculo:"",
        ejercicios: [],
        sedes: [],
        imagen: "",
        descripcion: "",
    })
    

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        e.target.value === "" ? setError({...error, [e.target.name]: "Este campo es obligatorio"}) : setError({...error, [e.target.name]: ""})
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
        dispatch(postElement(data, "machine"))
    }

    useEffect(() => {
        
    }, [data])

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
            <img src={logo} alt="logo" className="h-10" />
            <input type="text" name="nombre" value={data.nombre} onChange={handleChange} placeholder='nombre' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            {error.nombre && <p className="text-red-500">{error.nombre}</p>}
            <input type="text" name="musculo" value={data.musculo} onChange={handleChange} placeholder='músculo' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            {error.musculo && <p className="text-red-500">{error.musculo}</p>}
            <select name="ejercicios" value={data.ejercicios} onChange={handleSelect} className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500">
                <option value="1">Ejercicio 1</option>
                <option value="2">Ejercicio 2</option>
                <option value="3">Ejercicio 3</option>
            </select>
            <select name="sedes" value={data.sedes} onChange={handleSelect} className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500">
                <option value="sede 1">sede 1</option>
                <option value="sede 2">sede 2</option>
                <option value="sede 3">sede 3</option>
            </select>
            <input type="text" name="imagen" value={data.imagen} onChange={handleChange} placeholder='imagen' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <img src={data.imagen} alt="" className="border h-20 w-40"/>
            <textarea name="descripcion" value={data.descripcion} onChange={handleTextArea} placeholder='descripcion' className="border border-cyan-600 px-2 rounded-xl font-light w-full text-gray-500"/>
            <input type="submit" value='Añadir' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
        </form>
    );
};

export default ProductForm;