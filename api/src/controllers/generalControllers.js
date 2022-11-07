const axios = require("axios");
const json = require("../services/initializeData");
const api = require("./gym.json");
const sedes = require("./sedes.json");

const getApi = async (req, res) => {
    try {
        return res.status(200).json(api);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            message: "error al inicializar la base de datos",
        });
    }
};

const getData = async (req, res) => {
    try {
        // json.crearDesdeJsonAPaymentsDb();
        json.crearDesdeJsonAMachinesDb();
        json.crearDesdeJsonAProductsDb();
        json.crearDesdeJsonATrainingsDb();
        json.crearDesdeJsonARutinesDb();
        json.crearDesdeJsonAExerciseDb();
        json.crearDesdeJsonARolsDb();
        json.crearDesdeJsonASubscriptionsDb();
        json.crearDesdeJsonAEmployeesDb();
        json.crearDesdeJsonAClientsDb();
        json.crearDesdeJsonALocacionsDb();
        json.crearDesdeJsonAOwnersDb();
        json.crearDesdeJsonAGymsDb();
        return res.status(200).json("data base initialize");
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            message: "error al inicializar la base de datos",
        });
    }
};
const getlocacionesJson = async (req, res) => {
    res.send(sedes);
};


const createDBonfromatOfJSON = async (req, res) => {
    const Json = await json.createDBonfromatOfJSON();
    res.json(Json);
};

module.exports = { getApi, getData, getlocacionesJson, createDBonfromatOfJSON };
