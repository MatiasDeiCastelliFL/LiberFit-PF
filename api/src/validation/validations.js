const { prototype } = require("mocha");
const { Rols } = require("../db");

// TODO recive un objecto de parametros desesctructurados desde service y
// retorna un array de strings como errores

async function validate(input) {
    let errors = new Array();
    // todos las propiedas de todos los modelos
    const {
        name,
        email,
        phone,
        password,
        active,
        image,
        RolId,
        code,
        repetition,
        series,
        video,
        muscle,
        address,
        avatar,
        amount,
        price,
        stock,
        description,
        size,
        brand,
        timeSlot,
    } = input;
    // const {name, email, phone, password, active, image, RolId} =employeesValues

    //valida que sea solo numero
    let valoresAceptados = /^[0-9]+$/;

    //expresion regular que sirve para validar que sea de tipo email
    let ValidacionEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    // const attributes = {
    //     name: "es el nombre",
    //     email: "es emain",
    //     phone: "es phone",
    //     password: "es password",
    //     code: "es code",
    // };

    for (const key in input) {
        if (key !== undefined) {
            const value = input[key];
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
                    }
                } else if (key === "phone") {
                    if (!value.match(valoresAceptados)) {
                        errors.push("Ingrese solo numero.");
                    }
                }
            }
        }
    }

    //Verificacion para lo que se trata de modelo roles

    if (input.RolId !== "") {
        const dato = await Rols.findOne({
            where: {
                id: input.RolId,
            },
        });

        const { name } = await dato;

        if (name === "No Suscripto") {
            errors.push(
                "El empleado debe tener un rol, puede ser secretario/a o Profesor/a"
            );
        }
    }
    return errors;
}

const CuentaActiva = async (id, modelo) => {
    const DatoUser = await modelo.findOne({ where: { id: id } });
    const { active } = await DatoUser;

    if (active) {
        return true;
    } else {
        return false;
    }
};

const CuentaDesactivar = async (id,modelo) => {
    const DatoUser = await modelo.findOne({ where: { id: id } });
    const { active } = await DatoUser;

    if (active) {
        return true;
    } else {
        return false;
    }
};

//Validación para evitar crear nuevos registros, en donde ya exista uno con el mismo EMAIL o PHONE.
const existeEmailYTelefono = async (input, modelo) => {
    console.log("MODELS: ", modelo);
    let errors = new Array();
    if (input.email) {
        const emailExiste = await modelo.findOne({
            where: {
                email: input.email,
            },
        });
        if (emailExiste) {
            errors.push(
                "El email ya se encuentra registrado. Ingrese uno nuevo"
            );
        }
    }

    if (input.phone) {
        const phoneRequire = await modelo.findOne({
            where: {
                phone: input.phone,
            },
        });
        if (phoneRequire) {
            errors.push(
                "El telefono ya se encuentra registrado. Ingrese uno nuevo"
            );
        }
    }

    return errors;
};

module.exports = {
    validate,
    CuentaActiva,
    CuentaDesactivar,
    existeEmailYTelefono,
};
