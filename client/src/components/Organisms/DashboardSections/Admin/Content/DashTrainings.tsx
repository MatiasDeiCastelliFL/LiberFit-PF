import React, { useState } from "react";
import TrainingsForm from "../../../../Molecules/CreateInputsContainer/trainingsForm/trainingsForm";
import TrainingsTable from "../../../../Molecules/DashboardTables/TrainingsTable";

export default function DashClientes({ link }: any ) {

    const [training, setTraining] = useState(false)
    const trainingForm = () => setTraining(!training)

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };
    return (
        <div>
            <button
                className={`${
                  training ? "hidden" : null
                } bg-redClare px-4 py-2 rounded-3xl mx-1 flex items-center`}
                onClick={trainingForm}
            >
                <span className="pl-2 text-3xl">+</span>
                <span className="pl-2 text-lg">Clases</span>
            </button>
            {!training ? (
                <div className="w-100">
                    <div className="w-tables overflow-hidden ">
                        <TrainingsTable link={link} />
                    </div>
                </div>
            ) : (
                <TrainingsForm
                background={background} 
                />
            )}
        </div>
    );
}