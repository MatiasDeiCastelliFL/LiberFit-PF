const {
    createClient,
    findClients,
    findClientByNameAndOrEmail,
    updateClient,
    updatePassword,
    updateProfileImage,
    deleteClient,
    getPaymentsInfo,
    getIdClienteSuscription,
    createReview,
} = require("../services/clientServices");

const {busquedaDatActive,busquedaDatDesactive,contarDatoActivo,contarDatoInactivo,MostrarDatoMultipleActivo,MostrarDatoMultipleInactivo,MostrarDatorutinaConUser} = require("../Helpers/busqueda")
const { validate } = require("../validation/validations");
const { Clients, Payments,Locacions,Exercises } = require("../db");

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
        
        res.status(500).send({error: error.message})
    }
};

const deleteClientRequest = async (req, res) => {
    try {
        // const { id, name, email } = req.body;
        const {id} = req.params

        if (id) {
            // console.log("IDDD", id);
            // console.log("NAMEEE", name);
            const deletedClient = await deleteClient(id);
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

const FiltrarClienteActivo= async(req,res)=>{
    const usuarioActive= await busquedaDatActive(Clients);

    res.status(200).json({usuarioActive});
}

const FiltrarClienteInactivo= async(req,res)=>{
    const usuarioInactive= await busquedaDatDesactive(Clients);

    res.status(200).json({usuarioInactive});
}

const CantInacativo= async(req,res)=>{
    const cantidadActivo= await contarDatoInactivo(Clients)

    res.status(200).json({cantidadActivo});
}


const CantActivo= async(req,res)=>{
    const cantidadActivo= await contarDatoActivo(Clients)

    res.status(200).json({cantidadActivo});
}


/* Verifica que la cuenta este activa. si la cuenta esta activa le 
permitira desactivar si no le indicara que la cuenta ya se enceuntra desactivada*/

const inactivarCliente = async (req, res) => {


    try {
        const { id } = req.body;
        const desactivarCuenta = await CuentaDesactivar(id, Clients);
        if (desactivarCuenta === true) {
            await inactivarCuenta(id);

            res.status(200).json("La cuenta se desactivo correctamente");
        } else {
            res.status(400).json("La cuenta ya se encuentra desactivada");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

/* Verifica que la cuenta se encuentra desactivada, si esta la
 cuenta desactivada le va a permitr activa su cuenta sino le va a decir que su cuenta ya se encuentra activada*/
const activarCliente = async (req, res) => {
    try {
        const { id } = req.body;

        const accountActive = await CuentaActiva(id, Clients);
        if (accountActive === false) {
            await activarCuenta(id);
            res.status(200).json("La cuenta se activo correctamente");
        } else {
            res.status(400).json("La cuenta ya se encuentra activa");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const FiltrarClienteActivoConSede= async(req,res)=>{
    const usuarioInactive= await MostrarDatoMultipleActivo(Clients,Locacions);

    res.status(200).json({usuarioInactive});
}

const FiltrarRutinaConcliente= async(req,res)=>{
    const { id,idRutine } = req.body;

    if(id && idRutine){

        const usuarioInactive= await MostrarDatorutinaConUser(Rutines,Clients,Exercises,id,idRutine);
        res.status(200).json({usuarioInactive});

    }else{
        res.status(400).json({error:"No se ingresaron todos los parametros"})
    }

}


const FiltrarClienteInactivoConSede= async(req,res)=>{
    
    const usuarioInactive= await MostrarDatoMultipleInactivo(Clients,Locacions);

    res.status(200).json({usuarioInactive});
}
//FiltrarClienteInactivo,FiltrarClienteActivo,activarCliente,inactivarCliente } = require("../controllers/clientControllers

module.exports = { 
    getClientsRequest, 
    postClientsRequest, 
    putClientRequest,
    deleteClientRequest,
    getClientsPayments,
    postReview,
    FiltrarClienteInactivo,
    FiltrarClienteActivo,
    activarCliente,
    inactivarCliente,
    FiltrarClienteInactivoConSede,
    FiltrarClienteActivoConSede,
    CantActivo,
    CantInacativo,
    FiltrarRutinaConcliente
};
