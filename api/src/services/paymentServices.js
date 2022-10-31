const { Payments } = require('../db')
const crearPayment = async (membership, amount) => {
  await Payments.create({
    membership,
    amount,
  })
}

const buscarPaymentTotal= async ()=>{
  
  const payments= await Payments.findAll();
  return payments
}

const buscarPaymentMembership = async(name)=>{
  const payments= await Payments.findAll({
    where:{membership:name}
  });
  return payments
}

const ModificarPayment=async(DatoPayment)=>{

  const encontrarPago= await Payments.findByPk(DatoPayment.id)
  if(encontrarPago){
    
    await Payments.update({
      membership:DatoPayment.name,
      amount:DatoPayment.amount,    
    },{
      where:{
        id:DatoPayment.id
      }
    })
    return true;
  }else{
    return false
  }
}


module.exports = {crearPayment,buscarPaymentTotal, buscarPaymentMembership, ModificarPayment}
