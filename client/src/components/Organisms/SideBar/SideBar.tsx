import React from "react";
import Logo from "../../Atoms/Logo/Logo";
import Filter from "../../Molecules/Filter/Filter";
import Search from "./../../Atoms/Inputs/Search/Search";
import style from "./Style/sidebar.module.css";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { Transition } from "@headlessui/react";
import { useParams, Link } from "react-router-dom";

interface Props {
  handle: any;
  setName: any;
}

function SideBar({ handle, setName }: Props) {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state);

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
          <div className="mb-10">
            <form onSubmit={handle}>
              <Search Placeholder="Search" setName={setName} />
            </form>
          </div>
          <div className="w-full overflow-y-visible h-full">
            <Transition
              show={params.name ? false : params.category ? true : false}
              enter="transform transition duration-[450ms]"
              enterFrom="opacity-0 transition ease-in"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 "
            >
              <Filter />
            </Transition>
          </div>
        </div>
      </div>
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
          <div className="h-full flex items-center ml-4">
            <Link to="/login">
              <img
                className="inline-block h-14 w-14 rounded-full ring-2 ring-white border border-redGray cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </Link>
          </div>
          <div className="flex h-full items-center ml-4">
            <div className="flex flex-col">
              <p className={`${style.text} text-gray`}>Guest</p>
              <p className={`${style.text2} text-semiRed`}>Register</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default SideBar;
