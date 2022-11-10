import React, { useState } from "react";
import EmployeeForm from '../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm';
import Table from '../../../../Molecules/DashboardTables/UsersTable';

export default function DashEmpleados({ link }: any) {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  const background={background:"linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)"}
  return <div>
           {!addItem?<div className="w-100">
                <div className="w-tables overflow-hidden ">
                <Table link={link} />
                </div>
           </div>:<EmployeeForm background={background}/>}
    
  </div>;
}
