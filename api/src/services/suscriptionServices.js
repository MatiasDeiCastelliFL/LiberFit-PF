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
module.exports={ crearSubscription}
