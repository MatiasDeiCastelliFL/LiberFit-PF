import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getLocations } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";
import Avatar from "react-avatar";

export default function LocationsTable({ link }: any) {
    const allData: any = useAppSelector((state) => state.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLocations())
    }, []);

    const handleDeleteEvent = async (id: any) => {
        // dispatch(deleteClient(id))
    };

    const handleUpdateEvent = (id: any) => {};

    const data = React.useMemo(
        (): any =>
            allData[link].map((e: any) => {

                return {
                    col1: e.name,
                    col2: (
                        <Avatar
                            className="mr-2"
                            name={e.name}
                            size="45"
                            round={true}
                        />
                    ),
                    col3: e.phone,
                    col4: e.address,
                    col5: e.timeSlot,
                    col6: e.createdAt.substr(0,10),
                };
            }),
        []
    );

    const columns = React.useMemo(
        (): any => [
            {
                Header: "Nombre",
                accessor: "col1", // accessor is the "key" in the data
            },
            {
                Header: "Avatar",
                accessor: "col2",
            },
            {
                Header: "Teléfono",
                accessor: "col3",
            },
            {
                Header: "Dirección",
                accessor: "col4",
            },
            {
                Header: "Horarios de Atención",
                accessor: "col5",
            },
            {
                Header: "Fecha Apertura Sede",
                accessor: "col6",
            },
            {
                Header: "Gestión de Registros",
                accessor: "col7",
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