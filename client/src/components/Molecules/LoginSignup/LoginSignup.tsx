import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface Inputs {
  fullName: string;
  username: string;
  phone: string;
  email: string;
  password: string;
}

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
                  regístrate para continuar
                </p>
                <div className="border-2 w-14 border-red-400 inline-block mb-2"></div>
              </div>
              <form onSubmit={onSubmit} className="flex flex-col items-center">
                <div className="w-64 p-2 flex flex-col mb-2">
                  <label className=" text-left">Full Name</label>
                  <input
                    type="text"
                    {...register("fullName", {
                      // validate: validator,
                      required: true,
                    })}
                    placeholder="Ibra Cardozo"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.fullName?.type === "required" && (
                    <p>tu nickName es requerido</p>
                  )}
                  {errors.fullName?.type === "validate" && (
                    <p>tu nickName no puede tener espacio</p>
                  )}
                </div>
                <div className="w-64 p-2 flex flex-col mb-2">
                  <label className=" text-left">Phone</label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: true,
                    })}
                    placeholder="+54388123"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.phone?.type === "required" && (
                    <p>tu phone es requerido</p>
                  )}
                </div>
                <div className="w-64 p-2 flex flex-col mb-2">
                  <label className=" text-left">Email address</label>
                  <input
                    type="text"
                    {...register("email", {
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      required: true,
                    })}
                    placeholder="ibracardozo15@gmail.com"
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
                <div className="w-64 p-2 flex flex-col mb-2">
                  <label className=" text-left">Username</label>
                  <input
                    type="password"
                    {...register("username", {
                      required: true,
                    })}
                    placeholder="password"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.username?.type === "required" && (
                    <p>tu username es requerido</p>
                  )}
                </div>
                <div className="w-64 p-2 flex flex-col mb-2">
                  <label className=" text-left">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="bg-transparent text-sm focus:outline-none border-b border-red-400 tracking-wider"
                  />
                </div>
                <div className="text-red-500 text-sm">
                  {errors.password?.type === "required" && (
                    <p>tu password es requerido</p>
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
              <h2 className="text-3xl font-bold mb-2">Hola amigo Gym!</h2>
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
