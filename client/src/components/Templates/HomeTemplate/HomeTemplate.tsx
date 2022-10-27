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
import Plan from "../../Molecules/Plan/Plan";

interface Props {
  handle : any
  name : any
}

function HomeTemplate({handle, name}:Props) {
  const params = useParams();
  return (
    <div>
      <div className="flex flex-row">
        <SideBar handle={handle} setName={name}/>
        <NavBar/>
        <Modal/>
      </div>
      
      <Anuncio />
      <BreadCrumbs />
      {params.category ? <CardsCategory /> : <SHom />}
      <Plan/>
    </div>
  );
}

export default HomeTemplate;
