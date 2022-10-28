import axios from "axios";
import { filterDataName } from "../FeatureSlices/Filters/Filter";
import Json from '../../assets/gim.json'
import { getData } from "../FeatureSlices/Data/Data";
import { modalOpen } from "../FeatureSlices/Modal/Modal";

const data = Json[0].sedes.map(d => d.productos.map(d => d.nombre))



export const getDataByName = (name:any) => (dispatch:any) => {
    
    dispatch(filterDataName(data[0].map(d => d).filter(d => d.toLowerCase().includes(name))))
}


export const openModal = (active:boolean) => (dispatch:any) => {
    dispatch(modalOpen(active))
}