const {
    crearTraining,
    borrarTraining,
    actualizarTraining,
    buscarTrainingPorId,
    buscarTrainings,
} = require("../services/trainingServices");

const getTraining = () => {
    const { name } = req.query;
    try {
        if (name) {
            const training = buscarTrainingPorId(name);
            return res.status(200).json(training);
        }
        const trainings = buscarTrainings();
        return res.status(200).json(trainings);
    } catch (error) {
        res.status(400).json(error);
    }
};

const postTraining = async (req, res) => {
    try {
        const { idClient, name, image, timeSlot } = req.body;
        const datoTraining = await crearTraining(
            idClient,
            name,
            image,
            timeSlot
        );
        res.status(200).json(datoTraining);
    } catch (error) {
        res.status(400).json(error);
    }
};
const putTraining = async (req, res) => {
    const { id } = req.params;
    try {
        let updatedTrancingId = actualizarTraining(id);
        res.status(200).json(updatedTrancingId);
    } catch (error) {
        res.status(400).json(error);
    }
};
const deleteTraining = async (req, res) => {
    const { id } = req.params;
    try {
        let removeId = borrarTraining(id);
        res.status(200).send("Entrenamiento borrado exitosamente");
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    postTraining,
    getTraining,
    putTraining,
    deleteTraining,
};
