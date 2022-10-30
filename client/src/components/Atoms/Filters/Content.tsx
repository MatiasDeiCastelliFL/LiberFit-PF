import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
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
    const data = Json[0].exercises;
    const dataSedes = Json[0].sedes;
    console.log(dataSedes);
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
                    ? "Muscle"
                    : params.category === "Machines"
                    ? "Maquina"
                    : params.category === "Trainings"
                    ? "Clases"
                    : "Prices",
        },
        params.category === "Exercises"
            ? {}
            : {
                  id: "category",
                  name: "Category",
                  options: [
                      {
                          value: "new-arrivals",
                          label: "New Arrivals",
                          checked: false,
                      },
                      { value: "sale", label: "Sale", checked: false },
                      { value: "travel", label: "Travel", checked: true },
                      {
                          value: "organization",
                          label: "Organization",
                          checked: false,
                      },
                      {
                          value: "accessories",
                          label: "Accessories",
                          checked: false,
                      },
                  ],
              },
        {
            id: "size",
            name: "Size",
            options: [
                { value: "2l", label: "2L", checked: false },
                { value: "6l", label: "6L", checked: false },
                { value: "12l", label: "12L", checked: false },
                { value: "18l", label: "18L", checked: false },
                { value: "20l", label: "20L", checked: false },
                { value: "40l", label: "40L", checked: true },
            ],
        },
    ];

    const subCategories = [
        { name: "Totes", href: "#" },
        { name: "Backpacks", href: "#" },
        { name: "Travel Bags", href: "#" },
        { name: "Hip Bags", href: "#" },
        { name: "Laptop Sleeves", href: "#" },
    ];

    return (
        <div className="bg-white">
            <div>
                <main className="max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between  border-gray-200 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            {params.category} FILTROS
                        </h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pt-6 pb-24"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10  w-full">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>

                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-redGray py-6"
                                    >
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
                                                        {params.category ===
                                                        "Exercises" ? (
                                                            data.map(
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
                                                                                option.muscle
                                                                            }
                                                                            type="checkbox"
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            {
                                                                                option.muscle
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                )
                                                            )
                                                        ) : params.category ===
                                                          "Products" ? (
                                                            <>
                                                                <form>
                                                                    <div className="flex items-center mb-2">
                                                                        <input
                                                                            id="price"
                                                                            name="price"
                                                                            defaultValue=""
                                                                            type="number"
                                                                            className={`${Style.input} h-4 w-40 border outline-none p-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                                                                        />
                                                                        <label
                                                                            htmlFor=""
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            Min
                                                                        </label>
                                                                    </div>
                                                                    <div className="flex items-center mb-2">
                                                                        <input
                                                                            id="price"
                                                                            name="price"
                                                                            defaultValue=""
                                                                            type="number"
                                                                            className={`${Style.input} h-4 w-40 border outline-none p-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                                                                        />
                                                                        <label
                                                                            htmlFor=""
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            Max
                                                                        </label>
                                                                    </div>
                                                                    <div className="w-max">
                                                                        <button className=" w-40 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                                            Filtrar
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </>
                                                        ) : null}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Content;
