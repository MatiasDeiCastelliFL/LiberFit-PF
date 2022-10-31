const { createClient, findClients, findClientByNameAndOrEmail, deleteClient } = require('../services/clientServices');

const getClientsRequest = async (req, res) => {
    try {
        const { name, email } = req.query;

        if(email || name) {
            const dataClient = await findClientByNameOrEmail(name, email)
            console.log(dataClient)
            if (dataClient.length !== 0) {
                res.status(200).json(dataClient)
            } else {
                res.status(400).json({ error: "No se encuentra un Cliente por ese NOMBRE o EMAIL." });
            }
        } else {
            const clientsData = await findClients();
            res.status(200).json(clientsData);   
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const postClientsRequest = async (req, res) => {
    try {
        const { name, phone, email, password, image, locacion } = req.body;
        const newClient = await createClient(name, phone, email, password, image, locacion )

        res.status(200).json(newClient);
         
    } catch (error) {
       res.status(500).json({error: error.message})
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
        res.status(500).json({error: error.message})
    }
}

module.exports = { getClientsRequest, postClientsRequest, deleteClientRequest }
