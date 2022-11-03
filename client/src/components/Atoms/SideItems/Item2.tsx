import React from "react";

interface Props {
    title: string;
    active: boolean;
    handleClickItem: any;
}

function Item2({ title, active ,handleClickItem}: Props) {
    return (
        <div className="w-max"
        onClick={()=>handleClickItem(title)}>
            <div className="">
                <div
                    className={`${
                        active
                            ? "bg-red-300 text-white"
                            : "hover:bg-gray-50 text-black"
                    } flex cursor-pointer items-center justify-between   p-4 `}
                >
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default Item2;
