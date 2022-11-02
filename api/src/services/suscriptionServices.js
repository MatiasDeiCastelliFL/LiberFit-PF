const {Subscriptions}= require('../db') 
const crearSubscription = async (
    name,
    price,
    description
) => {
  const subscription = await Subscriptions.create({
    name,
    price,
    description
})
}
const obetnerTodasSuscriptions= async()=>{
  
  const suscription= await Subscriptions.findAll();
  return suscription
}

module.exports={ crearSubscription, obetnerTodasSuscriptions}
