const { Trainings } = require("../db");
const {cloudinary}=require('../config/cloudinary.config')
const fs= require('fs-extra')

const crearTraining = async (name,timeSlot,LocacionId,path ) => {


    try {

        const url = await cloudinary.v2.uploader.upload(path)
        const training = await Trainings.create({
            name,
            image:url.secure_url,
            timeSlot,
        });
    

    await training.addLocacions(LocacionId);
    await fs.unlink(path)
    return "Training creado"  

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

const updateTraining = async (id, name, timeSlot,path) => {

    try {
        const url = await cloudinary.v2.uploader.upload(path)
        let trainingToUpdate = await Trainings.findOne({ where: { id } });
        await trainingToUpdate.update({
            name,
            image:url.secure_url,
            timeSlot,
        });
        await fs.unlink(path)
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
