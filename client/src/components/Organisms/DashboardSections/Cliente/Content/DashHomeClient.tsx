import React from "react";
import CardReview from '../../../../Molecules/CardReview/CardReview';
import MembershipInfo from "../../../../Molecules/MembershipInfo/MembershipInfo";

function DashHomeClient () {
    return(
        <div className="w-tables overflow-hidden flex flex-col items-start">
            <MembershipInfo />
            <CardReview/>
        </div>
    )
}

export default DashHomeClient