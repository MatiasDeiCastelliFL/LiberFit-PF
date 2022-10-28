const crearClient = require('../services/clientServices')

const postClient = async (req, res) => {
    try {
        const { name,
            rol,
            phone,
            email,
            passwords,
            active,
            image
        } = req.body

        const datoClient = await crearClient(
            rol,
            phone,
            email,
            passwords,
            active,
            image
        )
        res.status(200).json(datoClient)
    } catch (error) {
        console.log(error)
    }
}

module.exports= postClient
