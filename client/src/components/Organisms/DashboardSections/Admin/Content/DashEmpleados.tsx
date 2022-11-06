import React, { useState } from "react";
import EmployeeForm from '../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm';
import Table from '../../../../Molecules/DashboardTables/Table';

export default function DashEmpleados({ link }: any) {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  const background={background:"linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)"}
  return <div>
           {!addItem?<div>
             <button onClick={handleAddItem}>Agregar Empleado</button>
                 <Table link={link} />
           </div>:<EmployeeForm background={background}/>}
    
  </div>;
}
