import React, { useState } from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import { useAppSelector, useAppDispatch } from "../../App/Hooks/Hooks";
import { getDataByName } from "./../../App/Action/Action";

function Home() {
  const { filter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(name.trim().length){
      dispatch(getDataByName(name))
      setName('')
    }
  };

  return (
      <HomeTemplate handle={handleSubmit} name={setName}/>
  )
}

export default Home;
