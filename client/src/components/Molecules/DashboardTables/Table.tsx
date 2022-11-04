import React, { useEffect, useState } from 'react';
import { getClients, getEmployees } from '../../../App/Action/Action';
import { useAppSelector, useAppDispatch } from '../../../App/Hooks/Hooks';

const clientUsers = [
  { key: "name", label: "Nombre"},
  { key: "phone", label: "Telefono"},
  { key: "email", label: "Email"},
  { key: "image", label: "Avatar"},
  { key: "active", label: "Membresía"},
  { key: "SubscriptionId", label: "Suscripción"}
]

const employeeUsers = [
  { key: "name", label: "Nombre"},
  { key: "phone", label: "Telefono"},
  { key: "email", label: "Email"},
  { key: "image", label: "Avatar"},
  { key: "active", label: "Membresía"},
  { key: "RolId", label: "Rol Empleado"}
]

function Table({ link }: any) {

  const { data } = useAppSelector((state) => state);
  const [sortOrder, setSortOrder] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClients());
    dispatch(getEmployees());
  }, []);

  // console.log(data.clients)
  // console.log(data.employees)

  const headers = []

  for (const key in data.clients[0]) {
    if(true) {
      headers.push(key)
    }
  }
  console.log("esto es headers:" + headers)

  return (
    <table>
      <thead>
        <tr>
          { link === "clientes" ? (
                clientUsers.map((key) => {
                  return <td key={key.key}>{key.label}</td>
                })
            ) : link === "empleados" ? (
                clientUsers.map((key) => {
                  return <td key={key.key}>{key.label}</td>
                })
          ) : null }
        </tr>
      </thead>
    </table>
  )
}

export default Table;
