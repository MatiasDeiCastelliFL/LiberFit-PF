const { Payments,Clients,Subscriptions } = require('../db')
const crearPayment = async (name,active,amount,ClientId,SubscriptionId) => {
  
  let subscriptionInfo= await Subscriptions.findOne({where:{
     id:SubscriptionId
  }})

  console.log(subscriptionInfo);
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


const getIdClientePayments= async(idClient)=>{
  let dataClient
  if (idClient) {
      console.log(idClient)
      dataClient = await Payments.findAll({
          include: Clients,
          where: {
              ClientId: idClient
          }
      });
  }else{
      dataClient = await Payments.findAll({
          include: Clients,
          
      });
  } 
  return dataClient;
}


module.exports = {crearPayment,buscarPaymentTotal, ModificarPayment,getIdClientePayments}
