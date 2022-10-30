import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";

interface Props {
    background: React.CSSProperties
}




const ProductForm = ({background}:Props) => {


    const [data , setData] = useState({
        nombre: "",
        precio:0,
        sedes: [],
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
        console.log(data)
    }

    useEffect(() => {
        
    }, [data])

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
            <img src={logo} alt="logo" className="h-10" />
            <input type="text" name="nombre" value={data.nombre} onChange={handleChange} placeholder='nombre' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
            <input type="number" name="precio" value={data.precio} onChange={handleChange} placeholder='precio' className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"/>
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