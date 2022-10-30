import React from "react";
import { useParams } from 'react-router-dom';

interface Props {
  Item: string;
}

function Item() {
  const params = useParams()
  return (
    <h2 className="font-medium text-gray-900 px-4">
      Open Filters
    </h2>
  );
}

export default Item;
