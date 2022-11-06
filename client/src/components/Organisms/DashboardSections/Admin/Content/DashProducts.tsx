import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CardsCategory from '../../../../Molecules/CardCategory/CardsCategory';
import ProductForm from '../../../../Molecules/CreateInputsContainer/ProductsForm/productForm';

function DashProducts() {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  const background={background:"linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)"}
   return <div>
     {!addItem ?<div>
       <CardsCategory />
       
     </div> :<ProductForm background={background}/>}
  </div>
}
export default DashProducts
