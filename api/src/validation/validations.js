const { prototype } = require("mocha");
const { Rols } = require("../db");

// TODO recive un objecto de parametros desesctructurados desde service y
// retorna un array de strings como errores

async function validate(input, model) {
    let errors = new Array();
    console.log("esto es input: " + input)

    // const {
    //     name,
    //     email,
    //     phone,
    //     password,
    //     active,
    //     image,
    //     RolId,
    //     code,
    //     repetition,
    //     series,
    //     video,
    //     muscle,
    //     address,
    //     avatar,
    //     amount,
    //     price,
    //     stock,
    //     description,
    //     size,
    //     brand,
    //     timeSlot,
    // } = input;

    //Validación par números aceptados:
    let valoresAceptados = /^[0-9]+$/;

    //Validación para formato email aceptado:
    let ValidacionEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    for (const key in input) {
        if (key !== undefined) {
            const value = input[key];

            console.log(value)
            if (typeof key === "string") {
                if (value === "") {
                    errors.push(`${key} es requerido.`);
                } else if (key === "name") {
                    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
                        errors.push("Ingrese solo letras en el campo nombre.");
                    }
                } else if (key === "email") {
                    if (!ValidacionEmail.exec(value)) {
                        errors.push(
                            "Email incorrecto, por favor ingrese caracteres validos."
                        );
                    }else{
                        const existingEmail = await model.findOne({
                            where: {
                                email: input.email,
                            }
                        });
                        if (existingEmail) {
                            errors.push(
                                "El email ya se encuentra registrado. Ingrese uno nuevo"
                            );
                        }
                    }
                } else if (key === "phone") {
                    if (!value.match(valoresAceptados)) {
                        errors.push("Ingrese solo numero.");
                    } else {
                        const existingPhone = await model.findOne({
                            where: {
                                phone: input.phone,
                            }
                        });
                        if (existingPhone) {
                            errors.push(
                                "El telefono ya se encuentra registrado. Ingrese uno nuevo"
                            );
                        }
                    }
                }
            }
        }
    }

    //Verificacion para lo que se trata de model roles

    if (input.RolId && input.RolId !== "") {
        const dato = await Rols.findOne({
            where: {
                id: input.RolId,
            },
        });

        const { name } = await dato;

        if (name === "Cliente") {
            errors.push(
                "El empleado debe tener un rol, puede ser secretario/a o Profesor/a"
            );
        }
    }
    return errors;
}

const CuentaActiva = async (id, model) => {
    const DatoUser = await model.findOne({ where: { id: id } });
    if (DatoUser) return DatoUser.active ? true : false;

    return false
};

const CuentaDesactivar = async (id, model) => {
    const DatoUser = await model.findOne({ where: { id: id } });
    const { active } = await DatoUser;

    if (active) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    validate,
    CuentaActiva,
    CuentaDesactivar
};
