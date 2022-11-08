const { Payments,Clients,Subscriptions } = require('../db')
const crearPayment = async (name,active, amount,ClientId,SubscriptionId) => {
  
  let subscriptionInfo= await Subscriptions.findOne({where:{
     id:SubscriptionId
  }}) 
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
    name,
    active,
    amount:subscriptionInfo.price,
    SubscriptionId,
    fechaFinalizacion:fechaFinalizacion
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


  DatoGenerado.addClients(ClientId);
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
