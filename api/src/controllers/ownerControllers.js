const crearOwner = require("../services/ownerServices")
const postClient = async (req, res) => {
    try {
        const { 
            name,
            email,
            password,
            phone,
            avatar
        } = req.body

        const datoOwner= await crearOwner(
            name,
            email,
            password,
            phone,
            avatar
        )
        res.status(200).json(datoOwner)
    } catch (error) {
        console.log(error)
    }
}

module.exports = postClient
