const {
    crearExercise,
    buscarExercise,
    updateExercise,
    destroyExercise,
} = require("../services/exerciseServices");
// const validate = require("../validation/validations");
const { validate } = require("../validation/validations");
const getExercises = async (req, res) => {
    const datoEmail = await validate(req.body);
    try {
        const exercise = await buscarExercise();
        res.status(200).json(exercise);
    } catch (error) {
        console.error(error);
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
const putExercise = async (req, res) => {
    const { id } = req.params;
    try {
        let updatedExercise = await updateExercise(id, req.body);
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(400).json(error);
    }
};
const deleteExercise = (req, res) => {
    const { id } = req.params;
    try {
        let removeId = destroyExercise(id);
        res.status(200).send(`${destroyExercise}
        El entrenamiento fue borrado exitosamente`);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { postExercise, getExercises, putExercise, deleteExercise };
