import { PropsOf } from "@headlessui/react/dist/types";
import React from "react";
import Content from "../SearchedContent/SearchedContent";

interface Props {
    category: any;
}

const SearchedCards = ({category}:Props) => {

    const categories = ['products','machines','exercises','trainings']

    return (
        <div>
            {
                (category === 'all') ?
                    <div className="flex flex-col gap-5">
                        {
                            categories.map((category) => (
                                <Content category={category} key={category}/>
                            ))
                        }
                    </div>
                :
                    <div className="flex flex-col gap-5">
                        <Content category={category} key={category}/>
                    </div>
            }
        </div>
    );
};

export default SearchedCards;
