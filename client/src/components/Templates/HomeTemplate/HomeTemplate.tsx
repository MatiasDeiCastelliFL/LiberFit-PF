import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import Anuncio from "./../../Molecules/Anuncio/Anuncio";
import BreadCrumbs from "../../Atoms/BreadCrumbs/BreadCrumbs";
import NavForm from "../../Molecules/NavForm/NavForm";
import SideBar from "../../Organisms/SideBar/SideBar";
import Content from "../../Atoms/Filters/Content";

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <div className="flex flex-row">
        <SideBar/>
        <NavForm/>
      </div>
      
      <Anuncio />
      <BreadCrumbs />
      {params.category ? <CardsCategory /> : <SHom />}
    </div>
  );
}

export default HomeTemplate;
