import Training from '../db'
const crearTraining = async (
    idClient,
    name,
    image,
    timeSlot
) => {
  const training = await Training.create({
    idClient,
    name,
    image,
    timeSlot
})
}
export default crearTraining
