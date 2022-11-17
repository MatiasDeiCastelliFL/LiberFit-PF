import React from "react";
import NavForm from "../../Molecules/NavForm/NavForm";

interface Props {
    dashboard: boolean;
}

function NavBar({ dashboard }: Props) {
    return (
        <header className="w-max">
            <div className=" h-16 border-b  border-redGray bg-white ">
                <NavForm dashboard={dashboard} />
            </div>
        </header>
    );
}

export default NavBar;
