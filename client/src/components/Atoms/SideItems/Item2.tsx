import React, { useState } from "react";

interface Props {
    title: string;
    active: boolean;
    icon: any;

}

function Item2({ title, icon, active }: Props) {
    return (
        <div className="flex justify-start items-start w-full">
                <div
                    className={`${
                        active
                            ? "w-full justify-start bg-red-300 text-white"
                            : "hover:bg-gray-50 text-black"
                    } flex w-full cursor-pointer items-start justify-start p-4 `}
                >
                    <span className="mr-4 text-xl">{icon}</span>
                    <h2>{title}</h2>
                </div>
        </div>
    );
}

export default Item2;
