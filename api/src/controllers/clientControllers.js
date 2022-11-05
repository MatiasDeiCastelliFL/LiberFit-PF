const { 
    createClient, 
    findClients, 
    findClientByNameAndOrEmail, 
    updateClient,
    updatePassword,
    deleteClient 
} = require('../services/clientServices');
const { validate } = require('../validation/validations');
const { Clients } = require("../db");

const getClientsRequest = async (req, res) => {
    try {
        const { name, email, id } = req.query;

        if(email || name || id) {
            const dataClient = await findClientByNameAndOrEmail(name, email, id);

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

        const clientValidationErrors = await validate(req.body, Clients);

        if (clientValidationErrors.length > 0) {
            res.status(400).json(clientValidationErrors);
        } else {
            const { name, phone, email, password, active, image, SubscriptionId, RolId, locacion } = req.body;
            const newClient = await createClient(name, phone, email, password,active,image,SubscriptionId,RolId,locacion);
            res.status(200).json(newClient);
        }

    } catch (error) {
       res.status(500).json({error: error.message});
    }
};

const putClientRequest = async (req, res) => {
    const {changePassword} = req.query;
    try {
        if (changePassword) {
            const { id, password, oldPassword } = req.body;
            const updatedClient = await updatePassword(id, password, oldPassword);
            res.status(200).json(updatedClient);
        }else {
            const { id, name, phone, email, password, image } = req.body;
            const updatedClient = await updateClient(id, name, phone, email, password, image);
            res.status(200).json(updatedClient);
        }
    } catch (error) {
        console.log('fgdfgdfg',error.message);
        res.status(500).send({error: error.message})
    }
}

const deleteClientRequest = async (req, res) => {
    try {
        const { id, name, email } = req.body;

        if (id || name || email) {
            const deletedClient = await deleteClient(id, name, email);
            if(deletedClient) {
                res.status(200).json(`El cliente fue eliminado`);
            } else {
                res.status(400).json("El cliente a eliminar no existe o ya fue eliminado");
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = { 
    getClientsRequest, 
    postClientsRequest, 
    putClientRequest,
    deleteClientRequest 
};
