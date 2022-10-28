import Payments from '../db'
const crearPayment = async (
    membership,
    amount
) => {
  const payments = await Payments.create({
    membership,
    amount
})
}
export default crearPayment
