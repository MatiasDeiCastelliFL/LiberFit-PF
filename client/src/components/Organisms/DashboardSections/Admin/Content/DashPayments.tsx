import React, { useState } from "react";
import PaymentsTable from "../../../../Molecules/DashboardTables/PaymentsTable"

export default function DashPayments({ link }: any) {
    // const [addItem, setAddItem] = useState(false);
    // const handleAddItem = () => setAddItem(!addItem);

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <PaymentsTable link={link} />
        </div>
    );
}