import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import Anuncio from "./../../Molecules/Anuncio/Anuncio";
import BreadCrumbs from "../../Atoms/BreadCrumbs/BreadCrumbs";
import SideBar from "../../Organisms/SideBar/SideBar";
import Content from "../../Atoms/Filters/Content";
import NavBar from "../../Organisms/Navbar/NavBar";
import Modal from "../../Molecules/Modal/Modal";

interface Props {
  handle: any;
  name: any;
}

function HomeTemplate({ handle, name }: Props) {
  const params = useParams();
  return (
    <div>
      <div className="flex flex-row">
        <div className="z-50 flex flex-row">
          <SideBar handle={handle} setName={name} />
        </div>

        <div className="flex flex-col justify-center ml-72">
          <div className="z-30">
            <NavBar />
          </div>
          <div className="z-0">
            <div className="border border-redGray h-52 mt-32 ml-11 overflow-hidden">
              <Anuncio />
            </div>
            <div className="ml-10 mt-3">
              <BreadCrumbs />
              <div className="ml-1 mt-5">
                {params.category ? <CardsCategory /> : <SHom />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTemplate;
