import React from "react";
import Table from '../../../Molecules/DashboardTables/Table';

export default function DashEmpleados({ link }: any) {
  console.log('file: DashEmpleados.tsx ~ line 5 ~ DashEmpleados ~ link', link)
  
  return <div>
    <Table link={link}/>
  </div>;
}
