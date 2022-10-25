import React from "react";
import { useParams } from "react-router-dom";
import CardsCategory from "../../Molecules/CardCategory/CardsCategory";
import CardsContent from "../../Molecules/CardsContent/CardsContent";
import Nav from "../../Molecules/nav/Nav";

function HomeTemplate() {
  const params = useParams();
  return (
    <div>
      <Nav />
      {params.category ? <CardsCategory /> : <CardsContent />}
    </div>
  );
}

export default HomeTemplate;
