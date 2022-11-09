import React, { useState } from "react";

interface Props {
    title: string;
    active: boolean;
    icon: any;

}

function Item2({ title, icon, active }: Props) {
    return (
        <div className="w-max"
        >
            <div className="">
                <div
                    className={`${
                        active
                            ? "bg-red-300 text-white"
                            : "hover:bg-gray-50 text-black"
                    } flex cursor-pointer items-center justify-between   p-4 `}
                >
                    <span className="mr-4 text-xl">{icon}</span>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default Item2;
