export function validate(input) {
   
    let errors = {
        arreglo: new Array()
    };

    //valida que sea solo numero
    let valoresAceptados = /^[0-9]+$/;
    
    //expresion regular que sirve para validar que sea de tipo email
    let ValidacionEmail=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/


    if (!input.name) {
        errors.arreglo.push("Nombre es requerido.");
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(input.name)) {
        errors.arreglo.push("Ingrese solo letras en el campo nombre.");
    }


   

    if (input.email) {
        if(!ValidacionEmail.exec(input.email)){
            errors.arreglo.push("Email incorrecto, por favor ingrese caracteres validos.");
        }
      
    } else {

        errors.arreglo.push("Email es requerido.");
    }

    if(input.phone){
        if (!input.phone.match(valoresAceptados)){
            errors.arreglo.push("Ingrese solo numero.");
        } 
    }else{
        errors.arreglo.push("El numero de telefono es requerido.");
    }

    if(!input.password){
        errors.arreglo.push("La password es requerida.");
    }
   
    return errors;
}
