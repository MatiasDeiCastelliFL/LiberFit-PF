import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import Item2 from "./Item2";

interface Props {
    title: string;
    type: string;
    icon: any;
}

function Item({ title, type }: Props) {
    return (
        <div className="w-max">
            <div className="">
                <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between hover:bg-gray-50 p-4">
                        <h2>{title}</h2>
                        <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
                    </summary>
                    <div className="">
                        {type === "cliente" ? (
                            <div className="">
                                <Item2 title="Visualizar" active={false} icon=""/>
                                <Item2 title="Ampliar" active={false} icon=""/>
                            </div>
                        ) : type === "admin" ? (
                            <div className="">
                                <Item2 title="Crear" active={false} icon=""/>
                                <Item2
                                    title="Borrar o Actualizar"
                                    active={false}
                                    icon=""
                                />
                            </div>
                        ) : null}
                    </div>
                </details>
            </div>
        </div>
    );
}

export default Item;
