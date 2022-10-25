import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import SHom from "../../Organisms/Section/ContentHome/SHom";
import Nav from "../../Molecules/nav/Nav";

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <Nav />
      {params.category ? <CardsCategory /> : <SHom/>}
    </div>
  );
}

export default HomeTemplate;
