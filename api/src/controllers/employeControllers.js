const {
    crearEmpleado,
    buscarEmpleadoTotal,
    buscarEmpleadoPorNameAndCorreo,
    buscarEmpleadoPorName,
    buscaEmail,
    ModificarEmpleado,
    datoEliminado,
    inactivarCuenta,
    activarCuenta,
} = require("../services/employeServices");
const { Employees } = require("../db");

const {
    validate,
    CuentaActiva,
    CuentaDesactivar
} = require("../validation/validations");

const bcrypt = require("bcrypt");
const postEmpleado = async (req, res) => {
    try {
        
        const datoValidacion = await validate(req.body,Employees);
       
       

        if (datoValidacion.length > 0) {
            res.status(404).json(datoValidacion);
            
        } else {
            const { name, email, phone, password, active, image, RolId } = req.body;
            const passwordEncript = await bcrypt.hash(password, 15);

            const datoEmpleado = await crearEmpleado(
                name,
                email,
                phone,
                passwordEncript,
                active,
                image,
                RolId
            );
            res.status(200).json(datoEmpleado);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getEmpleado = async (req, res) => {
    const { name, email } = req.query;
    if (name && !email) {
        const DatoEmpleadoNombre = await buscarEmpleadoPorName(name);
        if (DatoEmpleadoNombre) {
            res.status(200).json({ DatoEmpleadoNombre });
        } else {
            res.status(400).json({ error: "Empleado no encontrado" });
        }
    } else {
        if (!name && email) {
            const DatoEmpleadoEmail = await buscaEmail(email);
            if (DatoEmpleadoEmail) {
                res.status(200).json({ DatoEmpleadoEmail });
            } else {
                res.status(400).json({ error: "Empleado no encontrado" });
            }
        } else {
            if (name && email) {
                const DatoPorEmailyNombre =
                    await buscarEmpleadoPorNameAndCorreo(name, email);
                if (DatoPorEmailyNombre) {
                    res.status(200).json({ DatoPorEmailyNombre });
                } else {
                    res.status(404).json({ error: "Empleado no encontrado." });
                }
            } else {
                const datoEmpleadoTot = await buscarEmpleadoTotal();
                res.status(200).json({ datoEmpleadoTot });
            }
        }
    }
};

const modificarEmpleado = async (req, res) => {
    try {
        const datoValidacion = validate(req.body);
        if (datoValidacion.length > 0) {
            res.status(400).json(datoValidacion);
        } else {
            const employeModif = await ModificarEmpleado(req.body);
            if (employeModif) {
                res.status(200).json({ message: "Dato modificado" });
            } else {
                res.status(400).json({
                    message: "El usuario a modificar no existe",
                });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.body;
        const employeeDelete = await datoEliminado(id);
        if (employeeDelete) {
            res.status(200).json("El usuario fue eliminado");
        } else {
            res.status(400).json("El usuario a eliminar no existe");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* Verifica que la cuenta este activa. si la cuenta esta activa le 
permitira desactivar si no le indicara que la cuenta ya se enceuntra desactivada*/

const inactivarEmployee = async (req, res) => {
    try {
        const { id } = req.body;
        const desactivarCuenta = await CuentaDesactivar(id, Employees);
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
const activarEmployee = async (req, res) => {
    try {
        const { id } = req.body;

        const accountActive = await CuentaActiva(id, Employees);
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
    postEmpleado,
    getEmpleado,
    modificarEmpleado,
    deleteEmployee,
    inactivarEmployee,
    activarEmployee,
};
