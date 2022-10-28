const {Trainings} =require('../db')
const crearTraining = async (
    idClient,
    name,
    image,
    timeSlot
) => {
  try {
	const training = await Trainings.create({
	    idClient,
	    name,
	    image,
	    timeSlot
	})
  } catch (error) {
    console.error(error);
}
}
module.exports={crearTraining} 
