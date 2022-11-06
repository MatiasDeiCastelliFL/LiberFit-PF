import React from "react";
import DashHome from "./DashHome";
import DashEmpleados from "./DashEmpleados";
import DashClientes from "./DashClientes";
import { useParams } from "react-router-dom";

function DashAdmin() {
    const { admin } = useParams<{ admin: string }>();
    return (
        <>
            {admin === "home" ? (
                <DashHome />
            ) : admin === "employees" ? (
                    <DashEmpleados link={admin} />
            ) : admin === "clients" ? (
                    <DashClientes link={admin} />
            ) : null}
        </>
    );
}

export default DashAdmin;
