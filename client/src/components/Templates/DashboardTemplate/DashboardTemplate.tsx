import React, { useState, useEffect } from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import DashGeneral from "../../Organisms/Section/DashGeneral/DashGeneral";
import Details from "../../Organisms/Details/Details";

function DashboardTemplate() {
    const [componente, setComponente] = useState("Dashboard");

    const handleClickItem = (value: any) => {
        setComponente(value);
    };
    console.log(componente);

    // TODO hacer pequenios los charts
    return (
        <div className="flex flex-row select-none">
            <div className="z-10">
                <SideBar
                    handle={true}
                    setName={false}
                    dashboard={true}
                    handleClickItem={handleClickItem}
                />
            </div>
            <div className="w-51">
                <div className="flex flex-row justify-start ml-72 ">
                    <NavBar dashboard={true} />
                </div>
                <div className="content-center mt-40 ml-10">
                    {componente === "Dashboard" ? (
                        <DashGeneral />
                    ) : componente === "usuarios" ? (
                        <Details />
                    ) : componente === "Crear" ? (
                      <CreateForm />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default DashboardTemplate;
