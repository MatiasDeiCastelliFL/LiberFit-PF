const Payments= require('../db')
const crearPayment = async (
  membership,
  amount
  ) => {
    const payments = await Payments.create({
      membership,
      amount
    })
  }
  module.exports = crearPayment
