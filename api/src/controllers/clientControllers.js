const {createClient, findClients, deleteClient } = require('../services/clientServices')

const getClientsRequest = async (req, res) => {
    try {
        const clientsData = await findClients();
        res.status(200).json({clientsData})                    
    } catch (error) {
            console.log(error)
    }
}

const postClientsRequest = async (req, res) => {
    try {
        const { 
            name,
            rol,
            phone,
            email,
            passwords,
            active,
            image
        } = req.body

        const dataClient = await createClient(
            name,
            rol,
            phone,
            email,
            passwords,
            active,
            image
        )
        res.status(200).json(dataClient)
    } catch (error) {
        console.log(error)
    }
}

const deleteClientRequest = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedClient = await deleteClient(id);

        if(deletedClient) {
            res.status(200).json("El cliente fue eliminado")
        } else {
            res.status(400).json("El cliente a eliminar no existe o el ID es incorrecto")
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = { getClientsRequest, postClientsRequest, deleteClientRequest }
