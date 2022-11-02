import React from "react";
import { useParams } from "react-router-dom";

interface Props {
  Item: string;
}

function Item() {
  const {category} = useParams()
  return (
    <h2 className="font-medium text-gray-900 px-4">
      {category} Filters
    </h2>
  );
}

export default Item;
