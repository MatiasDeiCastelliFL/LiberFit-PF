import React, { useState } from "react";
import LocationsTable from "../../../../Molecules/DashboardTables/LocationsTable"

export default function DashLocations({ link }: any) {
    // const [addItem, setAddItem] = useState(false);
    // const handleAddItem = () => setAddItem(!addItem);

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <LocationsTable link={link} />
        </div>
    );
}