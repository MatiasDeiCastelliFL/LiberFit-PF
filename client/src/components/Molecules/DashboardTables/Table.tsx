import React, { useEffect, useState } from "react";
import { getClients, getEmployees } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";

const headers:any = {
    clients: [
        { key: "name", label: "Cliente" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        { key: "image", label: "Avatar" },
        { key: "active", label: "Membresía" },
        { key: "SubscriptionId", label: "Suscripción" },
    ],
    employees: [
        { key: "name", label: "Empleados" },
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        { key: "image", label: "Avatar" },
        { key: "active", label: "Membresía" },
        { key: "RolId", label: "Rol Empleado" },
    ],
};

function Table({ link }: any) {
    console.log('file: Table.tsx ~ line 25 ~ Table ~ link', link)
    const { data}:any = useAppSelector((state) => state);
    const [sortOrder, setSortOrder] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClients());
        dispatch(getEmployees());
    }, []);

    // console.log(data.clients)
    // console.log(data.employees)

    return (
        <table>
            <thead>
                <tr>
                    {headers[link]?.map((key:any) => {
                        return <td key={key.key}>{key.label}</td>;
                    })}
                </tr>
            </thead>

        <tbody>
      {data[link].map((person:any) => {
        return (
          <tr key={person.id}>
            {headers[link].map((link: any) =>
            <td>{person[link.key]}</td>
            )}
          </tr>
        );
      })}
    </tbody>
        </table>
    );
}

export default Table;