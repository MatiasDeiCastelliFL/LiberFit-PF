const { Trainings,Locacions } = require("../db");
const api = require("../controllers/gym.json");

const crearTraining = async (body) => {
    const { name, image, timeSlot,LocacionId } = body;

    try {
        const training = await Trainings.create({
            name,
            image,
            timeSlot,
        });


            await training.addLocacions(LocacionId);
        
      
    } catch (error) {
        return error;
    }
};

const buscarTrainingPorId = async (id) => {
    const training = await Trainings.findOne({
        where: { id },
    });
    return training;
};

const updateTraining = async (id, body) => {
    const { idClient, name, image, timeSlot } = body;
    try {
        let trainingToUpdate = await Trainings.findOne({ where: { id } });
        await trainingToUpdate.update({
            name,
            image,
            timeSlot,
        });
        return trainingToUpdate;
    } catch (error) {
        return error;
    }
};
const borrarTraining = async (id) => {
    try {
        let removeId = await Trainings.destroy({
            where: {
                id,
            },
        });
        return removeId;
    } catch (error) {
        return error;
    }
};

const buscarTrainings = async () => {
    try {
        let trainings = await Trainings.findAll();
        return trainings;
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
};
module.exports = {
    crearTraining,
    borrarTraining,
    updateTraining,
    buscarTrainingPorId,
    buscarTrainings,
};
