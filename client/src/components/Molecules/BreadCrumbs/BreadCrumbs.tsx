import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrums = () => {
    let location = useLocation();


    return (
        <div>
            {
                location.pathname.split("/").map((item, index) => {
                    return (
                        <Link to={(item==='home')?'/home':item} key={index}>
                            {item}
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default BreadCrums