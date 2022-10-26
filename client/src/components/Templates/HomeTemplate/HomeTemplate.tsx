import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import NavBar from "../../Molecules/Navbar/NavBar";
import Anuncio from './../../Molecules/Anuncio/Anuncio';
import BreadCrumbs from './../../Molecules/BreadCrumbs/BreadCrumbs';

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <NavBar/>
      <Anuncio/>
      <BreadCrumbs/>
      {params.category ? <CardsCategory /> : <SHom/>}
    </div>
  );
}

export default HomeTemplate;
