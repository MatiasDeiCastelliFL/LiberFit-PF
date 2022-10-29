const { Rutines, Exercises, Trainings } = require("../db");

const api = require("../controllers/gym.json");
const { crearDesdeJsonAExerciseDb } = require("../services/exerciseServices");
const { crearDesdeJsonATrainingsDb } = require("../services/trainingServices");

const crearDesdeJsonARutinesDb = async () => {
    const dataJsonRutines = api[0].rutines.map((rutine) => {
        return {
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
    // crearDesdeJsonAExerciseDb();
    // crearDesdeJsonATrainingsDb();
    const { name, nameExcersise,nameTraining, repetition, series, video, image, muscle } =
        body;
   try {
	 const rutine = await Rutines.create({
	        name,
	    });
	    const exercise = await Exercises.findOne({
	        where: {
	            name: nameExcersise,
	        },
	    });
	    const training = await Trainings.findOne({
	        where: {
	            name:nameTraining,
	        },
	    });
	
	    
	    await rutine.addExercise(exercise);
	    await rutine.addTraining(training);
	
} catch (error) {
	console.error(error);
}
};

const updateRutine = async (id, body) => {
    const { nameExcersise, repetition, series, video, image, muscle } = body;
    try {
        let rutineToUpdate = await Rutines.findOne({ where: { id } });
        rutineToUpdate.update({
            nameExcersise,
            repetition,
            series,
            video,
            image,
            muscle,
        });
        return rutineToUpdate;
    } catch (error) {
        return error;
    }
};
module.exports = {
    crearRutine,
    buscarRutines,
    crearDesdeJsonARutinesDb,
    updateRutine,
};
