import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { getPaymentInfo,getPaymentAllInfo } from "../../../App/Action/FilterActions"
import Cookies from 'universal-cookie';

const cookies= new Cookies;
const token =cookies.get('token');
const id = cookies.get('id')
const headers: any = {
  clients: [
      { key: "id", label: "Id" },
      { key: "name", label: "Name" },
      { key: "cantidad", label: "Cantidad" },
      { key: "fecha", label: "Fecha" },
      { key: "active", label: "Pagado" },
  ],
};

 
export default function Payments({ clients }: any) {

    const dispatch = useAppDispatch()
    const payment = useAppSelector(state => state.payment)
  
    useEffect(() => {
        dispatch(getPaymentAllInfo(token))
        dispatch(getPaymentInfo(id,token))
    }, [])
    
   console.log(payment);
   
   

    return (
      <p>hola</p>
     
  );
}
