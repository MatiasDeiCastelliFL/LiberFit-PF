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
      <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                      <table className="min-w-full">
                          <thead className="bg-white border-b">
                              <tr>
                                  {headers[clients]?.map((key: any) => {
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
                        
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  );
}
