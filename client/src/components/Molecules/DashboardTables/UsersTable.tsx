import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { getClients, getEmployees, deleteClient, deleteEmployee } from "../../../App/Action/Action";
import { useAppSelector, useAppDispatch } from "../../../App/Hooks/Hooks";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from "sweetalert2"
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';

export default function Table({ link }: any) {
    const allData: any = useAppSelector((state) => state.data);
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [change, setChange] = useState(allData[link].length)
    
    // console.log(allData[link].length);
    
    useEffect(() => {
        dispatch(getClients({token: cookies.get("token")}))
        dispatch(getEmployees({token: cookies.get("token")}))
    }, [change]);

    const handleDeleteEvent = async (e: any, id: any, name: any) => {

        Swal.fire({
            title: `¿Esta seguro que desea eliminar a ${name} ? `,
            text: "No podrás revertir los cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!'
          }).then((result) => {
            // const user = allData.clients.filter((user: any) => user.id === id) TODO para terminar de construir validacion antes de eliminar un cliente que abono una membresia.
            if (result.isConfirmed) {
                link == "clients"
          ?  dispatch(deleteClient({
            id,token: cookies.get("token")
          }))
          :  dispatch(deleteEmployee({
            id,token: cookies.get("token")
          }));
              Swal.fire(
                'Eliminado!',
                'El registro fue eliminado',
                'success'
              ).then(response => {
                navigate("/dashboard/admin")
              })
            //   window.location.href=("/dashboard/admin")
            }
          })
    };

    const handleUpdateEvent = (id: any) => {};

    const data = React.useMemo(
        (): any =>
            allData[link].map((e: any) => {

                const membershipState = 
                // link == "employee" ? <span className="bg-green-600 px-3 py-1 rounded-xl text-white font-medium">Empleado</span> :
                e.active == true 
                ? <span className="bg-green-600 px-3 py-1 rounded-xl text-white font-medium">Abonada</span> 
                : <span className="bg-red-600 px-3 py-1 rounded-xl text-white font-medium">No Abonada</span>

                const suscriptionName =
                e.SubscriptionId == 1 ? "No Suscripto" : 
                e.SubscriptionId == 2 ? "Anual Bonificado" : 
                e.SubscriptionId == 3 ? "Trimestral Bonificado" : 
                e.SubscriptionId == 4 ? "Mensual" : 
                !e.SubscriptionId ? "Empleado Bonificado" : null

                const id = e.id
                const name = e.name

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
                    col7: <div>
                    {/* <button
                        className="bg-redClare px-4 py-2 rounded-xl mx-1"
                        title="Eliminar"
                        onClick={(e) => handleUpdateEvent(e)}
                    >
                        Editar
                    </button> */}
                    <button
                        className="bg-redClare px-4 py-2 rounded-xl mx-1"
                        title="Eliminar"
                        onClick={(e) => handleDeleteEvent(e, id, name)}
                    >
                        Eliminar
                    </button>
                </div>
                }
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
                Header: "Gestión de Registros",
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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        setPageSize,
        state,
        prepareRow,
    } = useTable({ 
        columns, 
        data,
        initialState: { pageIndex : 1 } 
    },
      usePagination,
    //   useSortBy,
  )

    const { pageIndex, pageSize } = state

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
                                                {/* <span>
                                                    {column.isSorted ? (column.isSortedDesc ? <ImSortAlphaAsc/> : ' ') : ''}
                                                </span> */}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map((row: any) => {
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
