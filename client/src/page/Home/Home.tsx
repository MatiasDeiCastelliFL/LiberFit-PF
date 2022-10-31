import React, { useState, useEffect } from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import { useAppSelector, useAppDispatch } from "../../App/Hooks/Hooks";
import { getDataByName, getDataThunk} from "./../../App/Action/Action";
import { openFilters } from "./../../App/Action/Action";
import { useLocation, useParams } from "react-router-dom";

function Home() {
  const { filter } = useAppSelector((state) => state);
  const { data } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const location = useLocation()
  const params = useParams()
  const [name, setName] = useState("");
 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(name.trim().length){
      dispatch(getDataByName(name))
      setName('')
    }
  };

  if(location.pathname === '/home' || params.name){
    dispatch(openFilters(false))
  }
  useEffect(() => {
    dispatch(getDataThunk())
  }, []);

  return (
      <HomeTemplate handle={handleSubmit} name={setName}/>
  )
}

export default Home;
