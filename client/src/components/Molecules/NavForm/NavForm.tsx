import React, { Fragment } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import {
    ChatBubbleBottomCenterTextIcon,
    BanknotesIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Perfil from "../../Atoms/Perfil/Perfil";
import Items from "../../Atoms/Perfil/ItemsPefil/Items";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Search from "../../Atoms/Inputs/Search/Search";
import Content from "../../Atoms/Perfil/Content/Content";
import { Popover, Transition } from "@headlessui/react";
import Cookies from "universal-cookie";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { cerrarLogin, loginGoogle } from "../../../App/Action/Action";
import { normalize } from './../../../App/utils/NormalText';

interface Props {
    dashboard: boolean;
}

const NavForm = ({ dashboard }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const { user, logout } = useAuth0();
    const links = [
        { name: "home", link: "/home" },
        { name: "about", link: "/about" },
    ];

    const linkDash = [
        { name: "opcion1", link: "/home" },
        { name: "opcion2", link: "/home" },
    ];

    const link2 = [
        {
            name: cookies.get("name") ? "Dashboard" : "Membresias",
            link:
                cookies.get("RolId") === "1"
                    ? "/dashboard"
                    : cookies.get("RolId") === "3"
                    ? `/dashboard/${normalize(cookies.get("name").replace(/\s+/g, ""))}`
                    : "/",
            icon: cookies.get("name") ? (
                <Squares2X2Icon className="w-4" />
            ) : (
                <BanknotesIcon className="w-4" />
            ),
        },
        {
            name: "Chat",
            link: "/",
            icon: <ChatBubbleBottomCenterTextIcon className="w-4" />,
        },
    ];

    const cerrarSesion = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("email", { path: "/" });
        cookies.remove("name", { path: "/" });
        cookies.remove("phone", { path: "/" });
        cookies.remove("image", { path: "/" });
        cookies.remove("RolId", { path: "/" });
        cookies.remove("token", { path: "/" });

        if (cookies.get("loginWith") === "local") {
            dispatch(cerrarLogin());
            navigate("/login");
        } else logout();
        cookies.remove("loginWith", { path: "/" });
    };

    const solutions = [
        {
            name: "Configuracion",
            href: "##",
        },
        {
            name: "Cerrar sesion",
            href: cerrarSesion,
        },
    ];

    const params = useLocation();

    const name = params.pathname.split("/").map((e, i) => e);

    return (
        <div
            className={`${
                dashboard ? "w-custom_3" : "w-max"
            } flex h-16 items-end item-center font-medium  justify-between`}
        >
            <div className="flex px-8">
                {
                    !dashboard
                        ? links.map((elem, i) => (
                              <div key={i} className="md:ml-8">
                                  <Link
                                      to={elem.link}
                                      className={`${
                                          name[1] === elem.name
                                              ? "active: border-b border-orange"
                                              : null
                                      } text-black hover:text-gray duration-500`}
                                  >
                                      {elem.name}
                                  </Link>
                              </div>
                          ))
                        : null
                    //linkDash.map((elem, i) => (
                    //     <div key={i} className="md:ml-8 mb-5">
                    //       <Link
                    //         to={elem.link}
                    //         className={`${
                    //           name[1] === elem.name
                    //             ? "active: border-b border-orange"
                    //             : null
                    //         } text-black hover:text-gray duration-500`}
                    //       >
                    //         {elem.name}
                    //       </Link>
                    //     </div>
                    //   ))
                }
            </div>
            {dashboard && (
                <div className="mb-3 ">
                    <Search
                        Placeholder="search..."
                        setName={false}
                        style={{
                            background: "transparent",
                            borderBottom: "1px solid #FEE2E2",
                            borderRadius: "0",
                        }}
                    />
                </div>
            )}
            <div
                className={
                    dashboard
                        ? "flex 2xl:-mr-72 xl:-mr-44 lg:-mr-36"
                        : "flex mr-4 "
                }
            >
                {!dashboard ? (
                    link2.map((elem, i) => (
                        <div key={i} className="md:ml-8">
                            <Link
                                to={elem.link}
                                className="text-black hover:text-gray duration-500 flex flex-row"
                            >
                                <div className="flex">
                                    {elem.name}
                                    <div className="translate-y-custom_7">
                                        {elem.icon}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="w-max h-full flex items-center mb-2">
                        <div className="">
                            <span className="border-l border-redGray h-10"></span>
                        </div>
                        <div className=" relative ">
                            <Popover>
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={`
                                             ${open ? "" : "text-opacity-90"}
                                                 group   text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                        >
                                            <div className="flex flex-row gap-2 items-center">
                                                <Perfil width="10" />
                                                <p className="text-sm font-poppins font-light text-gray-400 ">
                                                    {user?.name ||
                                                        cookies.get("name")}
                                                </p>

                                                <ChevronDownIcon
                                                    className={`ml-1.5 h-5 w-4 flex-shrink-0 transition duration-300 ${
                                                        open
                                                            ? "rotate-180"
                                                            : null
                                                    }  text-gray-400`}
                                                />
                                            </div>
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute right-2  w-52 z-10  max-w-sm transform  sm:px-0 ">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-8 bg-white p-4 lg:grid-row">
                                                        {solutions.map(
                                                            (item) => (
                                                                <div
                                                                    className="-m-3 flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer"
                                                                    onClick={
                                                                      item.href
                                                                    }
                                                                >
                                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                                                                    <div className="">
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavForm;
