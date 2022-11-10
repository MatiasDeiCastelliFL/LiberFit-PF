import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../App/Hooks/Hooks";
import Card from "../../Atoms/Card/Card";


interface Props {
    category: any;
}

const Content = ({category}:Props) => {

    const { filter } = useAppSelector((state) => state);
    const items = filter.dataByName[category.toLowerCase()]    

                    
    return(
        <div>
            {
                items ? 
                    <div className="flex flex-col gap-3 justify-between items-start">
                        <h2 className="ml-2 text-lg">{category[0].toUpperCase()+category.slice(1)}</h2>
                        <div className="flex flex-wrap gap-9 ml-2 justify-start mt-3">
                            {items.map((item: { name: any; image: any; }) => (
                                <Link
                                to={`/home/${category[0].toUpperCase()+category.slice(1)}/${item.name
                                    .split("%")
                                    .join("")}`}
                                    key={Math.random()}
                                    >
                                    <Card
                                        name={item.name}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${item.image}')`,
                                        }}
                                        key={item.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                :   
                    <div>
                        <h2 className="ml-2 text-lg">{category[0].toUpperCase()+category.slice(1)}</h2>
                        <h2 className="ml-2 text-lg">No hay resultados</h2>
                    </div>
            }
        </div>
    )                    
}


export default Content