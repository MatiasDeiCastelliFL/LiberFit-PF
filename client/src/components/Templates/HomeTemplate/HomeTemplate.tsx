import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import NavBar from "../../Molecules/Navbar/NavBar";
import Anuncio from './../../Molecules/Anuncio/Anuncio';

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <NavBar/>
      <Anuncio/>
      {params.category ? <CardsCategory /> : <SHom/>}
    </div>
  );
}

export default HomeTemplate;
