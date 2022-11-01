const { Rutines, Exercises, Trainings, Clients } = require("../db");

const api = require("../controllers/gym.json");
const {
    crearDesdeJsonAExerciseDb,
    crearDesdeJsonATrainingsDb,
} = require("./initializeData");

const buscarRutines = async () => {
    try {
        let rutines = await Rutines.findAll();
        return rutines;
    } catch (error) {
        console.error(error);
    }
};

const crearRutine = async (body) => {
    const { name, ClientId, EmployeeId, nameTraining, nameExcersise } = body;

    try {
        const rutine = await Rutines.create({
            name: name,
            ClientId: ClientId,
            EmployeeId,
            EmployeeId,
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
    const { nameExcersise,ClientName,EmployeeName} = body;
    try {
        let rutineToUpdate = await Rutines.findOne({ where: { id } });
        rutineToUpdate.update({
            nameExcersise,
            ClientName,
            EmployeeName,
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
                name: nameTraining,
            },
        });
        // Traer por nombre el cliente
        const cliente = await Clients.findOne({
            where: {
                id: ClientName,
            },
        });
        const empleado = await EMployees.findOne({
            where: {
                id: EmployeeName,
            },
        });

        await rutine.addEmployee(empleado);

        // await cliente.addRutine(rutine);

        await rutine.addExercise(exercise);
        await rutine.addTraining(training);
        return rutineToUpdate;
    } catch (error) {
        return error.errors.map((e) => e.message);
    }
};
module.exports = {
    crearRutine,
    buscarRutines,
    updateRutine,
};
