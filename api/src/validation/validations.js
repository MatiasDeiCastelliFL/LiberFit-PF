const { prototype } = require("mocha");
const { Rols } = require('../db')
async function validate(input) {
    let errors= new Array()
    
    //valida que sea solo numero
    let valoresAceptados = /^[0-9]+$/;
    
    //expresion regular que sirve para validar que sea de tipo email
    let ValidacionEmail=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/


    if (!input.name) {
        errors.push("Nombre es requerido.");
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(input.name)) {
        errors.push("Ingrese solo letras en el campo nombre.");
    }

    if (input.email) {
        if(!ValidacionEmail.exec(input.email)){
            errors.push("Email incorrecto, por favor ingrese caracteres validos.");
        }
      
    } else {

        errors.push("Email es requerido.");
    }

    if(input.phone){
        if (!input.phone.match(valoresAceptados)){
            errors.push("Ingrese solo numero.");
        } 
    }else{
        errors.push("El numero de telefono es requerido.");
    }

    if(!input.password){
        errors.push("La password es requerida.");
    }



    //Verificacion para lo que se trata de modelo  roles

    if(!input.RolId){
        errors.push("Seleccione un rol")
    }
    else{
        const dato = await Rols.findByPk(input.RolId);
        console.log(dato)
        const {id}= await dato
        
        if(id=== input.RolId){
            errors.push("Seleccione un rol perteneciente a empleado. puede ser secretario/a o Profesor/a")
        }
    }
    return  errors
}


module.exports=validate;
