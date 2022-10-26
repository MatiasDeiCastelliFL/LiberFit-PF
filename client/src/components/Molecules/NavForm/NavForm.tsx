import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import style from "./NavBar.module.css";
import {
  ChatBubbleBottomCenterTextIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const NavForm = () => {
  const links = [
    { name: "home", link: "/home" },
    { name: "about", link: "/about" },
  ];

  const link2 = [
    { name: "Membresias", link: "/", icon: <BanknotesIcon className="w-4"/> },
    { name: "Chat", link: "/", icon: <ChatBubbleBottomCenterTextIcon className="w-4" /> },
  ];

  const params = useLocation();


  const name = params.pathname.split("/").map((e, i) => e);

  return (
    <div className="flex w-full  h-16 items-end item-center font-medium  justify-between ">
      <div className="flex px-8">
        {links.map((elem, i) => (
          <div key={i} className="md:ml-8">
            <Link
              to={elem.link}
              className={`${
                name[1] === elem.name ? "active: border-b border-orange" : null
              } text-black hover:text-gray duration-500`}
            >
              {elem.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex mr-96 ">
        {link2.map((elem, i) => (
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
        ))}
      </div>
    </div>
  );
};

export default NavForm;
