import React from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import { useParams, useLocation } from "react-router-dom";
import Cliente from "./../../Organisms/DashboardSections/Cliente/Cliente";
import DashAdmin from "../../Organisms/DashboardSections/Admin/DashAdmin";

function DashboardTemplate() {
    const { cliente } = useParams<{ cliente: string }>();
    const isAdmin = useLocation().pathname.includes("/dashboard/admin");

    return (
        <div className="grid grid-flow-row-dense grid-cols-12">
            <div className="col-span-2 z-50">
                <SideBar handle={false} setName={false} dashboard={true} />
            </div>
            <div className="col-span-12 grid grid-cols-12 ">
                <div className="col-span-12 z-10 fixed">
                    <NavBar dashboard={true} />
                </div>
                <div className="col-start-3 col-span-12 ml-14 mt-10">
                    <div className=" col-start-3 col-span-11">
                        {isAdmin && <DashAdmin />}
                        {cliente ? <Cliente /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardTemplate;
