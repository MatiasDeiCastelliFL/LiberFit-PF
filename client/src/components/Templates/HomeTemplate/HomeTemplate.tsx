import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import Anuncio from "./../../Molecules/Anuncio/Anuncio";
import BreadCrumbs from "../../Atoms/BreadCrumbs/BreadCrumbs";
import SideBar from "../../Organisms/SideBar/SideBar";
import Content from "../../Atoms/Filters/Content";
import NavBar from "../../Organisms/Navbar/NavBar";

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <div className="flex flex-row">
        <SideBar/>
        <NavBar/>
      </div>
      
      {/* <Anuncio />
      <BreadCrumbs />
      {params.category ? <CardsCategory /> : <SHom />} */}
    </div>
  );
}

export default HomeTemplate;
