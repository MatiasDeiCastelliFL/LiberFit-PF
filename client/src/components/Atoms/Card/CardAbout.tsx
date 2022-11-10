import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";

interface Props {
    image: string;
    name: string;
    description: string;
    git: string;
    linkedin: string;
    portfolio: string;
}

function CardAbout({
    image,
    name,
    description,
    git,
    linkedin,
    portfolio,
}: Props) {
    const icon = [
        { i: <AiFillGithub />, link: git },
        { i: <AiFillLinkedin />, link: linkedin },
        { i: <TfiBag />, link: portfolio },
    ];
    return (
        <div className="h-card">
            <div className="group border-4 border-transparent hover:border-redClare hover:border-opacity-10  3xl:w-80 xl2:w-80 xl:w-64 rounded-lg transition-all ease-in delay-75">
                <div className="">
                    <img
                        src={image}
                        alt=""
                        className="w-80 lg:w-full  rounded-full group-hover:rounded-t-xl transition-all ease-in-out delay-75"
                    />
                </div>
                <div className="mt-5 h-0 m-0 opacity-0 group-hover:m-5 group-hover:xl2:m-1 group-hover:xl2:ml-5 group-hover:xl2:mr-3 group-hover:xl2:mt-5 group-hover:xl:m-1 group-hover:xl:ml-5 group-hover:xl:mr-3 group-hover:xl:mt-5   group-hover:h-36  group-hover:opacity-100 transition-all ease-in delay-75">
                    <div className="">
                        <h1 className="3xl:text-3xl  xl:text-2xl mb-3 xl2:text-2xl m-0 lg:text-2xl ">{name}</h1>
                    </div>
                    <div className="mt-2">
                        <p className="3xl:text-sm xl2:text-sm xl:text-sm lg:text-lg">{description}</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-around items-center h-20 xl:h-24 ">
                        {icon.map((i) => (
                            <a href={i.link}>
                                <span className="text-3xl text-center w-10 h-10 transition-all ease-in flex justify-center items-center hover:bg-dark hover:border hover:border-dark rounded-lg hover:text-white">
                                    {i.i}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardAbout;
