import axios from "axios";
import { filterDataName, filterExercisesByMuscles, filterDataPrice } from "../FeatureSlices/Filters/Filter";
import Json from '../../assets/gym.json'
import { getData } from "../FeatureSlices/Data/Data";
import { modalOpen } from "../FeatureSlices/Modal/Modal";
import arraySet from "../utils/arraySet";

const data = Json[0].sedes.map(d => d.products.map(d => d.name))
const exercises = Json[0].exercises.map(d => d)
const products = Json[0].sedes.map(d => d.products.map(d => d))



export const getDataByName = (name:any) => (dispatch:any) => {
    const dataSet = arraySet(data.flat())
    dispatch(filterDataName(dataSet.map(d => d).filter(d => d.toLowerCase().includes(name))))
}

export const getDataByPrice = (price:any) => (dispatch:any) => {
    const dataSet = arraySet(products.flat())
    dispatch(filterDataPrice(dataSet.map(d => d).filter(d => d.price <= price)))
}

export const getExercisesByMuscle = (muscle:any) => (dispatch:any) => {
    dispatch(filterExercisesByMuscles(exercises.map(d => d).filter(d => d.muscle.toLowerCase() === muscle)))
}


export const openModal = (active:boolean) => (dispatch:any) => {
    dispatch(modalOpen(active))
}