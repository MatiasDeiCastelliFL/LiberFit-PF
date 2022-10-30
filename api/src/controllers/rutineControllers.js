const {
    crearRutine,
    buscarRutines,
    updateRutine,
} = require("../services/rutineServices");

const getRutine = async (req, res) => {
    try {
        const rutinas = await buscarRutines();
        res.status(200).json(rutinas);
    } catch (error) {
        console.error(error);
    }
};
const postRutine = async (req, res) => {
    try {
        const datoRutine = await crearRutine(req.body);
        res.status(200).json(datoRutine);
    } catch (error) {
        console.log(error);
    }
};
const putRutine = async (req, res) => {
  const {id}=req.params
    const datoRutine = await updateRutine(id, req.body);
    res.status(200).json(datoRutine);
};
const deleteRutine = async (req, res) => {
    try {
        destroyRutine(id);
        res.status(200).send("Rutina borrada exitosamente");
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { postRutine, getRutine, deleteRutine, putRutine };
