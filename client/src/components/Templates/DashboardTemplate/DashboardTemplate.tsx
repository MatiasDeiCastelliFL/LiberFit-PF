import React,{useState} from "react";
import NavBar from "../../Organisms/Navbar/NavBar";
import SideBar from "./../../Organisms/SideBar/SideBar";
import CreateForm from "../../Organisms/CreateForm/CreateForm";
import DashGeneral from '../../Organisms/Section/DashGeneral/DashGeneral';

function DashboardTemplate() {
  const [componente, setComponente] = useState('general');
  const handleClickItem = (e:any) => {
    e.preveantDeafault
  } 
  // TODO pequenios los charts
  return (
    <div className="flex flex-row select-none">
      <div className="z-10">
        <SideBar handle={false} setName={false} dashboard={true} handleClickItem={(e:any)=>handleClickItem(e)} />
      </div>
      <div className='w-51'>
        <div className="flex flex-row justify-start ml-72 ">
          <NavBar dashboard={true} />
        </div>
        <div className="mt-40 ml-10">
          {componente === 'general'? <DashGeneral />:<CreateForm/>}
        </div>
      </div>
    </div>
  );
}

export default DashboardTemplate;
