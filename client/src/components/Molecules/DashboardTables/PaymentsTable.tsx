import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getPayments } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";
import Avatar from "react-avatar";
import Cookies from "universal-cookie";

export default function LocationsTable({ link }: any) {
    const allData: any = useAppSelector((state) => state.data);
    const dispatch = useAppDispatch();
    const cookies = new Cookies();

    useEffect(() => {
        dispatch(getPayments({token: cookies.get("token")}))
    }, []);

    const handleDeleteEvent = async (id: any) => {
        // dispatch(deleteClient(id))
    };

    const handleUpdateEvent = (id: any) => {};

    const data = React.useMemo(
        (): any =>
            allData[link].map((e: any) => {

                const paymentUser = allData.clients.filter((user: any) => user.id === e.ClientId)
                console.log(paymentUser);
                
                return {
                    col1: e.id,
                    col2: paymentUser[0].name,
                    col3: e.descripcion,
                    col4: `$ ${e.amount}`,
                    col5: e.createdAt.substr(0,10),
                    col6: e.active == true 
                    ? <span className="bg-green-600 px-3 py-1 rounded-xl text-white font-medium">Activa</span> 
                    : <span className="bg-red-600 px-3 py-1 rounded-xl text-white font-medium">Inactiva</span>,
                    col7: e.fechaFinalizacion,
                    col8: <div>
                    <button
                        className="bg-redClare px-4 py-2 rounded-xl mx-1"
                        title="Eliminar"
                        onClick={(e) => handleUpdateEvent(e)}
                    >
                        Editar
                    </button>
                    <button
                        className="bg-redClare px-4 py-2 rounded-xl mx-1"
                        title="Eliminar"
                        onClick={(e) => handleDeleteEvent(e)}
                    >
                        Eliminar
                    </button>
                </div>
                };
            }),
        []
    );

    const columns = React.useMemo(
        (): any => [
            {
                Header: "ID",
                accessor: "col1", // accessor is the "key" in the data
            },
            {
                Header: "Cliente",
                accessor: "col2",
            },
            {
                Header: "Descripción",
                accessor: "col3",
            },
            {
                Header: "Monto",
                accessor: "col4",
            },
            {
                Header: "Fecha de Pago",
                accessor: "col5",
            },
            {
                Header: "Estado de Membresía",
                accessor: "col6",
            },
            {
                Header: "Finalización Membresía",
                accessor: "col7",
            },
            {
                Header: "Gestión de Registros",
                accessor: "col8",
                Cell: () => (
                    <div>
                        <button></button>
                        <button
                            className="bg-redClare px-4 py-2 rounded-xl mx-1"
                            title="Eliminar"
                            onClick={(e) => handleUpdateEvent(e)}
                        >
                            Editar
                        </button>
                        <button
                            className="bg-redClare px-4 py-2 rounded-xl mx-1"
                            title="Eliminar"
                            onClick={(e) => handleDeleteEvent(e)}
                        >
                            Eliminar
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    } = useTable({ 
        columns, 
        data, 
    },
      usePagination,
    //   useSortBy,
  )

    const { pageIndex } = state

    return (
        <div className="flex flex-col">
            <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table {...getTableProps()} className="min-w-full">
                            <thead className="border border-black">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th
                                                className="text-sm font-medium font-bold text-gray-900 px-6 py-4 text-center"
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
                                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center"
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
                        <div className="flex flex-row justify-center mt-3">
                            <button
                                className="bg-redClare px-4 py-2 rounded-xl mx-1"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                Anterior
                            </button>
                            <div className="flex items-center">
                                <span>
                                    <strong>
                                    Page{' '}{pageIndex + 1} of {pageOptions.length}
                                    </strong>
                                </span>
                            </div>
                            <button
                                className="bg-redClare px-4 py-2 rounded-xl mx-1"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}