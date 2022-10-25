import React from "react";
import Card from "../../Atoms/Card/Card";

const cardsData = [
    {
        title: 'Maquina 1',
    },
    {
        title: 'Maquina 2',
    },
    {
        title: 'Maquina 3',
    },
    {
        title: 'Maquina 4',
    },
    {
        title: 'Maquina 5',
    },
    {
        title: 'Maquina 6',
    },
    {
        title: 'Maquina 7',
    },
    {
        title: 'Maquina 8',
    },
    {
        title: 'Maquina 9',
    },
    {
        title: 'Maquina 10',
    },
    {
        title: 'Maquina 11',
    },
    {
        title: 'Maquina 12',
    },
    {
        title: 'Maquina 13',
    },
    {
        title: 'Maquina 14',
    },
    {
        title: 'Maquina 15',
    },
    {
        title: 'Maquina 16',
    },
    {
        title: 'Maquina 17',
    },
    {
        title: 'Maquina 18',
    },
    {
        title: 'Maquina 19',
    },
    {
        title: 'Maquina 20',
    },
]

const CardsContainer = () => {
    return (
        <div className="grid grid-cols-6 gap-1">
            {
                cardsData.map((item) => {
                    return <Card data={item} />
                })
            }
        </div>
    );
}

export default CardsContainer;
