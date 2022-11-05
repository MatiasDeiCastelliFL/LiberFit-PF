import React, { useEffect, useState } from "react";
import { getClients, getEmployees } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";

const headers: any = {
    clients: [
        { key: "name", label: "Cliente" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        // { key: "image", label: "Avatar" },
        { key: "active", label: "Membresía" },
        { key: "SubscriptionId", label: "Suscripción" },
    ],
    employees: [
        { key: "name", label: "Empleados" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        // { key: "image", label: "Avatar" },
        { key: "active", label: "Membresía" },
        { key: "RolId", label: "Rol Empleado" },
    ],
};

function Table({ link }: any) {
    const { data }: any = useAppSelector((state) => state);
    const [sortOrder, setSortOrder] = useState("");
    const dispatch = useAppDispatch();

    console.log("file: Table.tsx ~ line 26 ~ Table ~ data", data);
    useEffect(() => {
        dispatch(getClients());
        dispatch(getEmployees());
    }, []);

    // console.log(data.clients)
    // console.log(data.employees)

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    {headers[link]?.map((key: any) => {
                                        return (
                                            <th
                                                key={key.key}
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                {key.label}
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data[link].map((person: any) => {
                                    return (
                                        <tr
                                            key={person.id}
                                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                        >
                                            {headers[link].map((link: any) => (
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {person[link.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
