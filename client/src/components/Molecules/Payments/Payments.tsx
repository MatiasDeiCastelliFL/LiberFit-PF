import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { getPayment } from "../../../App/Action/Action"


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
    const getPay = useAppSelector(state => state.payment)
    const id:string="200cf821-e8f1-4e99-adf2-d25cc223b492"
    useEffect(() => {
        dispatch(getPayment(id))
    }, [])
    
    return (
      <div>hola</div>
  );
}
