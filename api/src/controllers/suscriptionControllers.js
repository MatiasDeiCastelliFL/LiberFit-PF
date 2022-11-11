const {crearSubscription, obetnerTodasSuscriptions} =require('../services/suscriptionServices')

const getAllSuscription = async(req, res)=> {
    console.log("Entras")
    const allSuscription = await obetnerTodasSuscriptions();
    res.status(200).json(allSuscription);
}

const postSuscription = async (req, res) => {
    try {
        const {
            name,
            price,
            description
        } = req.body

        const datoSuscription = await crearSubscription(
            name,
            price,
            description
        )
        res.status(200).json(datoSuscription)
    } catch (error) {
        console.log(error)
    }
}

module.exports={getAllSuscription, postSuscription } 
