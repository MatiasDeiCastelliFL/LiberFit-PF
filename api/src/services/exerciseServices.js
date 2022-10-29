const { Exercises } = require("../db");
const deJsonARutinesDb = (async = () => {});
const crearDesdeJsonAExerciseDb = async () => {
    const exercises = api[0].exercises
        .map((location) => location.trainings)
        .flat(Infinity)
        .filter(
            (val, index, self) =>
                index === self.findIndex((ele) => ele.name === val.name)
        );
    await Exercise.bulkCreate(exercises);
};
const crearEmpleado = async (body) => {
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
module.exports = { crearEmpleado, crearDesdeJsonAExerciseDb };
