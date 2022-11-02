const { Exercises } = require("../db");
const api = require("../controllers/gym.json");

const buscarExercise = async () => {
    const exercises = await Exercises.findAll();
    return exercises;
};

const crearExercise = async (body) => {
    try {
        const { name, repetition, series, video, image, muscle } = body;
        const ejercicio = await Exercises.create({
            name,
            repetition,
            series,
            video,
            image,
            muscle,
        });
        return ejercicio;
    } catch (error) {
        return error.errors.map((e) => e.message);
    }
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
    buscarExercise,
    updateExercise,
    destroyExercise,
};
