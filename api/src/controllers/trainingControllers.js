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
        const {name, timeSlot,LocacionId }= req.body
        
        const {path}= req.file
        console.log(path);
        const datoTraining = await crearTraining(name, timeSlot,LocacionId,path );
        res.status(200).json(datoTraining);
    } catch (error) {
        res.status(400).json(error);
    }
};

const putTraining = async (req, res) => {
    const { id } = req.params;
    const { path } = req.file;
    const { name, timeSlot } = req.body;
    

    try {
        let updatedTrancingId = await updateTraining(id, name, timeSlot,path);
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
