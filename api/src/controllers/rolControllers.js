const { crearRol, enviarRol, borrarRol,actualizarRol } = require('../services/RolServices')

const postRol = async (req, res) => {
    try {
        const { name } = req.body
        await crearRol(name)
        res.status(200).json({ msg: "Rol creado" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "Rol no creado" })
    }
}
const putRol = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        await actualizarRol(name, id)
        res.status(200).json({ msg: "Rol actualizado" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "Rol no actualizado" })
    }
}
const deleteRol = async (req, res) => {
    try {
        const { id } = req.params
        await borrarRol(id)
        res.status(200).json({ msg: "Rol eliminado" })
    } catch (error) {
        res.status(404).json({ msg: "Rol no se elimino" })
    }
}
const getRol = async (req, res) => {
    try {
        const datoRol = await enviarRol()
        res.status(200).json(datoRol)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { postRol, getRol, putRol, deleteRol } 
