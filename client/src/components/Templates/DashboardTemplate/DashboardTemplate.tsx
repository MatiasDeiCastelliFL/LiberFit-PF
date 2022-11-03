import React, { useState, useEffect } from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import { useParams } from "react-router-dom";
import UserProfile from "../../Organisms/UserProfile/UserProfile";

function DashboardTemplate() {

  const { client } = useParams<{ client: string }>();
  return (
    <div className="flex flex-row select-none">
      <div className="z-10">
        <SideBar handle={false} setName={false} dashboard={true} />
      </div>
      <div className="flex flex-col justify-start ml-72 ">
        <NavBar dashboard={true} />
      </div>
      <div className="mt-40 ml-10">
        {
          client? (
            <UserProfile user={client}/>
          ):( null )
        }
      </div>
    </div>
  );
}

export default DashboardTemplate;
