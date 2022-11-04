import React from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import { useParams } from "react-router-dom";
import UserProfile from "../../Organisms/UserProfile/UserProfile";
import DashAdmin from '../../Organisms/DashboardSections/Admin/DashAdmin';

function DashboardTemplate() {
    const { client } = useParams<{ client: string }>();
    const { admin } = useParams<{ admin: string }>();
    
    return (
        <div className="flex flex-row select-none">
            <div className="z-10">
                <SideBar handle={false} setName={false} dashboard={true} />
            </div>
            <div>
                <div className="flex flex-col justify-start ">
                    <NavBar dashboard={true} />
                </div>
                <div className="mt-40 ml-10">
                    { client ? (
                        <UserProfile user={client} />
                    ) : admin ? (
                        <DashAdmin link={ admin} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default DashboardTemplate;
