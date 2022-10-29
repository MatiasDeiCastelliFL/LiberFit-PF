const { Exercises } = require("../db");
const api = require("../controllers/gym.json");

const crearDesdeJsonAExerciseDb = async () => {
    const exercises = api[0].exercises.map((e) => {
        return {
            name: e.name,
            repetition: e.repetition,
            series: e.series,
            video: e.video,
            image: e.image,
            muscle: e.muscle,
        };
    });
    console.log(
        "file: exerciseServices.js ~ line 5 ~ crearDesdeJsonAExerciseDb ~ exercises",
        exercises
    );
    await Exercises.bulkCreate(exercises);
};

const buscarExercise = async () => {
    const exercises = await Exercises.findAll();
    return exercises;
};

const crearExercise = async (body) => {
    const { name, repetition, series, video, image, muscle } = body;
    const ejercicio = await Exercises.create({
        name,
        repetition,
        series,
        video,
        image,
        muscle,
    });
    console.log(ejercicio);
};
module.exports = { crearExercise, crearDesdeJsonAExerciseDb, buscarExercise };
