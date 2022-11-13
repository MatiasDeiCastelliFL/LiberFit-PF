const { Rutines, Exercises, Trainings, Clients,Employee } = require("../db");

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
            EmployeeId:EmployeeId,
        });
	   
	    await rutine.addExercises(nameExcersise);
	    await rutine.addTraining(nameTraining);
} catch (error) {
	console.error(error);
}
};

const updateRutine = async (id, body) => {
    const { name,EmployeeName} = body;
    try {
        let rutineToUpdate = await Rutines.findOne({ where: { id } });
        rutineToUpdate.update({
            name,
            EmployeeId:EmployeeName
        });

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
