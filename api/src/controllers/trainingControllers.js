const {
    crearTraining,
    borrarTraining,
    actualizarTraining,
} = require("../services/trainingServices");

const getTrainings = (req, res) => {
    try {
        res.status(200).json('datos de training');
    } catch (error) {
        res.status(400).json(error);
    }
};
const getTraining = () => {
    const { id } = req.params;
    try {
        res.status(200).json('datos de training');
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
    getTrainings,
    getTraining,
    putTraining,
    deleteTraining,
};
