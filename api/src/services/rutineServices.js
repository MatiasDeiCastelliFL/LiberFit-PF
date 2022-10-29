const { Rutines } = require("../db");
const { Exercises } = require("../db");
const api = require("../controllers/gym.json");
const crearDesdeJsonARutinesDb = async () => {
    const dataJsonRutines = api[0].rutines.map((rutine) => {
        return {
            id: rutine.id,
            name: rutine.name,
        };
    });
    await Rutines.bulkCreate(dataJsonRutines);
};

const buscarRutines = async () => {
    try {
        let rutines = await Rutines.findAll();
        return rutines;
    } catch (error) {
        console.error(error);
    }
};

const crearRutine = async (body) => {
    const { name, nameExcersise, repetition, series, video, image, muscle } =
        body;
    const rutine = await Rutines.create({
        name,
    });
    const exercise = await Exercises.create({
        name: nameExcersise,
        repetition,
        series,
        video,
        image,
        muscle,
    });
    await rutine.addExercise(exercise);
};
module.exports = { crearRutine, buscarRutines, crearDesdeJsonARutinesDb };
