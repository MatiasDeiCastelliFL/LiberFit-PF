const { crearPayment, buscarPaymentTotal, ModificarPayment } = require("../services/paymentServices")
const {
  validate,
} = require("../validation/validations");

const postPayment = async (req, res) => {
  try {
    const {
      name,
      active,
      amount
    } = req.body

    const datoPayment = await crearPayment(
      name,
      active,
      amount
      
    )
    res.status(200).json(datoPayment)
  } catch (error) {
    console.log(error)
  }
}

const getPayment = async (req, res) => {
  const datoPaymentTotal = await buscarPaymentTotal();
  res.status(200).json({ datoPaymentTotal });
}

const modificarPayment = async (req, res) => {
  try {
    const {name, active, amount, id } = req.body
    if (!id) {
      res.status(400).json({ message: "El pago a modificar no existe" });
    } else {
      const paymentModificar = await ModificarPayment(name,active, amount, id);
      if (paymentModificar) {
        res.status(200).json({ message: "Dato modificado" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { postPayment, getPayment, modificarPayment }
