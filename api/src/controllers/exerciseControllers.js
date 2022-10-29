const {
    crearExercise,
    buscarExercise,
    crearDesdeJsonAExerciseDb,
} = require("../services/exerciseServices");

const api = require("./gym.json");

const getExercises = async (req, res) => {
    try {
        crearDesdeJsonAExerciseDb();
        const exercise = buscarExercise();
        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json(error);
    }
};
const postExercise = async (req, res) => {
    try {
        const datoExercise = await crearExercise(req.body);
        res.status(200).json(datoExercise);
    } catch (error) {
        console.log(error);
    }
};
const putExercise = () => {};
const deleteExercise = () => {};

module.exports = { postExercise, getExercises, putExercise, deleteExercise };
