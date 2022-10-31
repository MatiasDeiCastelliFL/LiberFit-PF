const { createClient, findClients, findClientByNameOrEmail, deleteClient } = require('../services/clientServices');
const { Clients } = require("../Models/Client")

const getClientsRequest = async (req, res) => {
    try {
        const { name, email } = req.query;
        // console.log("esto es name: " + name)
        // console.log("esto es email: " + email)

        if(email || name) {
            const dataClient = await findClientByNameOrEmail(name, email)
            res.status(200).json(dataClient)
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
