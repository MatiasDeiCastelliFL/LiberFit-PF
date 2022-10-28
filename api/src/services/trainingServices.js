const { Trainings } = require("../db");
const crearTraining = async (idClient, name, image, timeSlot) => {
    try {
        const training = await Trainings.create({
            idClient,
            name,
            image,
            timeSlot,
        });
        return training;
    } catch (error) {
        return error;
    }
};
const buscarTrainingPorId = async (id) => {
    const training = await Trainings.findOne({
        where:{id}
    })
    return training
}

const actualizarTraining = async (idClient, name, image, timeSlot) => {
    try {
        let updatedTraining = await Trainings.update({
            idClient,
            name,
            image,
            timeSlot,
        });
        return updatedTraining;
    } catch (error) {
        return error;
    }
};
const borrarTraining = async (name) => {
    try {
        let removeId = await Trainings.destroy({
            where: {
                name,
            },
        });
        return removeId;
    } catch (error) {
        return error;
    }
};
const buscarTrainings = async () => {
    try {
        let trainings = await Trainings.findAll()
        return trainings
    } catch (error) {
        return error
    }
}
module.exports = { crearTraining, borrarTraining, actualizarTraining,buscarTrainingPorId ,buscarTrainings};
