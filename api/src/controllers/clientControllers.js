const {
    createClient,
    findClients,
    findClientByNameAndOrEmail,
    updateClient,
    updatePassword,
    updateProfileImage,
    deleteClient,
    getIdClientePayments: getPaymentsInfo,
    getIdClienteSuscription,
    createReview,
} = require("../services/clientServices");
const { validate } = require("../validation/validations");
const { Clients, Payments } = require("../db");

const getClientsRequest = async (req, res) => {
    try {
        const { name, email, id } = req.query;

        if (email || name || id) {
            const dataClient = await findClientByNameAndOrEmail(
                name,
                email,
                id
            );

            if (dataClient.length !== 0) {
                res.status(200).json(dataClient);
            } else {
                res.status(400).json({
                    error: "No se encuentra un Cliente por ese NOMBRE o EMAIL.",
                });
            }
        } else {
            const clientsData = await findClients();
            res.status(200).json(clientsData);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getClientsPayments = async (req, res) => {
    try {
        const { id } = req.query;
        if (id) {
            const paymentsClient = await getPaymentsInfo(id);
            if (paymentsClient.length !== 0) {
                res.status(200).json(paymentsClient);
            } else {
                res.status(400).json({
                    error: "No hay pagos realizados por el cliente",
                });
            }
        } else {
            const paymentsClient = await getPaymentsInfo();
            res.status(200).json(paymentsClient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Envia un comentario y  una calificacion de una loaclizacion
const postReview = async (req, res) => {
    try {
        const { email, comment, rate, location } = req.body;

        const newReview = await createReview(email, comment, rate, location);
        res.status(200).json(newReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const postClientsRequest = async (req, res) => {
    try {
        const clientValidationErrors = await validate(req.body, Clients);

        if (clientValidationErrors.length > 0) {
            res.status(400).json(clientValidationErrors);
        } else {
            const {
                name,
                phone,
                email,
                password,
                active,
                image,
                SubscriptionId,
                RolId,
                locacion,
            } = req.body;
            const newClient = await createClient(
                name,
                phone,
                email,
                password,
                active,
                image,
                SubscriptionId,
                RolId,
                locacion
            );
            res.status(200).json(newClient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const putClientRequest = async (req, res) => {
    const { changePassword } = req.query;
    const { changeProfileImage } = req.query;
    try {
        if (changePassword) {
            const { id, password, oldPassword } = req.body;
            const updatedClient = await updatePassword(
                id,
                password,
                oldPassword
            );
            res.status(200).json(updatedClient);
        } else if (changeProfileImage) {
            console.log(req.file);
            const { path } = req.file;
            const { id } = req.body;
            const updateClient = await updateProfileImage(id, path);
            res.status(200).json(updateClient);
        } else {
            const { id, name, phone, email, password, image, RolId } = req.body;
            const updatedClient = await updateClient(
                id,
                name,
                phone,
                email,
                password,
                image,
                RolId
            );
            res.status(200).json(updatedClient);
        }
    } catch (error) {
        console.log("fgdfgdfg", error);
        res.status(500).send({ error: error.message });
    }
};

const deleteClientRequest = async (req, res) => {
    try {
        const { id, name, email } = req.body;

        if (id || name || email) {
            const deletedClient = await deleteClient(id, name, email);
            if (deletedClient) {
                res.status(200).json(`El cliente fue eliminado`);
            } else {
                res.status(400).json(
                    "El cliente a eliminar no existe o ya fue eliminado"
                );
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getClientsRequest,
    postClientsRequest,
    putClientRequest,
    deleteClientRequest,
    getClientsPayments,
    postReview,
};
