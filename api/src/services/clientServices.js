const { Clients, Locacions } = require('../db')
const bcrypt= require("bcrypt")

const createClient = async (
    name, 
    phone, 
    email, 
    password, 
    active, 
    image, 
    SubscriptionId = 1, 
    RolId = 3, 
    locacion = "Sin Sede Registrada"
) => {
    const existe= await Clients.findOne({
        where:{
            email:`${email}`
        }
})
  if(!existe){
    const cli=  await Clients.create({
        name, phone, email, password, active, image, SubscriptionId, RolId
    });
     const data = await Locacions.findOne({
        where:{
        name:`${locacion}`
        }
     })
     await cli.addLocacions(data)
    
    return cli;
}else{
    return  `el usuario ya existe` 
};
  }


const findClients = async () => {
    const clients = await Clients.findAll()
    return clients
};

const findClientByNameAndOrEmail = async (name, email, id) => {
    if (name && email && id) {
        const dataClient = await Clients.findAll({
            where: {
                name: name,
                email: email,
                id: id
            }
        });
        return dataClient;

    } else if (name || email || id) {
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
        } else {
            const dataClient = await Clients.findAll({
                where: {
                    id: id
                }
            });
            return dataClient;
        }
    }
};

const updateClient = async (id, name, phone, email, password, image) => {
    const foundClient = await Clients.findOne({
        where: {
            id: id
        }
    })

    const encryptedPassword = await bcrypt.hash(password,15)

    if (foundClient) {
        if(name) await foundClient.update({name: name})
        if(phone) await foundClient.update({phone: phone})
        if(email) await foundClient.update({email: email})
        if(password) await foundClient.update({password: encryptedPassword})
        if(image) await foundClient.update({name: name})
    }
    return foundClient;
};

const updatePassword = async (id, password, oldPassword) => {
    const foundClient = await Clients.findOne({
        where: {
            id: id
        }
    })
    const encryptedOldPassword = await bcrypt.hash(oldPassword,15)
    const encryptedPassword = await bcrypt.hash(password,15)

    if (foundClient) {
        if(encryptedOldPassword === foundClient.password) {
            await foundClient.update({password: encryptedPassword})
        } else {
            throw new Error("La contraseña ingresada no coincide con la actual")
        }
    }
    return foundClient;
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
    updatePassword,
    deleteClient 
};

