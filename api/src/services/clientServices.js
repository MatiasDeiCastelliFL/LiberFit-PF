const { Clients, Locacions, Payments, Subscriptions } = require("../db");
const bcrypt = require("bcrypt");
const { cloudinary } = require("../config/cloudinary.config");
const fs = require("fs-extra");

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
    const existe = await Clients.findOne({
        where: {
            email: `${email}`,
        },
    });
    if (!existe) {
        const cli = await Clients.create({
            name,
            phone,
            email,
            password,
            active,
            image,
            SubscriptionId,
            RolId,
        });
        const data = await Locacions.findOne({
            where: {
                name: `${locacion}`,
            },
        });
        await cli.addLocacions(data, { review: "5" });

        return cli;
    } else {
        return `el usuario ya existe`;
    }
    image.png;
};

const createReview = async (email, comment, rate, location) => {
    try {
        const clientByEmail = await Clients.findOne({
            where: {
                email: `${email}`,
            },
        });
        const LocationByName = await Locacions.findOne({
            where: {
                name: location,
            },
        });
        // En el caso de que se vaya a 
        // const LocationByName = await clientByEmail.getLocacions()
        await LocationByName.createLocacionReview({
            clientId: clientByEmail.id,
            rate,
            comment,
        });
    } catch (error) {
        console.error(error);
    }
};

const findClients = async () => {
    const clients = await Clients.findAll();
    return clients;
};

const getPaymentsInfo = async (idClient) => {
    let dataClient;
    if (idClient) {
        console.log(idClient);
        dataClient = await Payments.findAll({
            include: Clients,
            where: {
                ClientId: idClient,
            },
        });
    } else {
        dataClient = await Payments.findAll({
            include: Clients,
        });
    }
    return dataClient;
};

const getIdClienteSuscription = async (SubscriptionId) => {
    const TraerCuenta = await Clients.findAll({
        include: Subscriptions,
        where: {
            SubscriptionId: SubscriptionId,
        },
    });
    return TraerCuenta;
};

const findClientByNameAndOrEmail = async (name, email, id) => {
    if (name && email && id) {
        const dataClient = await Clients.findAll({
            where: {
                name: name,
                email: email,
                id: id,
            },
        });
        return dataClient;
    } else if (name || email || id) {
        if (name) {
            const dataClient = await Clients.findAll({
                where: {
                    name: name,
                },
            });
            return dataClient;
        } else if (email) {
            const dataClient = await Clients.findAll({
                where: {
                    email: email,
                },
            });
            return dataClient;
        } else {
            const dataClient = await Clients.findAll({
                where: {
                    id: id,
                },
            });
            return dataClient;
        }
    }
};

const updateClient = async (id, name, phone, email, password, image, RolId) => {
    const foundClient = await Clients.findOne({
        where: {
            id: id,
        },
    });

    // const encryptedPassword = await bcrypt.hash(password,15)

    if (foundClient) {
        if (name) await foundClient.update({ name: name });
        if (phone) await foundClient.update({ phone: phone });
        if (email) await foundClient.update({ email: email });
        if (password) await foundClient.update({ password: password });
        if (image) await foundClient.update({ name: name });
        if (RolId) await foundClient.update({ RolId: RolId });
    }
    return foundClient;
};

const updatePassword = async (id, password, oldPassword) => {
    const foundClient = await Clients.findOne({
        where: {
            id: id,
        },
    });
    // const encryptedOldPassword = await bcrypt.hash(oldPassword,15)
    // const encryptedPassword = await bcrypt.hash(password,15)

    if (foundClient) {
        if (oldPassword === foundClient.password) {
            await foundClient.update({ password: password });
        } else {
            return "Contraseña incorrecta";
        }
    }
    return foundClient;
};

const updateProfileImage = async (id, path) => {
    console.log("Entra al updateProfileImage");
    console.log(id);
    const foundClient = await Clients.findOne({
        where: {
            id: id,
        },
    });

    if (foundClient) {
        console.log("Entra al if");

        const url = await cloudinary.v2.uploader.upload(path);
        await fs.unlink(path);
        await foundClient.update({ image: url.secure_url });
    }

    return foundClient;
};

const deleteClient = async (id, name, email) => {
    if (id) {
        const deletedClient = await Clients.destroy({
            where: {
                id: id,
            },
        });
        return deletedClient;
    } else if (email) {
        const deletedClient = await Clients.destroy({
            where: {
                email: email,
            },
        });
        return deletedClient;
    } else {
        const deletedClient = await Clients.destroy({
            where: {
                name: name,
            },
        });
        return deletedClient;
    }
};

const inactivarCuenta=async(id)=>{

    await Clients.update({
      active:false,
    },{
      where:{
        id:id
      }
    })
  
    return "La cuenta se desactivo correctamente"
  }
  
  const activarCuenta=async(id)=>{
  
    Clients.update({
      active:true,
    },{
      where:{
        id:id
      }
    })
  
    return "La cuenta se activo correctamente"
  }

module.exports = {
    createClient,
    findClients,
    findClientByNameAndOrEmail,
    updateClient,
    updatePassword,
     getPaymentsInfo,
    updateProfileImage,
    deleteClient,
    getIdClienteSuscription,
    inactivarCuenta,
    activarCuenta
};
