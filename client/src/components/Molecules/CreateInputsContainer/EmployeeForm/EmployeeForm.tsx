import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { useAppDispatch } from "../../../../App/Hooks/Hooks";
import { postEmployee } from "../../../../App/Action/Action";
// import { postEmployee } from "../../../App/Action/Action"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2"

interface Inputs {
  name: string;
  phone: string;
  email: string;
  password: string;
  // location: string;
}

const EmployeeForm  = () => {
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
    dispatch(postEmployee(data))
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
    
    <form onSubmit={onSubmit} className="flex flex-col items-center">

                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Full Name</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z\s]+$/
                    })}
                    placeholder="Ibra Cardozo"
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
                  <label className=" text-left">Phone</label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d/
                    })}
                    placeholder="54388123"
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
                  <label className=" text-left">Email address</label>
                  <input
                    type="text"
                    {...register("email", {
                      pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
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
                
                <div className="w-64 p-2 flex flex-col mb-1">
                  <label className=" text-left">Password</label>
                  <div className="flex justify-between items-center">
                    <input
                    type={pass ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      pattern: /^[a-zA-Z0-9\_\-\+]+$/i,
                    })}
                    placeholder="password"
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

  );
};

export default EmployeeForm;


// import React, { useEffect, useState } from "react";
// import logo from "../../../../assets/IMG/LIBERFIT_2.png";
// import { postElement } from "../../../../App/Action/Action"
// import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
// import { useForm, Controller } from "react-hook-form";
// import Select  from  "react-select";

// interface Props {
//     background: React.CSSProperties
// }

// // interface form {
// //     name: string,
// //     phone: number,
// //     email: string,
// //     password: string,
// //     active: boolean,
// //     image: string,
// //     RolId: string,
// // }

// const EmployeeForm = ({background}:Props) => {

//     const dispatch = useAppDispatch()
//     const { data } =  useAppSelector((state) => state)
//     const { register, handleSubmit, formState: { errors }, control } = useForm();
//     const [image, setImage] = useState("")

//     const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
//         try {
//             setImage(e.target.value)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     function onSubmit (data: any){
//         const body = {
//             name: data.name,
//             phone: data.phone,
//             email: data.email,
//             password: data.password,
//             active: data.active,
//             RolId: data.RolId,
//         }

//         dispatch(postElement(body, "empleado"))
//     }

//     useEffect(() => {
        
//     }, [image])

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
//             <img src={logo} alt="logo" className="h-10" />

//             <input  type="text" 
//                     {...register('name', {required:true})} 
//                     placeholder='nombre' 
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.name?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
            
//             <input  type="number" 
//                     {...register('phone', {required:true})} 
//                     placeholder='Teléfono' 
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.phone?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

//             <input  type="number" 
//                     {...register('email', {required:true})} 
//                     placeholder='Email' 
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.email?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

//             <input  type="text"
//                     {...register('password', {required:true})}
//                     placeholder='Contraseña'
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.password?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

//             <input  type="text"
//                     {...register('active', {required:true})}
//                     placeholder='active'
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.active?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

//             <input  type="text" 
//                     {...register('RolId', {required:true})}
//                     placeholder='Rol' 
//                     className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
//             />
//             {errors.RolId?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

//             <img src={image} alt="" className="border h-20 w-40"/>

//             <input type="submit" value='Crear Empleado' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
//         </form>

        
//     );
// }


// export default EmployeeForm;