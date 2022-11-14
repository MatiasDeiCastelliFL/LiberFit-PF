const { crearRol, enviarRol, borrarRol,actualizarRol } = require('../services/rolServices')

const postRol = async (req, res) => {
    try {
        const { name } = req.body
        const createdRole = await crearRol(name)
        if (createdRole) {
            res.status(200).json({ msg: "El Rol fue creado con éxito." })
        } else {
            res.status(404).json({ msg: "El rol ya existe, debe elegir otro nombre." })
        }
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


module.exports = { postRol, getRol, putRol, deleteRol}