import React, { useState } from "react";
import LocacionForm from "../../../../Molecules/CreateInputsContainer/LocacionForm/LocacionForm";
import LocationsTable from "../../../../Molecules/DashboardTables/LocationsTable"

export default function DashLocations({ link }: any) {

    const [location, setLocation] = useState(false);
    const locationForm = () => setLocation(!location);

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <button
                className={`${
                  location ? "hidden" : null
                } bg-redClare px-4 py-2 rounded-xl mx-1`}
                onClick={locationForm}
            >
                Crear Sede
            </button>
            {!location ? (
                <div className="w-100">
                    <div className="w-tables overflow-hidden ">
                        <LocationsTable link={link} />
                    </div>
                </div>
            ) : (
                <LocacionForm
                background={background} 
                />
            )}
        </div>
    );
}