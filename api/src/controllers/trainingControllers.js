const {
    crearTraining,
    borrarTraining,
    updateTraining,
    buscarTrainingPorId,
    buscarTrainings,
} = require("../services/trainingServices");

const getTraining = async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const training = buscarTrainingPorId(name);
            return res.status(200).json(training);
        }
        const trainings = await buscarTrainings();
        return res.status(200).json(trainings);
    } catch (error) {
        res.status(400).json(error);
    }
};

const postTraining = async (req, res) => {
    try {
        const datoTraining = await crearTraining(req.body);
        res.status(200).json(datoTraining);
    } catch (error) {
        res.status(400).json(error);
    }
};

const putTraining = async (req, res) => {
    const { id } = req.params;
    try {
        let updatedTrancingId = await updateTraining(id, req.body);
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
