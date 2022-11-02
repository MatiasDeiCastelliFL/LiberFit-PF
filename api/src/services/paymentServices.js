const { Payments } = require('../db')
const crearPayment = async (active, amount) => {
  await Payments.create({
    active,
    amount,
  })
}

const buscarPaymentTotal= async ()=>{
  
  const payments= await Payments.findAll();
  return payments
}

const ModificarPayment=async(active, amount, id)=>{
  const encontrarPago= await Payments.findByPk(id)
  if(encontrarPago){  
    await Payments.update({
      active:active,
      amount:amount,    
    },{
      where:{
        id:encontrarPago.id
      }
    })
    return true;
  }else{
    return false
  }
}


module.exports = {crearPayment,buscarPaymentTotal, ModificarPayment}
