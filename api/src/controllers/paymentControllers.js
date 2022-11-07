const axios = require("axios");
const {
    PAYPAL_API,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
} = require("../config/config-paypal");

const {
    crearPayment,
    buscarPaymentTotal,
    ModificarPayment,
} = require("../services/paymentServices");
const { validate } = require("../validation/validations");

const postPayment = async (req, res) => {
    try {
        const { name, active, amount } = req.body;

        const datoPayment = await crearPayment(name, active, amount);
        res.status(200).json(datoPayment);
    } catch (error) {
        console.log(error);
    }
};

const getPayment = async (req, res) => {
    const datoPaymentTotal = await buscarPaymentTotal();
    res.status(200).json({ datoPaymentTotal });
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
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "35.7",
                    },
                    description: "Plan Oro",
                },ç+A
                
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
    res.send("Capture orden");
};
const getCancelOrder = async (req, res) => {
    res.send("Cancel orden");
};

module.exports = {
    postPayment,
    getPayment,
    modificarPayment,
    postCreateOrder,
    getCaptureOrder,
    getCancelOrder,
};
