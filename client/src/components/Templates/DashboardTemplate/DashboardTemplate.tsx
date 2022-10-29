import React from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";

function DashboardTemplate() {
  return (
    <div className="flex flex-row select-none">
      <div className="z-10">
        <SideBar handle={false} setName={false} dashboard={true} />
      </div>
      <div className="flex flex-col justify-center ml-72 ">
        <NavBar dashboard={true} />
      </div>
    </div>
  );
}

export default DashboardTemplate;
