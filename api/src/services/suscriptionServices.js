import Subscriptions from '../db'
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
export default crearSubscription
