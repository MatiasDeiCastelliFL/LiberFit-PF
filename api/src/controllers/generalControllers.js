const axios = require("axios");
const api = require("./gym.json");

const getApi = async (req, res) => {
    try {
        return res.status(200).json(api);
    } catch (error) {
        console.log(error);
    }
};



module.exports = { getApi };
