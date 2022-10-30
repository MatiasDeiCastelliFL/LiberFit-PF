const { Rutines, Exercises, Trainings } = require("../db");

const api = require("../controllers/gym.json");
const { crearDesdeJsonAExerciseDb ,crearDesdeJsonATrainingsDb} = require("./initializeData");


const buscarRutines = async () => {
    try {

        let rutines = await Rutines.findAll();
        return rutines;
    } catch (error) {
        console.error(error);
    }
};

const crearRutine = async (body) => {
    console.log(body)
    const { name,ClientId ,EmployeeId,nameTraining,nameExcersise} =
        body;

        
   try {
    
        
	    const rutine = await Rutines.create({
	        name:name,
            ClientId:ClientId,
            EmployeeId,EmployeeId
            
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
	
	    
	    // await rutine.addExercise(exercise);
	    // await rutine.addTraining(training);
	
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
        const exercise = await Exercises.findOrCreate({
	        where: {
	            name: nameExcersise,
	        },
	    });
	    const training = await Trainings.findOrCreate({
	        where: {
	            name:nameTraining,
	        },
        });
        await rutine.addExercise(exercise);
	    await rutine.addTraining(training);
        return rutineToUpdate;
    } catch (error) {
        return error.errors.map(e=>e.message);
    }
};
module.exports = {
    crearRutine,
    buscarRutines,
    updateRutine,
};
