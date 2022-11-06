import React, { useState } from "react";
import Table from "../../../../Molecules/DashboardTables/Table";
import EmployeeForm from '../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm';
export default function DashClientes({ link }: any) {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  return <div>
                 {!addItem?<div>
                   <button onClick={handleAddItem}>Modificar Cliente</button>
                       <Table link={link} />
                 </div>:<EmployeeForm background={undefined}/>}
  </div>
}