const {crearTraining }= require('../services/trainingServices')

const postTraining = async (req, res) => {
    try {
        const {
            idClient,
            name,
            image,
            timeSlot
        } = req.body

        const datoTrainig = await crearTraining(
            idClient,
            name,
            image,
            timeSlot
        )
        res.status(200).json(datoTrainig)
    } catch (error) {
        console.log(error)
    }
}

module.exports= {postTraining}
