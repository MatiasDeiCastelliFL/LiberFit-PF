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

const updateExercise = async (id, body) => {
    const { name, repetition, series, video, image, muscle } = body;
    try {
        let exerciseToUpdate = await Exercises.findOne({ where: { id } });
        await exerciseToUpdate.update({
            name,
            repetition,
            series,
            video,
            image,
            muscle,
        });
        return exerciseToUpdate;
    } catch (error) {
        return error;
    }
};
const destroyExercise = async (id) => {
    try {
        let removeId = await Exercises.destroy({
            where: {
                id,
            },
        });
        return removeId;
    } catch (error) {
        return error;
    }
};
module.exports = {
    crearExercise,
    crearDesdeJsonAExerciseDb,
    buscarExercise,
    updateExercise,
    destroyExercise,
};
