import React from "react";
import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gim.json";
import { useParams } from "react-router-dom";

function CardsCategory() {
  const { category } = useParams();
  const sedes = Json[0].sedes;
  const maquinas = sedes.map((sede) => sede.maquinas).flat();
  const clases = sedes.map((sede) => sede.clases).flat();
  const productos = sedes.map((sede) => sede.productos).flat();
  console.log(category);

  return (
      <div className=" container max-w-max max-h-96 overflow-hidden flex mx-auto items-center border-2 overflow-y-auto">
        <div className="flex justify-center flex-wrap gap-5 ">
          {maquinas.map((d) => (
            <div key={Math.random()}>
              <Card name={d.nombre} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${d.imagen}')`}} key={d.nombre} />
            </div>
          ))}
        </div>
      </div>
  );
}

export default CardsCategory;
