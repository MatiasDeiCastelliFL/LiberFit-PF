import React, { useState } from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CardAbout from "../../Atoms/Card/CardAbout";
import perfil1 from "../../../assets/IMG/yo.png";
import perfil2 from "../../../assets/IMG/Matias.png";
import perfil3 from "../../../assets/IMG/Sirhan.png";
import perfil5 from "../../../assets/IMG/Nacho.jpg";
import perfil4 from "../../../assets/IMG/Ibra.png";
import { Transition } from "@headlessui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import Tecnologias from "../../Atoms/Tecnologias/Tecnologias";

function AboutTemplate() {
    const team = [
        {
            name: "Cristian Camilo Londoño Osorio",
            image: perfil1,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el front-end",
            git: "https://github.com/CrisD3v",
            linkedin: "https://www.linkedin.com/in/crisdeveg/",
            portfolio: "",
        },
        {
            name: "Marcelo Alejandro B.",
            image: perfil1,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el back-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
        {
            name: "Matias Marcelo Dei Castelli",
            image: perfil2,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el back-end",
            git: "https://github.com/MatiasDeiCastelliFL",
            linkedin:
                "https://www.linkedin.com/in/matias-dei-castelli-59b811222/",
            portfolio: "",
        },
        {
            name: "Ricardo Obando Villegas",
            image: perfil1,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el back-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
        {
            name: "Ignacio Martin Berridy Sepulveda",
            image: perfil5,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el front-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
        {
            name: "Carlos Julian Ramos Gonzalez",
            image: perfil1,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el back-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
        {
            name: "Sirhan Emilio Betancourt M.",
            image: perfil3,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el back-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
        {
            name: "Xavier Ibrahim Cardozo",
            image: perfil4,
            description:
                "Desarrollador Full Stack de SOY HENRY desempeñado en el front-end",
            git: "",
            linkedin: "",
            portfolio: "",
        },
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className="grid grid-flow-row-dense grid-cols-12 overflow-hidden select-none ">
            <div className="col-start-1 col-span-12">
                <NavBar dashboard={false} />
            </div>
            
                <div className="col-start-1 col-span-4">
                    <div className="w-max  h-max border-r border-redGray border-opacity-20 mr-2">
                        <div className="h-max flex  content-center items-center flex-col 3xl:mt-60 xl2:mt-48 xl3:mt-24 xl:mt-52 lg:mt-9">
                            <div className="">
                                <div className="h-20 flex justify-center items-center">
                                    <h1 className="text-center text-3xl font-poppins font-bold text-redClare">
                                        PROYECTO LIBERFIT
                                    </h1>
                                </div>
                                <div className=" flex justify-center items-center flex-col">
                                    <p className="3xl:text-2xl text-center xl3:text-lg">
                                        De nuestra mayor consideración,
                                        presentamos Proyecto Liberfit, una
                                        aplicación WEB de administración y
                                        gestión de gimnasios en todo su entorno.
                                    </p>
                                    <div className="space-y-4 select-none w-max">
                                        <details className="group mt-5 h-52">
                                            <summary
                                                className="flex border-t border-redClare border-opacity-80  cursor-pointer items-center justify-between bg-redGray p-4"
                                                onClick={handleOpen}
                                            >
                                                <p className="text-center w-max font-poppins font-semibold text-redClare">
                                                    DESCRIPCION
                                                </p>
                                                <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </summary>
                                            <div className="p-4 ">
                                                <p className=" font-poppins font-light text-center">
                                                    Por parte de los
                                                    consumidores finales o
                                                    clientes, podrá visualizar
                                                    el estado de membresías
                                                    activas o impagas
                                                    discriminadas por
                                                    periodo/sede, así como la
                                                    percepción del cobro de las
                                                    membresías por medio del
                                                    sistema de pagos integrado.
                                                    De no menor importancia, la
                                                    plataforma tendrá del lado
                                                    del cliente un dashboard o
                                                    panel de control que le
                                                    facilitará el acceso al
                                                    contenido multimedia y sus
                                                    rutinas, previamente
                                                    proporcionadas por su
                                                    entrenador, además de
                                                    indicadores que mostrarán el
                                                    tiempo restante de sus
                                                    membrecía activa, costo,
                                                    renovación y acceso a los
                                                    productos comerciados por el
                                                    gimnasio adherido.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                            {!open && (
                                <div className="relative">
                                    <div className="absolute xl:-top-32 3xl:-right-80 xl2:-right-60 xl:-right-64 lg:-right-64 lg:-top-36">
                                        <Tecnologias />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-8  3xl:mt-60 xl:mt-52 xl2:mt-48 xl3:mt-28 w-max xl:flex lg:hidden ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={100}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        modules={[Autoplay]}
                        className="mySwiper w-max "
                    >
                        {team.map((t) => (
                            <SwiperSlide>
                                <CardAbout
                                    image={t.image}
                                    name={t.name}
                                    description={t.description}
                                    git={t.git}
                                    linkedin={t.linkedin}
                                    portfolio={t.portfolio}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="col-span-5  xl:hidden  w-max lg:mt-9 ml-32">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={100}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        modules={[Autoplay]}
                        className="mySwiper w-max "
                    >
                        {team.map((t) => (
                            <SwiperSlide>
                                <CardAbout
                                    image={t.image}
                                    name={t.name}
                                    description={t.description}
                                    git={t.git}
                                    linkedin={t.linkedin}
                                    portfolio={t.portfolio}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </div>
    );
}

export default AboutTemplate;
