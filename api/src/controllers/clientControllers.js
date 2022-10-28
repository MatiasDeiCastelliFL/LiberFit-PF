const {createClient, findClients } = require('../services/clientServices')

const getClients = async (req, res) => {
    try {
        const clientsData = await findClients();
        res.status(200).json({clientsData})                    
    } catch (error) {
            console.log(error)
    }
}

const postClients = async (req, res) => {
    try {
        const { name,
            rol,
            phone,
            email,
            passwords,
            active,
            image
        } = req.body

        const datoClient = await createClient(
            name,
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

module.exports = { getClients, postClients }
