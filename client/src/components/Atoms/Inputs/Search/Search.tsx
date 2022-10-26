import React from "react";

interface Props {
  Placeholder: any;
  setName : any
}

function Search({ Placeholder,setName }: Props) {
  const handleInputChange = (e:any) => {
    e.preventDefault();
    setName(e.target.value);
  }
  return (
    <input
      className="bg-redClare p-2 rounded-lg outline-none w-input px-6"
      type="text"
      placeholder={Placeholder}
      onChange={handleInputChange}
    />
  );
}

export default Search;
