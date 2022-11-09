import React, { useEffect, useState } from "react";
// line a 2 poner getEmployees
import { getClients, getEmployees} from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";
import Avatar from "react-avatar";
import EditIMG from "./lapiz.gif"

const headers: any = {
    clients: [
        { key: "image", label: "Avatar" },
        { key: "name", label: "Cliente" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        { key: "active", label: "Membresía" },
        { key: "SubscriptionId", label: "Suscripción" },
        { key: "Update", label: "Actualizar" }
    ],
    employees: [
        { key: "image", label: "Avatar" },
        { key: "name", label: "Empleados" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        { key: "active", label: "Membresía" },
        { key: "RolId", label: "Rol Empleado" },
        { key: "Update", label: "Actualizar" }
    ],
};

export default function Table({ link }: any) {
    const { data }: any = useAppSelector((state) => state);
    console.log(data)
    const [sortOrder, setSortOrder] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClients());
        dispatch(getEmployees());
    }, []);

    // console.log(data.clients) - BORRAR
    // console.log(data.employees) - BORRAR

    return (
        <div className="flex flex-col">
            <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    {headers[link]?.map((key: any) => {
                                        return (
                                            <th
                                                key={key.key}
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                            >
                                                {key.label}
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data[link].map((person: any) => (
                                    
                                    <tr key={person.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                                        <td className="flex justify-center m-2">
                                        <Avatar
                                            className="mr-2"
                                            name={person.name}
                                            size="45"
                                            round={true}
                                        /> 
                                        </td>
                                        <td>{person.name}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.email}</td>
                                        <td>{person.active == true ? "Abonada" : "No Abonada"}</td>
                                        <td>{
                                        person.RolId == "1" ? "Propietario" : 
                                        person.RolId == "2" ? "Entrenador" :
                                        person.RolId == "3" ? "Cliente" :
                                        person.RolId == "4" ? "Recepcionista" : null }
                                        </td>
                                        <td><button><img src={EditIMG} alt="imagen edición" className="w-8"/>Editar</button></td>
                                    </tr>
                                    
                                ))}
                            </tbody>    
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    );
}



{/* <tr
    key={person.id}
    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
>
    {headers[link].map((link: any) => (
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {person[link.key]}
        </td>
    ))}
</tr> */}
