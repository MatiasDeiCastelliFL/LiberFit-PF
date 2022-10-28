import crearOwner from '../services/ownerServices'

const postClient = async (req, res) => {
    try {
        const { 
            name,
            email,
            passwords,
            phone,
            avatar
        } = req.body

        const datoOwner= await crearOwner(
            name,
            email,
            passwords,
            phone,
            avatar
        )
        res.status(200).json(datoOwner)
    } catch (error) {
        console.log(error)
    }
}

export default postClient
