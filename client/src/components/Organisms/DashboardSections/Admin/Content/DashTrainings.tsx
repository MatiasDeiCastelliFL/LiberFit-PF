import React, { useState } from "react";
import TrainingsTable from "../../../../Molecules/DashboardTables/TrainingsTable";

export default function DashClientes({ link }: any ) {

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <TrainingsTable link={link} />
        </div>
    );
}