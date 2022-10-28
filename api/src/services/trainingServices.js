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
module.exports = { crearTraining, borrarTraining, actualizarTraining };
