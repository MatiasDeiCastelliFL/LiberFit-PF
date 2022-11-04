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
  { key: "SubscriptionId", label: "Suscripción"}
]

interface Props {
  dashboard: boolean;
}

function Table({ dashboard }: Props) {

  const { data } = useAppSelector((state) => state);
  const [sortOrder, setSortOrder] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClients());
    dispatch(getEmployees());
  }, [])

  console.log(data.clients)
  console.log(data.employees)

  const headers = []

  for (const key in data.clients[0]) {
    if(true) {
      headers.push(key)
    }
  }
  console.log("esto es headers:" + headers)

  return (
    <div>
      Renderizando la tabla
    </div>
  )
}

export default Table;

// // {
//   id: '1115cbda-a5c9-4b67-9d0c-2bdd2f0977ab', 
//   name: 'Sirhjan Rojas', 
//   phone: '+23 45321279', 
//   email: 'sirhjanrojas@gmail.com', 
//   password: 'sirjrojas++', …}
