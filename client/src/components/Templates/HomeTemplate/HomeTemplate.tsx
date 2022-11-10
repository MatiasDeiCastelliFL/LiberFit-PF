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
    <div className="grid grid-flow-row-dense grid-cols-12 select-none">
        <div className="col-span-2">
          <Modal />
          <SideBar handle={handle} setName={name} dashboard={false} />
        </div>
        <div className="grid grid-cols-12 col-span-12 col-start-2  ">
          <div className="col-start-2 col-span-12">
            <NavBar dashboard={false}/>
          </div>
          <div className="mt-10 col-start-2 col-span-11  grid grid-cols-12" >
            <div className="border border-redClare border-opacity-70 col-start-2 col-span-10 overflow-hidden">
              <Anuncio />
            </div>
            <div className="mt-10 col-start-2 col-span-10">
              <BreadCrumbs />
              <div className="mt-5 mb-5">
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
