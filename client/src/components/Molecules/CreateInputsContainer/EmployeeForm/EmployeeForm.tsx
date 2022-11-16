import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import {
    getLocations,
    postElement,
    postEmployee,
} from "../../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Props {
    background: React.CSSProperties;
}

interface form {
    name: string;
    phone: number;
    email: string;
    password: string;
    active: boolean;
    image: string;
    RolId: string;
    Location: any;
}

const EmployeeForm = ({ background }: Props) => {
    const dispatch = useAppDispatch();
    const sedes = useAppSelector((state) => state.data.locations);
    // console.log("esto es --->",sedes);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const [image, setImage] = useState("");

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setImage(e.target.value);
        } catch (error) {
            console.log(error);
        }
    };
    const onSubmit = handleSubmit((data) => {
        console.log("employee--->", data);
        dispatch(postEmployee(data))
            .then((response) => {
                console.log(response);
                Swal.fire({
                    icon: "success",
                    title: "Usuario creado correctamente",
                    // text: "Confirme su cuenta en su correo electronico",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                    showConfirmButton: false,
                    timer: 2700,
                }).then((response) => {
                    navigate("/dashboard/admin");
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Algo salió mal!",
                });
            });
    });

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="flex justify-center">
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3"
            >
                <img src={logo} alt="logo" className=" h-20" />

                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="nombre completo"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.name?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Teléfono"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.phone?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <input
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    })}
                    placeholder="Email"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.email?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}
                {errors.email?.type === "pattern" && (
                    <p className="text-red-500">Este campo no es un email</p>
                )}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.password?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <input
                    type="hidden"
                    {...register("active", { required: true })}
                    placeholder="active"
                    value="true"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.active?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <select
                    {...register("RolId", { required: true })}
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                >
                    {/* <option value="1">Dueño</option> */}
                    <option value="2">Entrenador</option>
                    {/* <option value="3">Cliente</option> */}
                    <option value="4">Recepcionista</option>
                </select>
                {errors.RolId?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <select
                    {...register("LocationId")}
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                >
                    {sedes?.map((elem: any, i) => (
                        <option key={i} value={elem.id}>
                            {elem.name}
                        </option>
                    ))}
                </select>

                <input
                    type="submit"
                    value="Crear Empleado"
                    className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15 mt-10"
                    style={background}
                />
            </form>
        </div>
    );
};

export default EmployeeForm;
