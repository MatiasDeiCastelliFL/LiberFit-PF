import React, { useState } from "react";
import EmployeeForm from "../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm";
import UsersTable from "../../../../Molecules/DashboardTables/UsersTable";

export default function DashEmpleados({ link }: any) {

    const [employee, setEmployee] = useState(false);
    const employeeForm = () => setEmployee(!employee);
    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };

    return (
        <div>
            <button
                className={`${
                  employee ? "hidden" : null
                } bg-redClare px-4 py-2 rounded-xl mx-1`}
                onClick={employeeForm}
            >
                Crear Empleado
            </button>
            {!employee ? (
                <div className="w-100">
                    <div className="w-tables overflow-hidden ">
                        <UsersTable link={link} />
                    </div>
                </div>
            ) : (
                <EmployeeForm 
                background={background} 
                />
            )}
            
        </div>
    );
}
