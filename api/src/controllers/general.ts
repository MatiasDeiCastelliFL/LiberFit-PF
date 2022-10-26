import type * as E from 'express';
const axios = require("axios");

const api= require("./gim.json")

export const getApi = async(req:E.Request,res:E.Response)=>{
    
    try {
        // const datos= await axios.get(api);
        // console.log(datos);
        return res.status(200).json(api)
    } catch (error) {
        console.log(error)
    }


}


