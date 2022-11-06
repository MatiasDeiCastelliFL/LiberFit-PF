import React from "react";

interface Props {
    item: string;
}

function CardCreation({ item }: Props) {
    return (
        <div>
            <div className="relative block rounded border border-gray-100 p-8 shadow-sm hover:shadow-redGray hover:shadow-md">
                <div className="mt-4 text-gray-500 sm:pr-8">
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                        Agregar {item} +
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CardCreation;
