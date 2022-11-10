const { Payments,Clients,Subscriptions } = require('../db')
const { monthName } = require("../Helpers/monthName.js");
const emailjs = require('emailjs-com');
const axios = require('axios');
const { SERVICE_ID, TEMPLATE_ID, USER_ID, ACCESS_TOKEN} = process.env;

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



const sendEmail = async (name, email) => {

  const data = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    accessToken:ACCESS_TOKEN,
    template_params:{
      reply_to:email,
      message: 'Pago realizado',
      to_name: name,
    }

  }

  await axios.post(`https://api.emailjs.com/api/v1.0/email/send`,data)
  .then (res => {
    console.log(res.status);
  }
  )

};

module.exports = {crearPayment,buscarPaymentTotal, ModificarPayment,getIdClientePayments, sendEmail}
