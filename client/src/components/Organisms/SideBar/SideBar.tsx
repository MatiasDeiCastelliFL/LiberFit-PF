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
import Cookies from "universal-cookie";
import style from "./Style/sidebar.module.css";
import {useAuth0} from "@auth0/auth0-react"

interface Props {
    handle: any;
    setName: any;
    dashboard: boolean;
}

function SideBar({ handle, setName, dashboard }: Props) {
    const cookies = new Cookies();
    const params = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { filter } = useAppSelector((state) => state);
    const {user, logout} = useAuth0()
    const cerrarSesion = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("email", { path: "/" });
        cookies.remove("name", { path: "/" });
        cookies.remove("phone", { path: "/" });
        cookies.remove("image", { path: "/" });
        window.location.href = "./home";
    };

    const client = [
        { title: "Dashboard", active: location.pathname === '/dashboard/cliente'? true : false, desplegable: false, link: "/dashboard/cliente" },
        {
            title: "Rutinas",
            active: location.pathname.includes('rutinas') ? true : false,
            desplegable: false,
            link: "/dashboard/cliente/rutinas",
        },
        {
            title: "Ejercicios",
            active: location.pathname.includes('ejercicios') ? true : false,
            desplegable: false,
            link: "/dashboard/cliente/ejercicios",
        },
        {
            title: "Membresia",
            active: false,
            desplegable: true,
            link: ''
        },
    ];

    const admin = [
        { title: "Dashboard", active: true, desplegable: false },
        { title: "Rutinas", active: false, desplegable: true },
        { title: "Productos", active: false, desplegable: true },
        { title: "Ejercicios", active: false, desplegable: true },
        { title: "usuarios", active: false, desplegable: false },
    ];

    // console.log(cookies.get("id"));
    // console.log(cookies.get("name"));
    // console.log(cookies.get("email"));
    // console.log(cookies.get("image"));
    console.log(JSON.stringify(user))
    const logeado = cookies.get("name") ? (
        <div className="border-t border-redGray w-max h-73 flex flex-row justify-around items-center">
            <img
                className=" w-10 rounded-3xl "
                src={cookies.get("image")}
            />
            <p className={`${style.text} text-gray text-xl `}>
                {cookies.get("name")}
            </p>
            <p className={`${style.text2} text-semiRed`}>
                {cookies.get("rol")}
            </p>

            <div
                onClick={cerrarSesion} // className="w-max flex justify-end"
            >
                <ArrowLeftOnRectangleIcon className="w-8 mr-5 cursor-pointer text-redClare" />
            </div>
        </div>
    ) : 
    (
        <div className="border-t border-redGray w-max h-73 flex flex-row justify-around items-center">
                            <img className="w-10" src={user?.picture} />
                            <p className="text-xl">{user?.name}</p>
                            <div
                                    onClick={() => logout()} // className="w-max flex justify-end"
                                >
                                    <ArrowLeftOnRectangleIcon className="w-8 mr-5 cursor-pointer text-redClare" />
                                </div>
                        </div>
    )

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
                                {location.pathname.includes(
                                    "/dashboard/cliente"
                                )
                                    ? client.map((d) => (
                                          <div className="">
                                              {d.desplegable ? (
                                                      <Item
                                                          title={d.title}
                                                          type="cliente"
                                                      />
                                              ) : (
                                                  <Link to={d.link}>
                                                      <Item2
                                                          active={d.active}
                                                          title={d.title}
                                                      />
                                                  </Link>
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
                    
                        
                        {cookies.get("name") || user?.name ? logeado  : (
                            <div className="border-t border-redGray w-max h-73 flex flex-row justify-around text-xl">
                                <Perfil width="14" />
                                <Link to="/login">
                                    <Items />
                                </Link>
                            </div>
                        )}
                    
                </Transition>
            )}
        </div>
    );
}

export default SideBar;
