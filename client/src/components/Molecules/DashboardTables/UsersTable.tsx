import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getClients, getEmployees, getLocations, getTrainings, deleteClient } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";
import Avatar from "react-avatar";

export default function Table({ link }: any) {
    const allData: any = useAppSelector((state) => state.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClients())
        dispatch(getEmployees())
    }, []);

    const handleDeleteUser = (e: any, id :any) => {
        console.log("e -->",e)
        console.log("id -->",id)
        dispatch(deleteClient(id))
    }

    const data = React.useMemo(
        (): any =>
            allData[link].map((e: any) => {

                const membershipState = e.active == true ? "Abonada" : "No abonada"
                const suscriptionName = 
                e.SubscriptionId == 1 ? "No Suscripto" :
                e.SubscriptionId == 2 ? "Anual Bonificado" : 
                e.SubscriptionId == 3 ? "Trimestral Bonificado" : 
                e.SubscriptionId == 4 ? "Mensual" : null
                const id = e.id

                return {
                    col1: (
                        <Avatar
                            className="mr-2"
                            name={e.name}
                            size="45"
                            round={true}
                        />
                    ),

                    col2: e.name,
                    col3: e.phone,
                    col4: e.email,
                    col5: membershipState,
                    col6: suscriptionName,
                    col7: <button className="bg-red-500 p-2" onClick={(e) => handleDeleteUser(e,id) }>Delete</button>,
                };
            }),
        []
    );

    const columns = React.useMemo(
        (): any => [
            {
                Header: "Avatar",
                accessor: "col1", // accessor is the "key" in the data
            },
            {
                Header: "Nombre",
                accessor: "col2",
            },
            {
                Header: "Telefono",
                accessor: "col3",
            },
            {
                Header: "Email",
                accessor: "col4",
            },
            {
                Header: "Membresía",
                accessor: "col5",
            },
            {
                Header: "Suscripción",
                accessor: "col6",
            },
            {
                Header: "Delete",
                accessor: "col7",
            },
        ],
        []
    );

    const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      rows,
    //   page, 
    //   nextPage,
    //   previousPage,
    //   canNextPage,
    //   canPreviousPage,
      prepareRow,
    } = useTable({ columns, data },
      usePagination
  );

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
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
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
                        <div>
                          {/* <button onClick={() => previousPage()}>Anterior</button>
                          <button onClick={() => nextPage()}>Siguiente</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
