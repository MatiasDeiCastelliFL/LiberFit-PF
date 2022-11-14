const {
    crearExercise,
    buscarExercise,
    updateExercise,
    destroyExercise,
} = require("../services/exerciseServices");
// const validate = require("../validation/validations");
const { validate } = require("../validation/validations");
const {busquedaDatActive,busquedaDatDesactive,contarDatoActivo,contarDatoInactivo,MostrarDatoMultipleActivo,MostrarDatoMultipleInactivo} = require("../Helpers/busqueda")
 const {Exercises,Locacions}= require("../db");
const getExercises = async (req, res) => {
    const datoEmail = await validate(req.body);
    try {
        const exercise = await buscarExercise();
        res.status(200).json(exercise);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const postExercise = async (req, res) => {
    try {
        const datoExercise = await crearExercise(req.body);
        res.status(200).json(datoExercise);
    } catch (error) {
        console.log(error);
    }
};
const putExercise = async (req, res) => {
    const { id } = req.params;
    try {
        let updatedExercise = await updateExercise(id, req.body);
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(400).json(error);
    }
};
const deleteExercise = (req, res) => {
    const { id } = req.params;
    try {
        let removeId = destroyExercise(id);
        res.status(200).send(`${destroyExercise}
        El entrenamiento fue borrado exitosamente`);
    } catch (error) {
        res.status(400).json(error);
    }
};
const FiltrarExecirseActivo = async (req, res) => {
    const usuarioActive = await busquedaDatActive(Exercises);

    res.status(200).json({ usuarioActive });
};

const FiltrarExecirseInactivo = async (req, res) => {
    const usuarioInactive = await busquedaDatDesactive(Exercises);

    res.status(200).json({ usuarioInactive });
};

const CantInacativo = async (req, res) => {
    const cantidadActivo = await contarDatoInactivo(Exercises);

    res.status(200).json({ cantidadActivo });
};

const CantActivo = async (req, res) => {
    const cantidadActivo = await contarDatoActivo(Exercises);

    res.status(200).json({ cantidadActivo });
};

/* Verifica que la cuenta este activa. si la cuenta esta activa le 
permitira desactivar si no le indicara que la cuenta ya se enceuntra desactivada*/

const inactivarExecirse = async (req, res) => {
    try {
        const { id } = req.body;
        const desactivarCuenta = await CuentaDesactivar(id, Exercises);
        if (desactivarCuenta === true) {
            await inactivarCuenta(id);

            res.status(200).json("La cuenta se desactivo correctamente");
        } else {
            res.status(400).json("La cuenta ya se encuentra desactivada");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

/* Verifica que la cuenta se encuentra desactivada, si esta la
 cuenta desactivada le va a permitr activa su cuenta sino le va a decir que su cuenta ya se encuentra activada*/
const activarExecirse = async (req, res) => {
    try {
        const { id } = req.body;

        const accountActive = await CuentaActiva(id, Exercises);
        if (accountActive === false) {
            await activarCuenta(id);
            res.status(200).json("La cuenta se activo correctamente");
        } else {
            res.status(400).json("La cuenta ya se encuentra activa");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};



module.exports = {
    postExercise,
    getExercises,
    putExercise,
    deleteExercise,
    FiltrarExecirseActivo,
    activarExecirse: activarExecirse,
    inactivarExecirse,
    FiltrarExecirseInactivo,
    CantInacativo,
    CantActivo,
};
