import React, {useEffect } from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import { useParams, useLocation } from "react-router-dom";
import Cliente from "./../../Organisms/DashboardSections/Cliente/Cliente";
import DashAdmin from "../../Organisms/DashboardSections/Admin/DashAdmin";
import { getPaymentInfo } from "../../../App/Action/FilterActions";

function DashboardTemplate() {
    const { cliente } = useParams<{ cliente: string }>();
    const isAdmin = useLocation().pathname.includes("/dashboard/admin");
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.data);
    
    useEffect(() => {
        console.log("Entra al use effect");
        dispatch(getPaymentInfo(user.id, user.token));

    }, []);

    return (
        <div className="grid grid-flow-row-dense grid-cols-12">
            <div className="col-span-2 z-50">
                <SideBar handle={false} setName={false} dashboard={true} />
            </div>
            <div className="col-span-12 grid grid-cols-12 ">
                <div className="col-span-12 z-10 fixed">
                    <NavBar dashboard={true} />
                </div>
                <div className="col-start-3 col-span-10 ml-14 mt-10">
                    <div className=" col-start-3 col-span-10">
                        {isAdmin && <DashAdmin />}
                        {cliente ? <Cliente /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardTemplate;
