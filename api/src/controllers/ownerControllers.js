const crearOwner= require("../services/clientServices")
const postClient = async (req, res) => {
    try {
        const { 
            name,
            email,
            passwords,
            phone,
            avatar
        } = req.body

        const datoOwner= await crearOwner(
            name,
            email,
            passwords,
            phone,
            avatar
        )
        res.status(200).json(datoOwner)
    } catch (error) {
        console.log(error)
    }
}

module.exports = postClient
