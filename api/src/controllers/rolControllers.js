import crearRol from '../services/RolServices'

const postRol = async (req, res) => {
    try {
        const { 
          name,
        } = req.body

        const datoRol= await crearRol(
            name,
            )
        res.status(200).json(datoRol)
    } catch (error) {
        console.log(error)
    }
}

export default postRol
