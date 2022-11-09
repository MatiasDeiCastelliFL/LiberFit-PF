import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { getPaymentInfo,getPaymentAllInfo } from "../../../App/Action/FilterActions"


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
    const id:string="9183db49-6703-4ebc-a964-b004da68ffc4"
    useEffect(() => {
      console.log();
     
        dispatch(getPaymentAllInfo())
    }, [])
    
    console.log(getPay);

    return (
      <div>hola</div>
  );
}
