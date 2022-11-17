import React, { useEffect } from "react";
import Logo from "../../Atoms/Logo/Logo";
import Filter from "../../Molecules/Filter/Filter";
import Search from "./../../Atoms/Inputs/Search/Search";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { Transition } from "@headlessui/react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Item from "../../Atoms/SideItems/Item";
import Perfil from "../../Atoms/Perfil/Perfil";
import Items from "../../Atoms/Perfil/ItemsPefil/Items";
import Item2 from "../../Atoms/SideItems/Item2";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie";
import style from "./Style/sidebar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { cerrarLogin, loginGoogle } from "../../../App/Action/Action";
import jwt_decode from "jwt-decode";
import { BsBuilding } from 'react-icons/bs';
import { FaUserTie, FaUserFriends, FaRegCreditCard, FaDumbbell, FaClipboardList } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiMuscleUp } from 'react-icons/gi';
import { GoDashboard } from 'react-icons/go';
import { BsCurrencyDollar } from 'react-icons/bs';
import Swal from "sweetalert2"


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
    const { user, logout } = useAuth0();
    const navigate = useNavigate();
    const cerrarSesion = () => {
        Swal.fire({
            title: 'Seguro quieres cerrar sesion?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'cerrar sesion!'
          }).then((result) => {
            if (result.isConfirmed) {
                cookies.remove("id", { path: "/" });
                cookies.remove("email", { path: "/" });
                cookies.remove("name", { path: "/" });
                cookies.remove("phone", { path: "/" });
                cookies.remove("image", { path: "/" });
                cookies.remove("RolId", { path: "/" });
                cookies.remove("token",{path:"/"})
                
                if (cookies.get("loginWith") === "local") {
                    dispatch(cerrarLogin());
                    navigate("/home");
                } else logout();
                cookies.remove("loginWith", { path: "/" });
                Swal.fire(
                    'Usuario cerrado correctamente!',
                    'Lo esperamos nuevamente!',
                    'success'
                  )
            }
          })
        // if (confirm("Seguro que quieres cerrar sesion?")) {
        //     cookies.remove("id", { path: "/" });
        //     cookies.remove("email", { path: "/" });
        //     cookies.remove("name", { path: "/" });
        //     cookies.remove("phone", { path: "/" });
        //     cookies.remove("image", { path: "/" });
        //     cookies.remove("RolId", { path: "/" });
        //     cookies.remove("token",{path:"/"})
            
        //     if (cookies.get("loginWith") === "local") {
        //         dispatch(cerrarLogin());
        //         navigate("/home");
        //     } else logout();
        //     cookies.remove("loginWith", { path: "/" });
        // };
    }

    const client = [
        {
            title: "Dashboard",
            active: location.pathname === `/dashboard/${params.cliente}` ? true : false,
            desplegable: false,
            link: `/dashboard/${params.cliente}`,
            icon: <GoDashboard/>
        },
        {
            title: "Rutinas",
            active: location.pathname.includes("rutinas") ? true : false,
            desplegable: false,
            link: `/dashboard/${params.cliente}/rutinas`,
            icon: <FaClipboardList/>
        },
        {
            title: "Ejercicios",
            active: location.pathname.includes("ejercicios") ? true : false,
            desplegable: false,
            link: `/dashboard/${params.cliente}/ejercicios`,
            icon: <GiMuscleUp/>
        },
        {
            title: "Pagos",
            active: location.pathname.includes("pagos") ? true : false,
            desplegable: false,
            link: `/dashboard/${params.cliente}/pagos`,
            icon: <BsCurrencyDollar/>
        },
    ];

    const admin = [
        {
            title: "Dashboard",
            active: location.pathname === "/dashboard/admin" ? true : false,
            desplegable: false,
            link: "/dashboard/admin",
            icon: <GoDashboard/>
        },
        {
            title: "Sedes",
            active: location.pathname.includes("locations") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/locations",
            icon: <BsBuilding/>
        },
        {
            title: "Empleados",
            active: location.pathname.includes("employees") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/employees",
            icon: <FaUserTie/>
        },
        {
            title: "Productos",
            active: location.pathname.includes("Productos") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/products",
            icon: <MdOutlineProductionQuantityLimits/>
        },
        {
            title: "Ejercicios",
            active: location.pathname.includes("ejercicios") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/ejercicios",
            icon: <GiMuscleUp/>
        },
        {
            title: "Clientes",
            active: location.pathname.includes("clients") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/clients",
            icon: <FaUserFriends/>
        },
        {
            title: "Membresías",
            active: location.pathname.includes("subscriptions") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/subscriptions",
            icon: <FaRegCreditCard/>
        },
        {
            title: "Entrenamientos",
            active: location.pathname.includes("trainings") ? true : false,
            desplegable: false,
            link: "/dashboard/admin/trainings",
            icon: <FaDumbbell/>
        },
        {
            title: "Cobranzas",
            active: location.pathname.includes("payments") ? true : false,
            desplegable: false,
            link: `/dashboard/admin/payments`,
            icon: <BsCurrencyDollar/>
        },
    ];

    // console.log(cookies.get("id"));
    // console.log(cookies.get("name"));
    // console.log("-->",cookies.get("email"));
    // console.log("token--->", cookies.get("token"));
    // const usario = user
    
    // const loginGoog = (user:any) => {
    //     if(user) {
    //         dispatch(loginGoogle({
    //             email: user?.email,
    //             password: user?.nickname,
    //             picture: user?.picture,
    //             name: user?.name
    //         }))
    //         .then(response => {
    //             return response?.data.token
    //             // console.log("-->",response?.data)
    //           })
    //           .then(response => {
    //             console.log(response)
    //             var respuesta = response
    //             var decode:any = jwt_decode(respuesta)
          
    //             // console.log("<--->",decode.user.email)
          
    //             cookies.set("id", decode.user.id,{path: "/"})
    //             cookies.set("email", decode.user.email,{path: "/"})
    //             cookies.set("name", decode.user.name,{path: "/"})
    //             cookies.set("phone", decode.user.phone,{path: "/"})
    //             cookies.set("image", decode.user.image,{path: "/"})
    //             cookies.set("RolId", decode.user.RolId,{path: "/"})
    //             cookies.set("loginWith","auth0",{path:"/"})
    //             cookies.set("token",respuesta,{path:"/"})

                

    //                 // alert(`Bienvenido ${decode.user.email}`)
    //                 // window.location.href="./home"
    //                 // logout()
    //             });
    //     }
    // };
    // useEffect(() => {
    //     setTimeout(() => {
    //         loginGoog(user)
    //     }, 3000);
    //     loginGoog(user);
    // }, [user]);
    // console.log('user', cookies.get("RolId"));
    // console.log({
    //     password: user?.nickname,
    //     email: user?.email,
    //     name: user?.name,
    //     picture: user?.picture
    // });
    // console.log("ibra-->",user)

    return (
        <div className={`flex ${dashboard? "w-sidebar" : null} h-full  flex-col justify-between fixed border-r bg-white border-redGray overflow-y-auto`}>
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
                        <div className="flex justify-center w-full mt-5">
                            <button onClick={()=>navigate("/home")}>
                                <Logo />
                            </button>
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
                                    dashboard={false}
                                    Placeholder="Buscar"
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
                            {!dashboard && <Filter />}
                        </Transition>
                        {dashboard && (
                            <div className="mt-10 flex gap-2 flex-col">
                                {location.pathname.includes(
                                    `/dashboard/${params.cliente}`
                                )
                                    ? client.map((d) => (
                                        <div className="w-full">
                                            {d.desplegable ? (
                                                <Link to={d.link}>
                                                    <Item
                                                        title={d.title}
                                                        type="cliente"
                                                        icon=""
                                                    />
                                                </Link>
                                            ) : (
                                                <Link to={d.link} className="w-max">
                                                    <Item2
                                                        active={d.active}
                                                        icon={d.icon}
                                                        title={d.title}
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    ))
                                   : location.pathname.includes("/dashboard/admin")
                                    ? admin.map((d) => (
                                        <div className="flex overflow-y-auto py-1 px-3 rounded dark:bg-gray-800">
                                            {d.desplegable ? (
                                                <Link to={d.link}>
                                                    <Item
                                                        title={d.title}
                                                        type="admin"
                                                        icon=""
                                                    />
                                                </Link>
                                            ) : (
                                                <Link className="w-full" to={d.link}>
                                                    <Item2
                                                        active={d.active}
                                                        icon={d.icon}
                                                        title={d.title}
                                                    />{" "}
                                                </Link>
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
                    <div className="border-t border-redGray w-max h-73 flex">
                        <div className="w-max flex flex-row">
                            <Link to={cookies.get("name") ? "/userConfig" : ""}>
                                <Perfil
                                    width={
                                        cookies.get("name") || user?.name
                                            ? "14"
                                            : "14"
                                    }
                                />
                            </Link>
                            <div className="">
                                <Items />
                            </div>
                        </div>
                    </div>
                </Transition>
            )}
        </div>
    );
}

export default SideBar;
