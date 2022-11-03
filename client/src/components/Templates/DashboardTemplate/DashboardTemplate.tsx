import React from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";

function DashboardTemplate() {
  return (
    <div className="flex flex-row select-none">
      <div className="z-10">
        <SideBar handle={false} setName={false} dashboard={true} />
      </div>
      <div className="flex flex-col justify-start ml-72 ">
        <NavBar dashboard={true} />
      </div>
      <div className="mt-40 ml-10">
        <CreateForm />
      </div>
    </div>
  );
}

export default DashboardTemplate;