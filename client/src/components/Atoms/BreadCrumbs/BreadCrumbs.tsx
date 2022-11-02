import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const BreadCrums = () => {
    let location = useLocation();
    return (
        <div className="flex">
            {location.pathname.split("/").map((item, index) => {
                return (
                    <div className="flex gap-0" key={index}>
                        {item !== "" ? (
                            <ChevronRightIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        ) : null}
                        <Link
                            to={item === "home" ? "/home" : item}
                            key={index}
                            className={
                                location.pathname.split("/")[
                                    location.pathname.split("/").length - 1
                                ] === item
                                    ? `text-redClare`
                                    : `text-black`
                            }
                            style={
                                location.pathname.split("/")[
                                    location.pathname.split("/").length - 1
                                ] === item
                                    ? { pointerEvents: "none" }
                                    : { pointerEvents: "auto" }
                            }
                        >
                            {item.split("%20").join(" ")}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default BreadCrums;
