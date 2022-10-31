import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../assets/gym.json";
import { MapPinIcon } from "@heroicons/react/24/outline";
import isInSede from "../../../App/utils/isInSede";
import { useAppSelector } from "../../../App/Hooks/Hooks";


const ProductsDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();

    const {data}= useAppSelector((state) => state);
    const product = data.products.find((product) => product.name === name);
    
    const [details, setDetails] = useState({
        name: name,
        image: product.image,
        description: "Lorem ipsum dolor sit amet, e,  nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n",
        price: product.price,
        sedesIn: [""],
    }); 
    

    useEffect(() => {
        data.products.forEach((product) => {
            if (product.name === name) {
                setDetails(
                    {
                        ...details,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                    }
                );
                
            }
        });
        setDetails({
            ...details,
            sedesIn: isInSede(details.name, sedes, "products")
        })
    }, []);
    useEffect(() => {
        console.log(details);
    }, [details]);
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
