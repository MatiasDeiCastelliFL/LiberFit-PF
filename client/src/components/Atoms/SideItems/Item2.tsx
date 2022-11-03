import React, { useState } from "react";

interface Props {
    title: string;
    active: boolean;

}

function Item2({ title, active }: Props) {
    const [isActive, setIsActive] = useState(active);
    
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="w-max"
            onClick={handleClick}
        >
            <div className="">
                <div
                    className={`${
                        isActive
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
