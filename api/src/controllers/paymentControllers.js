const axios = require("axios");

const { CLIENT_URL } = process.env;

const {
    PAYPAL_API,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
} = require("../config/config-paypal");

const {
    crearPayment,
    buscarPaymentTotal,
    ModificarPayment,
    getIdClientePayments,
    sendEmail
} = require("../services/paymentServices");

const {pagosActivo} = require("../Helpers/busqueda")
const { validate } = require("../validation/validations");

var idCliente = ''
var descripcion_plan = ''
var subscription_Id = ''
var oldLastDate = ''

const postPayment = async (req, res) => {
    try {
        const { name,amount,ClientId,subscriptionId} = req.body;

        const datoPayment = await crearPayment(amount,ClientId,name,subscriptionId);
        res.status(200).json(datoPayment);
    } catch (error) {
        console.log(error);
    }
};

const getPayment = async (req, res) => {
    const datoPaymentTotal = await buscarPaymentTotal();
    res.status(200).json(datoPaymentTotal);
};

const modificarPayment = async (req, res) => {
    try {
        const { name, active, amount, id } = req.body;
        if (!id) {
            res.status(400).json({ message: "El pago a modificar no existe" });
        } else {
            const paymentModificar = await ModificarPayment(
                name,
                active,
                amount,
                id
            );
            if (paymentModificar) {
                res.status(200).json({ message: "Dato modificado" });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Logica para la pasarela de pago con Paypal
const postCreateOrder = async (req, res) => {


    const { amount, description, ClientId, subscriptionId, old_LastDate} = req.query;
    idCliente = ClientId
    descripcion_plan = description
    subscription_Id = subscriptionId
    oldLastDate = old_LastDate
    const value = parseFloat(amount);
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: value,
                    },
                    description: description,
                },
                
            ],
            application_context: {
                brand_name: "LiberFit",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url: "http://localhost:3004/capture-order",
                cancel_url: "http://localhost:3004/cancel-order",
            },
        };

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        const {
            data: { access_token },
        } = await axios.post(
            `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
            params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                },
            }
        );

        const response = await axios.post(
            `${PAYPAL_API}/v2/checkout/orders`,
            order,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        res.send(response.data);
    } catch (error) {
        return res.status(500).send("Algo salio mal");
    }
};


const getCaptureOrder = async (req, res) => {
    try {
        const { token } = req.query;
        const response = await axios.post(
            `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                },
            } 
        );
    
        const { amount } = response.data.purchase_units[0].payments.captures[0];
        const description= response.data.purchase_units[0].shipping;
        const payments = response.data.purchase_units[0].payments
        const email = response.data.payer.email_address
        const name = response.data.payer.name.given_name
        console.log('Crear payment',oldLastDate)
        const datoPayment = await crearPayment(amount.value,idCliente,descripcion_plan, subscription_Id, oldLastDate);
        
        sendEmail(name, email)
        res.redirect('http://127.0.0.1:5173/paymentComplet');
    }catch (error) {
        res.status(500).send("Algo salio mal");
    }

};
const getCancelOrder = async (req, res) => {
    res.redirect('http://127.0.0.1:5173/paymentCancel');
};

// const completPayment = async (req, res) => {


const getIdClientePaymentss = async (req, res) => {
    const {id}=req.query
    const datoCliente= await pagosActivo()
    res.status(200).json(datoCliente)
};

module.exports = {
    postPayment,
    getPayment,
    modificarPayment,
    postCreateOrder,
    getCaptureOrder,
    getCancelOrder,
    getIdClientePaymentss
};
