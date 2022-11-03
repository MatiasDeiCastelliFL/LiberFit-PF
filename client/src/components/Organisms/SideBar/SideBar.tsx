import React from "react";
import Logo from "../../Atoms/Logo/Logo";
import Filter from "../../Molecules/Filter/Filter";
import Search from "./../../Atoms/Inputs/Search/Search";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { Transition } from "@headlessui/react";
import { useParams, Link, useLocation } from "react-router-dom";
import Item from "../../Atoms/SideItems/Item";
import Perfil from "../../Atoms/Perfil/Perfil";
import Items from "../../Atoms/Perfil/ItemsPefil/Items";
import Item2 from "../../Atoms/SideItems/Item2";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie"

interface Props {
    handle: any;
    setName: any;
    dashboard: boolean;
}

const cookies = new Cookies()

function SideBar({ handle, setName, dashboard }: Props) {
    const params = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { filter } = useAppSelector((state) => state);
    const cerrarSesion = () => {
        cookies.remove("id",{path: "/"})
        cookies.remove("email",{path: "/"})
        cookies.remove("name",{path: "/"})
        cookies.remove("phone",{path: "/"})
        window.location.href="./login"
    }

    const client = [
        { title: "Dashboard", active: true, desplegable: false },
        { title: "Rutinas", active: false, desplegable: false },
        { title: "Productos", active: false, desplegable: false },
        { title: "Ejercicios", active: false, desplegable: false },
        { title: "Membresia", active: false, desplegable: true },
    ];

    const admin = [
        { title: "Dashboard", active: true, desplegable: false },
        { title: "Rutinas", active: false, desplegable: true },
        { title: "Productos", active: false, desplegable: true },
        { title: "Ejercicios", active: false, desplegable: true },
        { title: "usuarios", active: false, desplegable: false },
    ];

    console.log(cookies.get("id"))
    console.log(cookies.get("name"))
    console.log(cookies.get("email"))

    return (
        <div className="fixed flex min-h-screen h-full w-sidebar flex-col justify-between border-r border-redGray bg-white select-none overflow-y-auto">
            <div className="">
                <Transition
                    show={filter.open === false ? true : false}
                    enter="transform transition duration-[450ms]"
                    enterFrom="opacity-0 transition ease-in"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                >
                    {filter.open ? null : (
                        <div className="mt-5 ml-5">
                            <Logo />
                        </div>
                    )}
                </Transition>
                <div
                    className={`w-max h-full flex items-center flex-col mt-28 ${
                        filter.open ? "mt-2" : null
                    }`}
                >
                    {!dashboard && (
                        <div className="mb-10">
                            <form onSubmit={handle}>
                                <Search
                                    Placeholder="Search"
                                    setName={setName}
                                    style={{}}
                                />
                            </form>
                        </div>
                    )}
                    <div className="w-full overflow-y-visible h-full">
                        <Transition
                            show={
                                params.name
                                    ? false
                                    : params.category
                                    ? true
                                    : false
                            }
                            enter="transform transition duration-[450ms]"
                            enterFrom="opacity-0 transition ease-in"
                            enterTo="opacity-100 rotate-0 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100 "
                            leaveTo="opacity-0 "
                        >
                            <Filter />
                        </Transition>
                        {dashboard && (
                            <div className="mt-10 flex gap-2 flex-col">
                                {location.pathname === "/dashboard/cliente"
                                    ? client.map((d) => (
                                        <div className="">
                                            {d.desplegable ? (
                                                <Item
                                                    title={d.title}
                                                    type="cliente"
                                                />
                                            ) : (
                                                <Item2
                                                    active={d.active}
                                                    title={d.title}
                                                />
                                            )}
                                        </div>
                                    ))
                                    : location.pathname === "/dashboard"
                                    ? admin.map((d) => (
                                        <div className="">
                                            {d.desplegable ? (
                                                <Item
                                                    title={d.title}
                                                    type="admin"
                                                />
                                            ) : (
                                                <Item2
                                                    active={d.active}
                                                    title={d.title}
                                                />
                                            )}
                                        </div>
                                    ))
                                : null}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!dashboard && (
                <Transition
                    show={filter.open === false ? true : false}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 transition ease-in"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                >
                    <div className="border-t border-redGray w-max h-73 flex flex-row">
                        <Link to="/login">
                            <Perfil width="14" />
                        </Link>
                        <Items />
                        <div onClick={cerrarSesion} className="w-max flex justify-end" >
                            <ArrowLeftOnRectangleIcon className="w-6 mr-5 cursor-pointer text-redClare" />
                        </div>
                    </div>
                </Transition>
            )}
        </div>
    );
}

export default SideBar;
