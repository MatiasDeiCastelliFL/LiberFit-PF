import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { postUser } from "../../../App/Action/Action"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2"

interface Inputs {
  name: string;
  phone: string;
  email: string;
  password: string;
  // location: string;
}

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [pass, setPass] = useState<boolean>(false)

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(postUser(data))
    .then(response => {
      console.log(response)
      Swal.fire({
        icon: "success",
        title: 'Usuario creado correctamente',
        text: "Confirme su cuenta en su correo electronico",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate("/login")
    })
    .catch(error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Algo salió mal!',
      })
    })
  });

  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(https://fondosmil.com/fondo/4046.jpg)" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white opacity-90 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
            {/* Sing Up */}
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-red-400 text-2xl px-2">Liberfit</span>Gym
              </div>
              <div className="pt-4">
                <p className="font-bold text-red-400">
                  Debe regístrarse para continuar
                </p>
                <div className="border-2 w-14 border-red-400 inline-block mb-2"></div>
              </div>
              <form onSubmit={onSubmit} className="flex flex-col items-center">

                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Nombre y Apellido</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z\s]+$/
                    })}
                    placeholder="Ingrese su nombre"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.name?.type === "required" && (
                    <p>tu nickName es requerido</p>
                  )}
                  {errors.name?.type === "pattern" && (
                    <p>tu nickName no puede tener simbolos</p>
                  )}
                </div>

                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Teléfono</label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d/
                    })}
                    placeholder="Ingrese su teléfono"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.phone?.type === "required" && (
                    <p>tu phone es requerido</p>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <p>tu phone es solo numeros</p>
                  )}
                </div>

                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Dirección de Correo</label>
                  <input
                    type="text"
                    {...register("email", {
                      pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                      required: true,
                    })}
                    placeholder="ejemplo@gmail.com"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.email?.type === "required" && (
                    <p>tu email es requerido</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>tu email es incompleto</p>
                  )}
                </div>
                
                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Contraseña</label>
                  <div className="flex justify-between items-center">
                    <input
                    type={pass ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      pattern: /^[a-zA-Z0-9\_\-\+]+$/i,
                    })}
                    placeholder="Ingrese su contraseña"
                    className="bg-transparent text-sm focus:outline-none w-full border-b border-red-400 tracking-wider"
                    />
                    <div className="cursor-pointer"  onClick={() => setPass(!pass)}>
                      {
                        pass ?
                        <MdVisibility className="m-2" /> :
                        <MdVisibilityOff className="m-2" />
                      }
                    </div>
                  </div>
                </div>
                <div className="text-red-500 text-sm">
                  {errors.password?.type === "required" && (
                    <p>tu password es requerido</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>tu password no puede tener espacio</p>
                  )}
                </div>
                <input
                  type="submit"
                  value="Inscribirse"
                  className="text-red-400 border-2 border-red-400 rounded-full px-8 py-2 inline-block font-semibold 
                        hover:bg-red-400 hover:text-white"
                />
              </form>
            </div>
            {/*  */}
            <div className="w-2/5 bg-red-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hola amigo Fitness!</h2>
              <div className="border-2 w-10 border-whithe inline-block mb-2"></div>
              <p className="mb-2">¿Ya tienes una cuenta?</p>
              <Link
                to="/login"
                className="border-2 border-white rounded-full px-6 py-2 inline-block font-semibold 
                        hover:bg-white hover:text-red-500"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/home"
                className="border-2 border-white rounded-full px-10 py-2 m-2 inline-block font-semibold 
                        hover:bg-white hover:text-red-500"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
