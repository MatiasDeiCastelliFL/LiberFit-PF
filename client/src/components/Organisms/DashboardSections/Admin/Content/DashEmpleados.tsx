import React, { useState } from "react";
import EmployeeForm from '../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm';
import Table from '../../../../Molecules/DashboardTables/Table';

export default function DashEmpleados({ link }: any) {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  
  return <div>
           {!addItem?<div>
             <button onClick={handleAddItem}>Agregar Empleado</button>
                 <Table link={link} />
           </div>:<EmployeeForm background={undefined}/>}
    
  </div>;
}
