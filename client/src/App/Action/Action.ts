import axios from "axios";
import { filterDataName, filterExercisesByMuscles } from "../FeatureSlices/Filters/Filter";
import Json from '../../assets/gym.json'
import { getData } from "../FeatureSlices/Data/Data";
import { modalOpen } from "../FeatureSlices/Modal/Modal";

const data = Json[0].sedes.map(d => d.products.map(d => d.name))
const exercises = Json[0].exercises.map(d => d)



export const getDataByName = (name:any) => (dispatch:any) => {
    
    dispatch(filterDataName(data[0].map(d => d).filter(d => d.toLowerCase().includes(name))))
}

export const getExercisesByMuscle = (muscle:any) => (dispatch:any) => {
    dispatch(filterExercisesByMuscles(exercises.map(d => d).filter(d => d.muscle.toLowerCase() === muscle)))
}


export const openModal = (active:boolean) => (dispatch:any) => {
    dispatch(modalOpen(active))
}