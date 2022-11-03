import React ,{useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import Json from "../../../assets/gym.json";
import { filterByMuscle } from "../../../App/Action/FilterActions"; 

interface Props {
    section: {
        id: string;
        name: string;
    };
}

const MuclesFilters = ({section}:Props) => {

    
    const {filter} = useAppSelector((state) => state);
    const [muscles, setMuscles] = useState(filter.exercises.map((item) => item.muscle));

    const dispatch = useAppDispatch()

    const  [muscle, setMuscle] = useState<Array<string>>([]);

    const handleMuscle = (newMuscle: string) => {
        if (newMuscle === "All") {
            setMuscle([]);
            dispatch(filterByMuscle([], 'exercises'));
        } else {
            if(muscle.includes(newMuscle)){
                const index = muscle.indexOf(newMuscle);
                muscle.splice(index, 1);
            }else{
                muscle.push(newMuscle);
            }
            dispatch(filterByMuscle(muscle, 'exercises'));
        }
    
    }

    useEffect(() => {
        const musclesSet = new Set(muscles);
        const musclesArray = Array.from(musclesSet);
        setMuscles(musclesArray);
    }, []);

    useEffect(() => {
    }, [muscle]);

    return (
        <div>
            <input
                id={`filter-${section.id}-all`}
                name={`${section.id}[]`}
                defaultValue='All'
                checked={ muscle.length === 0 || muscle.length === muscles.length}
                onChange={() => handleMuscle('All')}
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
                muscles.map(
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
                                checked={ muscle.includes(option) }
                                onChange={() => handleMuscle(option)}
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
    );
};

export default MuclesFilters;