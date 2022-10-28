import crearSubscription from '../services/suscriptionServices'

const postSuscription = async (req, res) => {
    try {
        const {
            name,
            price,
            description
        } = req.body

        const datoSuscription = await postSuscription(
            name,
            price,
            description
        )
        res.status(200).json(datoSuscription)
    } catch (error) {
        console.log(error)
    }
}

export default postSuscription
