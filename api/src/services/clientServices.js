const { Clients,Locacions } = require('../db')

const createClient = async (
    name,
    phone,
    email,
    password,
    image,
    active,
    locacion
) => {
    const cliente = await Clients.create({
        name,
        phone,
        email,
        password,
        image
    })
  
    const location= await Locacions.findOne({ where: { name: `${locacion}` } })
    await cliente.addLocacions(location)
    return "Cliente cargado con éxito";
};

const findClients = async () => {
    const clients = await Clients.findAll()
    return clients
};

const findClientByNameOrEmail = async (name, email) => {
    console.log("esto es name: " + name)
    console.log("esto es email: " + email)

    

}

const deleteClient = async (id) => {
    const deletedClient =  await Clients.destroy({ 
        where: { 
            id: id 
        } 
    });
    return deletedClient
};

module.exports = {
    createClient, 
    findClients, 
    findClientByNameOrEmail, 
    deleteClient 
};

