import React, { useState } from "react";
import UsersTable from "../../../../Molecules/DashboardTables/UsersTable";
import ClientsForm from "../../../../Molecules/CreateInputsContainer/ClientsForm/ClientsForm";

export default function DashClientes({ link }: any) {
    const [client, setClient] = useState(false);
    const clientForm = () => setClient(!client);
    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };

    return (
        <div>
            <UsersTable link={link} />
        </div>
    );
}
