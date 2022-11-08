const { Payments,Clients } = require('../db')
const crearPayment = async (name,active, amount,ClientId,SubscriptionId) => {
  await Payments.create({
    name,
    active,
    amount,
    ClientId,
    SubscriptionId
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

const getIdClientePayments= async(id)=>{
  console.log("llegue",id);
  const TraerCuenta=await Clients.findAll({
      include: Payments,
      where:{
        id:id
      }
  })
  return TraerCuenta
}


module.exports = {crearPayment,buscarPaymentTotal, ModificarPayment,getIdClientePayments}
