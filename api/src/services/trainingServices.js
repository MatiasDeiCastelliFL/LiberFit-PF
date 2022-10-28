const {Training} =require('../db')
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
module.exports={crearTraining} 
