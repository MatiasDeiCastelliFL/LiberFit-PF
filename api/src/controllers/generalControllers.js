const axios = require("axios");
const { Clients } = require("../db");
const api = require("./gym.json");

const getApi = async (req, res) => {
    try {
        const dataJsonClients = api[0].clients.map((e) => {
            return {
                name: e.name,
                phone: e.phone,
                email: e.email,
                password: e.password,
                active: e.active,
                image: e.image,
            };
        });
        console.log('file: generalControllers.js ~ line 18 ~ getApi ~ api keys', Object.keys(api[0]))
        console.log(
            "file: generalControllers.js ~ line 16 ~ dataJsonClients",
            dataJsonClients
        );
        await Clients.bulkCreate(dataJsonClients);
        return res.status(200).json(dataJsonClients);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getApi };
