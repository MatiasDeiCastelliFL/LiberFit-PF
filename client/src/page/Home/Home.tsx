import React, { useState, useEffect } from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import { useAppSelector, useAppDispatch } from "../../App/Hooks/Hooks";
import { getDataByName, getMainData } from "./../../App/Action/Action";
import { getFilterData } from "./../../App/Action/FilterActions";
import { openFilters } from "./../../App/Action/Action";
import { useLocation, useParams } from "react-router-dom";

function Home() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const params = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("params", params);
        dispatch(getFilterData());
        dispatch(getMainData());
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
