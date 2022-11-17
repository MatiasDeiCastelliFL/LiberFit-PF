const { prototype } = require("mocha");
const { Rols } = require("../db");

// recive un objecto de parametros desesctructurados desde service y
// retorna un array de strings como errores

async function validate(input, model) {
    let errors = new Array();
    
    // const {
        // repetition
    //     series,
    //     amount,
    //     price,g
    // } = input;

    //valida que el campo no este repetido
    async function repetition(model,dato,mensaje,key){

        console.log(model)
        const existingDato = await model.findOne({
            where: {
                [key]: dato,
            }
        });
        if (existingDato) {
           return  errors.push(mensaje);
        }    
    };

    //Validación par números aceptados:
    let valoresAceptados = /^[0-9]+$/;

    //Validación para formato email aceptado:
    let ValidacionEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


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
                    }else{
                        const mensaje="El email ya se encuentra registrado. Ingrese uno nuevo"
                        repetition(model,value,mensaje,key);
                       
                    }
                } else if (key === "phone") {
                    if (!value.match(valoresAceptados)) {
                        errors.push("Ingrese solo numero.");
                    } else {
                        const mensaje="El telefono ya se encuentra registrado. Ingrese uno nuevo"
                        repetition(model,value,mensaje,key);
                     
                    }
                }else if(key === "image"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "code"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }else{
                        const mensaje="El codigo ya se encuentra registrado. Ingrese uno nuevo"
                        repetition(model,value,mensaje,key);
                    }

                }else if(key === "video"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "muscle"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "address"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "avatar"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "price"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "stock"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }else{
                        if (!value.match(valoresAceptados)) {
                            errors.push("Ingrese solo numero.");
                        }
                    }

                }else if(key === "description"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "size"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "brand"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }else if(key === "timeSlot"){
                    if(value === ""){
                        errors.push(`${key} es requerido.`);
                    }

                }
            }
        }
    }

    //Verificamos que si se manda RolId por Body y este no es vacio, al crear un empleado no puede tener un RolId de Cliente o Propietario.

    if (input.RolId && input.RolId !== "") {
        
        if(model==="Employees"){
            if (input.RolId == 1 || input.RolId == 3 ) {
                errors.push(
                    "El empleado a crear debe tener un Rol distinto a 'Propietario' o 'Cliente'."
                );
            }
        }
    }

    // if(input.SubscriptionId && input.clientId ===""){
    //     errors.push("Ingrese un cliente")
    // }

    // if(input.LocacionId && input.LocacionId ===""){
    //     errors.push("Ingrese una locacion")
    // }

    // if(input.GymId && input.GymId ===""){
    //     errors.push("Ingrese un gimnacio")
    // }
    // if(input.EmployeeId && input.EmployeeId===""){
    //     errors.push("Ingrese seleccione un empleado")
    // }

    // if(input.MachineId && input.MachineId===""){
    //     errors.push("Ingrese seleccione una maquina")
    // }

    // if(input.ProductId && input.ProductId===""){
    //     errors.push("Ingrese seleccione uno o mas producto")
    // }

    // if(input.TrainingId && input.TrainingId===""){
    //     errors.push("Ingrese seleccione uno o mas entrenamiento")
    // }

    // if(input.ExerciseId && input.ExerciseId ===""){
    //     errors.push("Ingrese seleccione uno o mas ejercicio")
    // }


    
    return errors;
}

const CuentaActiva = async (id, model) => {
    const DatoUser = await model.findOne({ where: { id: id } });
    return DatoUser.active 
};

const CuentaDesactivar = async (id, model) => {
    const DatoUser = await model.findOne({ where: { id: id } });
    return DatoUser.active 
};

module.exports = {
    validate,
    CuentaActiva,
    CuentaDesactivar
};
