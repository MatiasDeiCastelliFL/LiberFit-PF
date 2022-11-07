import axios from "axios";
import Json from "../../assets/gym.json";
import arraySet from "../utils/arraySet";
import { modalOpen } from "../FeatureSlices/Modal/Modal";
import {
    getData,
    filterDataPrice,
    openFilter,
    filterDataName,
    filterByMuscles,
    filterByBrands,
} from "../FeatureSlices/Filters/Filter";
import { getAllUsers, postUsers } from "../FeatureSlices/Users/Users";

const data = Json[0].sedes.map((d) => d.products.map((d) => d.name));
const exercises = Json[0].exercises.map((d) => d);
const products = Json[0].sedes.map((d) => d.products.map((d) => d));

const Route = "http://localhost:3004";
const BASE_URL = import.meta.env.VITE_API;

export const getFilterData = () => async (dispatch: any) => {
    try {
        const data = await axios.get(`${ BASE_URL}/infolocaciones`);
        const products = await axios.get(`${BASE_URL}/product`);
        const machines = await axios.get(`${BASE_URL}/machine`);
        const exercises = await axios.get(`${BASE_URL}/exercises`);
        const trainings = await axios.get(`${BASE_URL}/training`);

        const response = {
            data: data.data,
            products: products.data,
            machines: machines.data,
            exercises: exercises.data,
            trainings: trainings.data,
        };

        dispatch(getData(response));
    } catch (error) {
        console.log(error);
    }
};

export const getDataByName = (name: any) => (dispatch: any) => {
    const dataSet = arraySet(data.flat());
    // dispatch(filterDataName(dataSet.map(d => d).filter(d => d.toLowerCase().includes(name))))
    dispatch(filterDataName(name));
};

export const getDataByPrice =
    (maxPrice: any, minPrice: any) => (dispatch: any) => {
        const dataSet = arraySet(products.flat());
        dispatch(
            filterDataPrice(
                dataSet
                    .map((d) => d)
                    .filter((d) => minPrice <= d.price <= maxPrice)
            )
        );
    };

export const filterProductsByPrice =
    (minPrice: any, maxPrice: any) => (dispatch: any) => {
        dispatch(filterDataPrice([minPrice, maxPrice]));
    };

export const filterByMuscle =
    (muscles: any, category: any) => (dispatch: any) => {
        dispatch(filterByMuscles([muscles, category]));
    };

export const filterByBrand = (brands: any) => (dispatch: any) => {
    dispatch(filterByBrands(brands));
};

export const openModal = (active: boolean) => (dispatch: any) => {
    dispatch(modalOpen(active));
};

export const openFilters = (active: boolean) => (dispatch: any) => {
    dispatch(openFilter(active));
};

export const getUsers = () => async (dispatch: any) => {
    axios("") // endpoint de todos los users
        .then((res) => dispatch(getAllUsers(res)))
        .catch((e) => console.log(e));
};

export const postUser = (payload: any) => async (dispatch: any) => {
    try {
        let json = await axios.post(`${Route || BASE_URL}/clients`, payload); // enpoint de post user
        return json;
    } catch (error) {
        console.log("--->", error);
    }
};

export const postElement =
    (payload: any, element: string) => (dispatch: any) => {
        try {
            let json = axios.post(`${BASE_URL}/${element}`, payload);
            console.log("Action");
            console.log(payload);
        } catch (error) {
            console.log(error);
        }
    };
