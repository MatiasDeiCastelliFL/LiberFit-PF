const {crearRutine} =require('../services/rutineServices') 

const postRutine = async (req, res) => {
    try {
        const { 
          name,
        } = req.body

        const datoRutine= await crearRutine(
            name,
            )
        res.status(200).json(datoRol)
    } catch (error) {
        console.log(error)
    }
}

module.exports={postRutine} 
