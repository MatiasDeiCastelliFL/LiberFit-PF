const crearExercise = require("../services/exerciseServices");

const getExercises = async (req, res) => {
    try {
        const exercises = [{}, {}];
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json(error);
    }
};
const postExercise = async (req, res) => {
    try {
        const { name, repetition, series, video, image, muscle } = req.body;

        const datoExercise = await crearExercise(
            name,
            repetition,
            series,
            video,
            image,
            muscle
        );
        res.status(200).json(datoExercise);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { postExercise, getExercises };
