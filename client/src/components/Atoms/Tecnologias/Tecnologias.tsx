import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiPostgresql,
    SiTypescript,
    SiSequelize,
    SiTailwindcss,
    SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Tecnologias() {
    const tec = [
        { icon: <FaReact />, name: "react" },
        { icon: <FaNodeJs />, name: "node.js" },
        { icon: <SiPostgresql />, name: "postgresql" },
        { icon: <SiTypescript />, name: "typescript" },
        { icon: <SiSequelize />, name: "sequelize" },
        { icon: <SiTailwindcss />, name: "tailwindcss" },
        { icon: <SiExpress />, name: "express" },
        { icon: <IoLogoJavascript />, name: "javascript" },
    ];
    return (
        <div>
            <div className="flex justify-center 3xl:mr-16 xl2:mr-12 xl:mr-16 lg:mr-28">
                <h2 className="text-2xl font-semibold text-redClare">
                    Tecnologias
                </h2>
            </div>
            <div className="w-max xl:mt-8 lg:mt-2">
                <div className="flex flex-wrap gap-28 xl2:w-96 xl:w-96 lg:w-80 xl:justify-around lg:justify-around  justify-start xl2:justify-around 3xl:w-tec 3xl:mr-10 xl2:mr-16 lg:mr-24 ">
                    {tec.map((t) => (
                        <div className="flex flex-col justify-center 3xl:m-0 xl2:m-7 xl:m-7 lg:m-7 content-center">
                            <span className="text-4xl text-center text-slate-400 ">
                                {t.icon}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tecnologias;
