import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import PriceFilter from "./PriceFilter";
import MusclesFilters from "./MuclesFilters";
import BrandFilter from "./BrandFilter";

import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Json from "../../../assets/gym.json";
import arraySet from "../../../App/utils/arraySet";
import Style from "./Styles.module.css";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

function Content() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const params = useParams();

    const filters = [
        {
            id:
                params.category === "Exercises"
                    ? "Muscle"
                    : params.category === "Machines"
                    ? "Maquina"
                    : params.category === "Trainings"
                    ? "Clases"
                    : "Products",
            name:
                params.category === "Exercises"
                    ? "Musculos"
                    : params.category === "Machines"
                    ? "Musculos"
                    : params.category === "Trainings"
                    ? "Precios"
                    : params.category === "Products"
                    ? "Precios / Marca"
                    : "null",


        },
    ];
    return (
        <div className="bg-white">
            <div>
                <main className="max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <div className="flex items-baseline justify-between  border-gray-200 pb-6">
                        <div className="flex items-center">
                            <button type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)} >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>  */}
                    <div aria-labelledby="products-heading" className="pt-6 pb-24" >
                        <h2 id="products-heading" className="sr-only"> Products </h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10  w-full">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-redGray py-6" >
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {params.category === "Exercises" ? (
                                                            <MusclesFilters section={section} />
                                                        ) : params.category === "Products" ? (
                                                            <div className="flex flex-col gap-16">
                                                                <PriceFilter/>
                                                                <BrandFilter section={section}/>
                                                            </div>
                                                        ) : params.category === "Machines" ? (
                                                            <MusclesFilters section={section} />
                                                        ) : params.category === "Trainings" ? (
                                                            <PriceFilter/>
                                                        ) :  null}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Content;
