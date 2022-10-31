const { Clients,Locacions } = require('../db')

const createClient = async (
    name,phone,email,password,image,locacion
) => {
    const cliente = await Clients.create({
        name,phone,email,password,image
    })

  
    const location= await Locacions.findOne({ where: { name: `${locacion}` } })
    await cliente.addLocacions(location)
    return "Cliente cargado con éxito";
};


const findClients = async () => {
    const clients = await Clients.findAll()
    return clients
};

const findClientByNameAndOrEmail = async (name, email) => {
    if (name && email) {
        const dataClient = await Clients.findAll({
            where: {
                name: name,
                email: email
            }
        });
        return dataClient;

    } else if (name || email) {
        if(name) {
            const dataClient = await Clients.findAll({
                where: {
                    name: name
                }
            });
            return dataClient;

        } else if (email) {
            const dataClient = await Clients.findAll({
                where: {
                    email: email
                }
            });
            return dataClient;
        }
    }
};

const updateClient = async (name, phone, email, password, image) => {
    
};

const deleteClient = async (id, name, email) => {
    if (id) {
        const deletedClient =  await Clients.destroy({ 
            where: { 
                id: id 
            } 
        });
        return deletedClient;
    } else if (email) {
        const deletedClient =  await Clients.destroy({ 
            where: { 
                email: email 
            } 
        });
        return deletedClient;
    } else {
        const deletedClient =  await Clients.destroy({ 
            where: { 
                name: name 
            } 
        });
        return deletedClient;
    }
};

module.exports = {
    createClient, 
    findClients, 
    findClientByNameAndOrEmail, 
    updateClient,
    deleteClient 
};

