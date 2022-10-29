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
  console.log(params.category);
  return (
    <div>
      <div className="flex flex-row">
        <div className="z-40 flex flex-row">
          <Modal />
          <SideBar handle={handle} setName={name} dashboard={false} />
        </div>

        <div className="flex flex-col justify-center ml-72">
          <div className="z-30">
            <NavBar dashboard={false}/>
          </div>
          <div className="z-0 w-full">
            <div className="border border-redGray h-52 mt-32 ml-11 overflow-hidden">
              <Anuncio />
            </div>
            <div className="ml-10 mt-3">
              <BreadCrumbs />
              <div className="ml-1 mt-5">
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
    </div>
  );
}

export default HomeTemplate;
