export function validate(input:any) {
    console.log(input.name)
  // ,email:string,phone:string,password:string,image:string
  let errors = {
    name: "",
    email: "",
    phone: "",
    password: "",
    account: "",
    image: "",
  };

  if (!input.name) {
    errors.name = "Nombre es requerido.";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(input.name)) {
    errors.name = "Ingrese solo letras en el campo nombre.";
  }

  if (input.email) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(input.email)) {
      errors.email = "Email incorrecto, por favor ingrese caracteres validos.";
    }
  } else {
    errors.email = "Email es requerido.";
  }
    console.log(errors);
  return errors;
}
