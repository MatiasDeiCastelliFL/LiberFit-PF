const { Payments,Clients,Subscriptions } = require('../db')
const { monthName } = require("../Helpers/monthName.js");
const crearPayment = async (amount, ClientId, description) => {
  
  let subscriptionInfo= await Subscriptions.findOne({where:{
    id:2
  }})

  let SubscriptionId=subscriptionInfo.id
  let active=true

  let fechaActual=new Date()

  let day = fechaActual.getDate()
  let month = fechaActual.getMonth()
  let year = fechaActual.getFullYear()

  if ( (month + subscriptionInfo.duration) > 11){
    year = year+1
    month = month + subscriptionInfo.duration-12
  }else{
    month = month + subscriptionInfo.duration
  }

  
  let fechaFinalizacion = new Date(year,month,day)


  const DatoGenerado=await Payments.create({
    name: monthName(month-subscriptionInfo.duration),
    active:true,
    description:description,
    amount:amount,
    descripcion:subscriptionInfo.name,
    fechaFinalizacion:fechaFinalizacion,
    ClientId
  })


  const cliente= await Clients.findOne({
    where:{
      id:ClientId
    }
  })

  if(cliente.SubscriptionId !== SubscriptionId && active===true){
    await cliente.update({
      SubscriptionId:SubscriptionId,
    })
  }

}

const buscarPaymentTotal= async ()=>{
  
  const payments= await Payments.findAll();
  return payments
}

const ModificarPayment=async(active,id)=>{
  const encontrarPago= await Payments.findByPk(id)
  if(encontrarPago){  
    await Payments.update({
      active:active
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
