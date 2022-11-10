import React from "react";
import { useAppDispatch } from "../../../../App/Hooks/Hooks";
import { getDataByName } from "../../../../App/Action/FilterActions";

interface Props {
  Placeholder: any;
  setName : any
  style : React.CSSProperties
}

function Search({ Placeholder,setName, style }: Props) {

  const dispatch = useAppDispatch();

  const handleInputChange = (e:any) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSearch = (e:any) => {
    e.preventDefault();
    dispatch(getDataByName(e.target.value));
  }

  return (
    <input
      className="bg-redClare p-2 rounded-lg outline-none w-input px-6"
      type="text"
      placeholder={Placeholder}
      onChange={handleInputChange}
      onSubmit={handleSearch}
      style={style}
    />
  );
}

export default Search;
