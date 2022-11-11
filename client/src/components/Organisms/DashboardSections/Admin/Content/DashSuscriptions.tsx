import SuscriptionsTable from "../../../../Molecules/DashboardTables/SuscriptionsTable";

export default function DashSuscriptions({ link }: any) {

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };

    return (
        <div>
            <SuscriptionsTable link={link} />
        </div>
    );
}