import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CardsCategory from '../../../../Molecules/CardCategory/CardsCategory';
import ProductForm from '../../../../Molecules/CreateInputsContainer/ProductsForm/productForm';

function DashProducts() {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => setAddItem(!addItem)
  
   return <div>
     {!addItem ?<div>
       <CardsCategory />
       <button onClick={handleAddItem}>
         Agregar Producto +
         </button>
     </div> :<ProductForm background={undefined}/>}
  </div>
}
export default DashProducts
