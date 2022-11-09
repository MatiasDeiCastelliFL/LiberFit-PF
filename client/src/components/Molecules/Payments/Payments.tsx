import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { useMemo } from "react";
import { useTable } from "react-table";


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
    const [tab, setTab] = React.useState("payments");

    const columns:any = useMemo(
      () => [
        {
          Header: "Nombre",
          accessor: "nombre"
        },
        {
          Header: "Descripción",
          accessor: "descripcion"
        },
        {
          Header: "Monto",
          accessor: "monto"
        },
      ],
      []
    );

    const data = useMemo(
      () => [
        {
          nombre: "Audi",
          descripcion: "A3",
          monto: "Sedan, Convertible",
        },
        {
          nombre: "Audi",
          descripcion: "A3",
          monto: "Wagon",
        },
        {
          nombre: "Audi",
          descripcion: "A3 Sportback e-tron",
          monto: "Wagon",
        },
        {
          nombre: "Audi",
          descripcion: "A4",
          monto: "Sedan, Convertible",
        },
        {
          nombre: "Audi",
          descripcion: "A4",
          monto: "Sedan, Wagon",
        },
        {
          nombre: "Audi",
          descripcion: "A4 allroad",
          monto: "Wagon",
        },
        {
          nombre: "Audi",
          descripcion: "A5",
          monto: "Coupe",
        },
        {
          nombre: "Audi",
          descripcion: "A5 Sport",
          monto: "Convertible, Coupe",
        },
        {
          nombre: "Audi",
          descripcion: "Q3",
          monto: "SUV",
        },
        {
          nombre: "Audi",
          descripcion: "R8",
          monto: "Coupe",
        },
        {
          nombre: "Audi",
          descripcion: "TT",
          monto: "Coupe",
        },
        {
          nombre: "Audi",
          descripcion: "Q7",
          monto: "SUV",
        },
        {
          nombre: "Audi",
          descripcion: "Q8",
          monto: "SUV",
        },
        {
          nombre: "Audi",
          descripcion: "Cabriolet",
          monto: "Convertible, Coupe",
        }
      ],
      []
    );

    const table = useTable({ columns, data });

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = table;
    
    return (
      <div className=' ml-sidebar border w-fit flex flex-col'>
        <div className='flex gap-5'>
          <button onClick={e => setTab("payments")}>Pagos</button>
          <button onClick={e => setTab("clients")}>Clientes</button>
        </div>
        <div className='border'>
          {
            (tab === "payments") ? (
              <div className="flex flex-col">
                {/* <table {...getTableProps()} className="table-auto">
                  <thead>
                    {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (

                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row: { getRowProps:any cells: { getCellProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>; render: (arg0: string) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }[]; }) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell: { getCellProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>; render: (arg0: string) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}
              </div>)
            : (tab === "subscription") ? (
              <div className="flex flex-col">
                <h1>Subscripción</h1>
              </div>
              ): null
          }
        </div>
      </div>
  );
}
