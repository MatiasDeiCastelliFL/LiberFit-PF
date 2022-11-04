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

  return (
    <table>
    <thead>
      <tr>
        {clientUsers.map(row => {
          return (
            <td key={row.key}>
              {row.label}{''}
              
          </td>
        )
      })}
      </tr>
      </thead>
      
      <tbody>
        {data.clients.map((person:any) => {
          return (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.phone}</td>
              <td>{person.email}</td>
              <td>{person.image}</td>
              <td>{person.active}</td>
              <td>{person.SubscriptionId}</td>
            </tr>
          );
        })}
      </tbody>
  
  </table>
  )
}

export default Table;

  
