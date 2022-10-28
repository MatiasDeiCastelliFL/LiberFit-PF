import crearTraining from '../services/trainingServices'

const postTraining = async (req, res) => {
    try {
        const {
            idClient,
            name,
            image,
            timeSlot
        } = req.body

        const datoTrainig = await postTraining(
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

export default postTraining
