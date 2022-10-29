const crearPayment= require("../services/paymentServices")
const postPayment = async (req, res) => {
    try {
        const { 
          membership,
          amount
        } = req.body

        const datoPayment= await crearPayment(
            membership,
            amount
          )
        res.status(200).json(datoPayment)
    } catch (error) {
        console.log(error)
    }
}

module.exports = postPayment
