import React, { useState, useEffect } from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import { useAppSelector, useAppDispatch } from "../../App/Hooks/Hooks";
import { getDataByName, getMainData, getUserInfo, getSuscriptions } from "./../../App/Action/Action";
import { getFilterData } from "./../../App/Action/FilterActions";
import { openFilters } from "./../../App/Action/Action";
import { useLocation, useParams } from "react-router-dom";
import { getPaymentInfo } from "./../../App/Action/FilterActions";
import Cookies from "universal-cookie";
function Home() {
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const location = useLocation();
    const params = useParams();
    const [name, setName] = useState("");
    console.log(cookies.get("id"));
    useEffect(() => {
        console.log("params", params);
        dispatch(getFilterData());
        dispatch(getSuscriptions());
        cookies.get("id") && dispatch(getUserInfo({id:cookies.get("id"), token:cookies.get("token")}));
        dispatch(getMainData());
        dispatch(getPaymentInfo(cookies.get("id"), cookies.get("token")));
    }, [dispatch]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name.trim().length) {
            dispatch(getDataByName(name));
            setName("");
        }

    };

    if (location.pathname === "/home" || params.name) {
        dispatch(openFilters(false));
    }
   
    return <HomeTemplate handle={handleSubmit} name={setName} />;
}

export default Home;
