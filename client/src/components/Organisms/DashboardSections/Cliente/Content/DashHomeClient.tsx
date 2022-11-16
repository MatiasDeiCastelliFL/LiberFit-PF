import React from "react";
import CardReview from "../../../../Molecules/CardReview/CardReview";
import MembershipInfo from "../../../../Molecules/MembershipInfo/MembershipInfo";
import Calendar from "../../../../Molecules/Calendar/Calendar";
import WelcomeCard from "../../../../Atoms/WelcomeCard/WelcomeCard";
import ContainerReviews from "../../../../Molecules/CardReview/containerReviews";

function DashHomeClient() {
    return (
        <div className="w-tables overflow-hidden flex flex-col gap-10 items-start mt-10">
            <WelcomeCard message="Bienvenido a LiberFit" />
            <div className="flex gap-2 items-center justify-center">
                <MembershipInfo />
                <Calendar />
            </div>
            {/* <CardReview /> */}
            <ContainerReviews />
        </div>
    );
}

export default DashHomeClient;
