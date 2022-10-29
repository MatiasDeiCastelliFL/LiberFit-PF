const crearExercise = require("../services/exerciseServices");
const { Exercises } = require("../db");
const api = require("./gym.json");

const getExercises = async (req, res) => {
    try {
        const dataJsonExercises = api[0].exercises.map((e) => {
            return {
                name: e.name,
                repetition: e.repetition,
                series: e.series,
                video: e.video,
                image: e.image,
                muscle: e.muscle,
            };
        });

        await Exercises.bulkCreate(dataJsonExercises);
        res.status(200).json(dataJsonExercises);
    } catch (error) {
        res.status(500).json(error);
    }
};
const postExercise = async (req, res) => {
    try {
        const datoExercise = await crearExercise(
            req.body
        );
        res.status(200).json(datoExercise);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { postExercise, getExercises };
