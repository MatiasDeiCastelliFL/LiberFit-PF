import crearMachine from '../services/machineServices'

const postMachine = async (req, res) => {
    try {
        const { name,
            image,
            muscle,
        } = req.body

        const datoMachine = await crearMachine(
            name,
            image,
            muscle,
        )
        res.status(200).json(datoMachine)
    } catch (error) {
        console.log(error)
    }
}

export default postMachine
