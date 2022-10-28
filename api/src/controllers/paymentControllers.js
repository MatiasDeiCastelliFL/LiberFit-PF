import crearPayment from '../services/paymentServices'

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

export default postPayment
