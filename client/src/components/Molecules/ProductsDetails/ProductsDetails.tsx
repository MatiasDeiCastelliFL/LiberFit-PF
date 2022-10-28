import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../assets/gym.json";
import { MapPinIcon } from "@heroicons/react/24/outline";

const ProductsDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();
    
    const [details, setDetails] = useState({
        name: name,
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwda4cc82c/products/NI_AR3794-785/NI_AR3794-785-1.JPG",
        price: 1000,
        sedesIn: [""],
    }); 

    function isInSede(name: any, sedes: any[]){
        let isIn = false;
        let sedesList: string[] = [];
        sedes.forEach((sede) => {
            sede.products.forEach((product: { name: string, image:string, price:number }) => {
                if(product.name === name){
                    isIn = true;
                }
            })
            if (isIn){
                sedesList.push("Sede "+sede.name.split(" ")[sede.name.split(" ").length-1])
            }
        })
        return sedesList
    }
    useEffect(() => {
        setDetails({
            ...details,
            sedesIn: isInSede(details.name, sedes)
        })
    }, []);
    
    return (
        <div>
            <div className="flex flex-row  w-custom_3 mb-3">
                <div className="w-2/5">
                    <img src={details.image} alt={details.name} />
                </div>
                <div className="w-3/5 bg-redClare flex flex-col p-4 justify-between">
                    <h1 className="w-full mb-10 flex justify-center text-6xl text-white font-sans font-black">{details.name}</h1>
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
        </div>
    );
};

export default ProductsDetails;
