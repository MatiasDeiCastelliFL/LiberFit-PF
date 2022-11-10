import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { getDataByName, removeDataByNameFilter } from "../../../../App/Action/FilterActions";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  Placeholder: any;
  setName : any
  style : React.CSSProperties
  dashboard: boolean;
}

function Search({ Placeholder,setName, style, dashboard }: Props) {

  const { activeSearch } = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const [names, setNames] = useState("");

  const handleInputChange = (e:any) => {
    e.preventDefault();
    setNames(e.target.value);
    setName(e.target.value);
  }

  const handleRemove = () => {
    dispatch(removeDataByNameFilter());
    setNames("");
    setName('');
  }

  const handleSearch = (e:any) => {
    e.preventDefault();
    dispatch(getDataByName(e.target.value));
  }

  return (
    <div className={`flex ${dashboard ? null : 'bg-redClare'} justify-around items-center pr-2`}>
      <input
        className="bg-redClare p-2 rounded-lg outline-none w-input px-6"
        type="text"
        placeholder={Placeholder}
        onChange={handleInputChange}
        onSubmit={handleSearch}
        value={names}
        style={style}
      />
      {
        activeSearch ? <XMarkIcon className="w-6 h-6 text-white hover:cursor-pointer" onClick={handleRemove} /> : <MagnifyingGlassIcon className="w-6 h-6 text-white hover:cursor-pointer" onClick={handleSearch} />
      }
    </div>
  );
}

export default Search;
