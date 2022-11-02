const { Payments } = require('../db')
const crearPayment = async (name,active, amount) => {
  await Payments.create({
    name,
    active,
    amount
    
  })
}

const buscarPaymentTotal= async ()=>{
  
  const payments= await Payments.findAll();
  return payments
}

const ModificarPayment=async(active, amount, id,name)=>{
  const encontrarPago= await Payments.findByPk(id)
  if(encontrarPago){  
    await Payments.update({
      active:active,
      amount:amount,    
      name:name
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
