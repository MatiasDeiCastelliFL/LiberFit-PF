import React, { useState } from "react";
import Table from "../../../../Molecules/DashboardTables/UsersTable";
import EmployeeForm from "../../../../Molecules/CreateInputsContainer/EmployeeForm/EmployeeForm";
export default function DashClientes({ link }: any) {
    const [addItem, setAddItem] = useState(false);
    const handleAddItem = () => setAddItem(!addItem);

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <Table link={link} />
        </div>
    );
}
