import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../../assets/gym.json";
import { MapPinIcon } from "@heroicons/react/24/outline";
import isInSede from "../../../../App/utils/isInSede";
import { useAppSelector } from "../../../../App/Hooks/Hooks";


const ProductsDetails = () => {
    const { name } = useParams();
    
    const {filter}= useAppSelector((state) => state);
    const locations = filter.dataLocation
    const product = filter.products.find((product) => product.name === name);
    
    const [details, setDetails] = useState({
        name: name,
        image: product.image,
        description: product.description,
        size: product.size,
        stock: (product.stock>0),
        price: product.price,
        brand: product.brand,
        sedesIn: [""],
    }); 
    


    useEffect(() => {
        filter.products.forEach((product) => {
            if (product.name === name) {
                setDetails(
                    {
                        ...details,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        size: product.size,
                        stock: (product.stock>0),
                        brand: product.brand,
                        description: product.description,
                    }
                );
                
            }
        });
        setDetails({
            ...details,
            sedesIn: isInSede(details.name, locations, "products")
        })
    }, []);
    useEffect(() => {
        console.log(details);
    }, [details]);
    return (
        <div>
            <div className="flex flex-row w-full mb-3">
                <div className="w-2/5 flex flex-col justify-center items-center">
                    <img src={details.image} alt={details.name} />
                    <p className={details.stock? 'text-green-600 ': 'text-red-600'}>Stock {details.stock ? "Disponible" : "No disponible"}</p>
                </div>
                <div className="w-3/5 bg-redClare flex flex-col p-4 justify-between">
                    <h1 className="w-full mb-3 flex justify-center text-6xl text-white font-sans font-black">{details.name}</h1>
                    <p className="mb-10 text-lg w-full text-center text-white items-center">Marca: {details.brand}</p>
                    <h1 className="w-full mb-10 flex justify-center text-5xl text-white font-sans font-black">$ {details.price}</h1>
                    <div className="flex flex-col items-center gap-5">
                        <h2 className=" text-2xl font-extrabold text-gray-800">Sedes</h2>
                        <div className="flex gap-1 justify-between flex-wrap">
                            {details.sedesIn.map((sede) => {
                                return (
                                    <div className="flex px-2 justify-between w-custom_4 bg-white  " key={sede}>
                                        <MapPinIcon className="h-10"/>
                                        <p>{sede}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-custom_3 ">
                <div className="w-2/5">
                    <h1 className="text-4xl font-extrabold text-gray-800">Descripcion</h1>
                    <p className="text-xl font-medium text-gray-800">{details.description}</p>
                </div>
                <div className="w-3/5">
                    <h1 className="text-4xl font-extrabold text-gray-800">Talles</h1>
                    <p className="text-xl font-medium text-gray-800">{details.size}</p>
                </div>

            </div>
        </div>
    );
};

export default ProductsDetails;
