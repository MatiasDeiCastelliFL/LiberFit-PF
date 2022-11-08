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

    const columns = useMemo(
      () => [
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Modelo",
          accessor: "modelo"
        },
        {
          Header: "Segmento",
          accessor: "segmento"
        },
        {
          Header: "Año",
          accessor: "anio"
        }
      ],
      []
    );

    const data = useMemo(
      () => [
        {
          marca: "Audi",
          modelo: "A3",
          segmento: "Sedan, Convertible",
          anio: "2015"
        },
        {
          marca: "Audi",
          modelo: "A3",
          segmento: "Wagon",
          anio: "2013"
        },
        {
          marca: "Audi",
          modelo: "A3 Sportback e-tron",
          segmento: "Wagon",
          anio: "2016"
        },
        {
          marca: "Audi",
          modelo: "A4",
          segmento: "Sedan, Convertible",
          anio: "2006"
        },
        {
          marca: "Audi",
          modelo: "A4",
          segmento: "Sedan, Wagon",
          anio: "2001"
        },
        {
          marca: "Audi",
          modelo: "A4 allroad",
          segmento: "Wagon",
          anio: "2019"
        },
        {
          marca: "Audi",
          modelo: "A5",
          segmento: "Coupe",
          anio: "2008"
        },
        {
          marca: "Audi",
          modelo: "A5 Sport",
          segmento: "Convertible, Coupe",
          anio: "2017"
        },
        {
          marca: "Audi",
          modelo: "Q3",
          segmento: "SUV",
          anio: "2020"
        },
        {
          marca: "Audi",
          modelo: "R8",
          segmento: "Coupe",
          anio: "2008"
        },
        {
          marca: "Audi",
          modelo: "TT",
          segmento: "Coupe",
          anio: "2019"
        },
        {
          marca: "Audi",
          modelo: "Q7",
          segmento: "SUV",
          anio: "2015"
        },
        {
          marca: "Audi",
          modelo: "Q8",
          segmento: "SUV",
          anio: "2019"
        },
        {
          marca: "Audi",
          modelo: "Cabriolet",
          segmento: "Convertible, Coupe",
          anio: "1996"
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
                <table {...getTableProps()} className="table-auto">
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
                    {rows.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: { getCellProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>; render: (arg0: string) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }[]; }) => {
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
                </table>
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
