import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import Details from "../../Organisms/Details/Details";
import Anuncio from "./../../Molecules/Anuncio/Anuncio";
import BreadCrumbs from "../../Atoms/BreadCrumbs/BreadCrumbs";
import SideBar from "../../Organisms/SideBar/SideBar";
import NavBar from "../../Organisms/Navbar/NavBar";
import Modal from "../../Molecules/Modal/Modal";
import { Transition } from "@headlessui/react";

interface Props {
  handle: any;
  name: any;
}

function HomeTemplate({ handle, name }: Props) {
  const params = useParams();
  return (
    <div className="flex flex-row select-none ">
  
        <div className="z-10">
          <Modal />
          <SideBar handle={handle} setName={name} dashboard={false} />
        </div>
        <div className="flex w-custom_3 flex-col justify-center ml-sidebar 2xl:ml-sidebar xl:ml-xl lg:ml-lg_sidebar ">
          <div className="flex flex-col justify-start ">
            <NavBar dashboard={false}/>
          </div>
          <div className="z-0 p-4 xl:ml-10 2xl:ml-8 lg:ml-lg" >
            <div className="border border-redGray h-52 xl:w-full lg:w-lg_fit mb-2 overflow-hidden">
              <Anuncio />
            </div>
            <div className="">
              <BreadCrumbs />
              <div className="mt-5 lg:w-mi">
                {params.category ? null: <SHom/>}
                <Transition
                  show={params.category ? true : false}
                  enter="transform transition duration-[450ms]"
                  enterFrom="opacity-0 transition ease-in"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-10 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 "
                >
                  {params.name ? <Details /> : <CardsCategory /> }
                </Transition>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default HomeTemplate;
