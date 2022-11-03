import React ,{useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import Json from "../../../assets/gym.json";
import { filterByBrand } from "../../../App/Action/FilterActions"; 

interface Props {
    section: {
        id: string;
        name: string;
    };
}

const BrandFilter = ({section}:Props) => {

    
    const {filter} = useAppSelector((state) => state);
    const [brands, setBrands] = useState(filter.products.map((item) => item.brand));

    const dispatch = useAppDispatch()

    const  [brand, setBrand] = useState<Array<string>>([]);

    const handleBrand = (newBrand: string) => {
        if (newBrand === "All") {
            setBrand([]);
            dispatch(filterByBrand([]));
        } else {
            if(brand.includes(newBrand)){
                const index = brand.indexOf(newBrand);
                brand.splice(index, 1);
            }else{
                brand.push(newBrand);
            }
            dispatch(filterByBrand(brand));
        }
    
    }

    useEffect(() => {
        const brandsSet = new Set(brands);
        const brandsArray = Array.from(brandsSet);
        setBrands(brandsArray);
    }, []);

    useEffect(() => {
    }, [brand]);

    return (
        <div className="flex flex-col">
            <span className="font-medium text-gray-900">
                Marcas
            </span>
            <div>
                <input
                    id={`filter-${section.id}-all`}
                    name={`${section.id}[]`}
                    defaultValue='All'
                    checked={ brand.length === 0 || brand.length === brands.length}
                    onChange={() => handleBrand('All')}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                    htmlFor={`filter-${section.id}-Todos`}
                    className="ml-3 text-sm text-gray-600"
                >
                    Todos
                </label>            
                {
                    brands.map(
                        (
                            option,
                            optionIdx
                        ) => (
                            <div
                                key={
                                    option.id
                                }
                                className="flex items-center"
                            >
                                <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={
                                        option
                                    }
                                    checked={ brand.includes(option) }
                                    onChange={() => handleBrand(option)}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                >
                                    {
                                        option
                                    }
                                </label>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default BrandFilter;