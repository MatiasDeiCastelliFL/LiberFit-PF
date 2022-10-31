const axios = require("axios");
const json = require("../services/initializeData");

const getApi = async (req, res) => {
    try {
        json.crearDesdeJsonAPaymentsDb()
        json.crearDesdeJsonAMachinesDb()
        json.crearDesdeJsonAProductsDb()
        json.crearDesdeJsonATrainingsDb()
        json.crearDesdeJsonARutinesDb()
        json.crearDesdeJsonAExerciseDb()
        json.crearDesdeJsonARolsDb()
        json.crearDesdeJsonASubscriptionsDb()
        json.crearDesdeJsonAClientsDb()
        json.crearDesdeJsonAEmployeesDb()
        json.crearDesdeJsonALocacionsDb()
        json.crearDesdeJsonAOwnersDb()
        json.crearDesdeJsonAGymsDb()
        return res.status(200).json('data base initialize');
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getApi };
