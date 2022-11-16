import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../../../App/Hooks/Hooks"
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import Table from '../../../../Molecules/DashboardTables/UsersTable';
import { openModal } from "../../../../../App/Action/Action";
import Cookies from 'universal-cookie';
import { getPaymentInfo } from "../../../../../App/Action/FilterActions";
import ModalRenovation from '../../../../Molecules/Modal/ModalRenovation';
import WelcomeCard from '../../../../Atoms/WelcomeCard/WelcomeCard';

import { FcCurrencyExchange } from 'react-icons/fc'
import { BsPaypal } from 'react-icons/bs'

const Payments = () => {

  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const { paymentState } = useAppSelector((state) => state.payment);
  const {modal} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getPaymentInfo(cookies.get("id"), cookies.get("token")));
    
  }, []);

  useEffect(() => {
    console.log("paymentState", paymentState);
  }, [paymentState]);

  const data = React.useMemo(
    (): any =>
        paymentState.map((e: any) => {
            
            return {
                col1: e.descripcion,
                col2: `U$D ${e.amount}`,
                col3: e.name, //mes
                col4: e.fechaFinalizacion,
            };
        }),
    [paymentState]
);

  const abrirModal = () => {
    dispatch(openModal(true));
};

  const columns = React.useMemo(
    (): any => [
        {
            Header: "Membresía",
            accessor: "col1", // accessor is the "key" in the data
        },
        {
            Header: "Valor Abonado",
            accessor: "col2",
        },
        {
            Header: "Mes",
            accessor: "col3",
        },
        {
            Header: "Vencimiento de la Membresía",
            accessor: "col4",
        },
  ], []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows,
    prepareRow,
  } = useTable({ columns, data },
    usePagination
);

    return (
      <div className="flex w-full justify-center items-center  flex-col mt-10">

        <WelcomeCard message='Gracias por confiar en nosotros, aquí puedes ver tu historial de compras' />
        {/* <div className={`fix bg-redClare top-12 bottom-10 left-10 right-10 ${!modal? 'hidden': null}`}>
            <p>Hola abriendo modal</p> 
        </div> */}
        <ModalRenovation />
        <button className='w-payment_table px-8  flex justify-end '  onClick={abrirModal}>
            <div className='bg-blue-600 p-2 flex gap-2 rounded-2xl'>
                <BsPaypal className='text-2xl text-white'/>
                <p className='text-white'>Renová tu membresía</p>
            </div>
        </button>
          <div className="overflow-x-hidden w-payment_table sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                      <table {...getTableProps()} className="min-w-full">
                          <thead className=" bg-gray-300">
                              {headerGroups.map((headerGroup) => (
                                  <tr {...headerGroup.getHeaderGroupProps()}>
                                      {headerGroup.headers.map((column) => (
                                          <th
                                              className="text-sm font-bold text-gray-900 px-6 py-4 text-center"
                                              {...column.getHeaderProps()}>
                                              {column.render("Header")}
                                          </th>
                                      ))}
                                  </tr>
                              ))}
                          </thead>
                          <tbody {...getTableBodyProps()}>
                              {rows.map((row: any) => {
                                  prepareRow(row);
                                  return (
                                      <tr
                                          className={`${(row.id%2 ===0)? ' bg-red-300': ' bg-pink-300'} text-white border-b transition duration-300 ease-in-out  hover:bg-gray-100 text-center`}
                                          {...row.getRowProps()}
                                      >
                                          {row.cells.map((cell: any) => {
                                              return (
                                                  <td
                                                      className="py-2"
                                                      {...cell.getCellProps()}
                                                  >
                                                      {cell.render("Cell")}
                                                  </td>
                                              );
                                          })}
                                      </tr>
                                  );
                              })}
                          </tbody>
                      </table>
                      <div>
                        {/* <button onClick={() => previousPage()}>Anterior</button>
                        <button onClick={() => nextPage()}>Siguiente</button> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Payments