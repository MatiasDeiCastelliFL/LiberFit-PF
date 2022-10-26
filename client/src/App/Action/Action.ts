import axios from "axios";
import { filterDataName } from "../FeatureSlices/Filters/Filter";
import Json from '../../assets/gim.json'
import Prefix from '../../assets/prefijo.json'
import { getData } from "../FeatureSlices/Data/Data";

const data = Json[0].sedes.map(d => d.productos.map(d => d.nombre))



export const getDataByName = (name:any) => (dispatch:any) => {
    
    dispatch(filterDataName(data[0].map(d => d).filter(d => d.toLowerCase().includes(name))))
}


export const getDataNum = () => (dispatch:any) => {
   
}