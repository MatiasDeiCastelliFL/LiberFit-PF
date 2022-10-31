import axios from "axios";
import Json from '../../assets/gym.json'
import arraySet from "../utils/arraySet";
import { modalOpen } from "../FeatureSlices/Modal/Modal";
import { getData, filterByPrice } from "../FeatureSlices/Data/Data";
import { filterDataName, filterExercisesByMuscles,filterDataPrice,openFilter} from "../FeatureSlices/Filters/Filter";
import { getAllUsers, postUsers } from "../FeatureSlices/Users/Users"

const data = Json[0].sedes.map(d => d.products.map(d => d.name))
const exercises = Json[0].exercises.map(d => d)
const products = Json[0].sedes.map(d => d.products.map(d => d))


export const getDataThunk = () => async (dispatch: any) => {
    try {
        const response = await axios.get("http://localhost:3004/info");
        console.log('Action Payload',response.data)
        dispatch(getData(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const getDataByName = (name:any) => (dispatch:any) => {
    const dataSet = arraySet(data.flat())
    dispatch(filterDataName(dataSet.map(d => d).filter(d => d.toLowerCase().includes(name))))
}

export const getDataByPrice = (maxPrice:any, minPrice:any) => (dispatch:any) => {
    const dataSet = arraySet(products.flat())
    dispatch(filterDataPrice(dataSet.map(d => d).filter(d => minPrice <= d.price <= maxPrice)))
}

export const filterProductsByPrice = (minPrice:any, maxPrice:any) => (dispatch:any) => {
    dispatch(filterByPrice([minPrice, maxPrice]))
}

export const getExercisesByMuscle = (muscle:any) => (dispatch:any) => {
    dispatch(filterExercisesByMuscles(exercises.map(d => d).filter(d => d.muscle.toLowerCase() === muscle)))
}


export const openModal = (active:boolean) => (dispatch:any) => {
    dispatch(modalOpen(active))
}

export const openFilters = (active:boolean) => (dispatch:any) => {
    dispatch(openFilter(active))
}

export const getUsers = () => async (dispatch:any) => {
    axios("") // endpoint de todos los users
    .then(res=>dispatch(getAllUsers(res)))
    .catch(e=>console.log(e))
}

export const postUser = (payload:any) => async (dispatch: any) => {
    try {
        let json = await axios.post("",payload) // enpoint de post user
        console.log(json)
        return json
    } catch (error) {
        console.log(error)   
    }
}

export const postElement = (payload:any, element:string) =>  (dispatch: any) => {
    try {
        console.log("Action")
        console.log(payload)
    } catch (error) {
        console.log(error)
    } 
}