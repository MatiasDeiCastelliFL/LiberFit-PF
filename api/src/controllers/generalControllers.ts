import type * as E from 'express';
const axios = require("axios");

const api= require("./gym.json")

export const getApi = async(req:E.Request,res:E.Response)=>{
    
    try {
   
        return res.status(200).json(api)
    } catch (error) {
        console.log(error)
    }


}


