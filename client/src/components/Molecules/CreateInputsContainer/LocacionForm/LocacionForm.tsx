import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { postLocacion, getGym } from "../../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
    background: React.CSSProperties;
}

interface form {
    name: string;
    address: string;
    phone: number;
    GymId: string;
}

const LocacionForm = ({ background }: Props) => {
    const dispatch = useAppDispatch();
    const gym = useAppSelector((state) => state.data.gym);
    // console.log("esto es --->",sedes);
    const navigate = useNavigate();
    const cookies = new Cookies();

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
        console.log("sedes--->", data);
        dispatch(postLocacion(data))
            .then((response) => {
                console.log(response);
                Swal.fire({
                    icon: "success",
                    title: "Sede creada correctamente",
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
                    // navigate("/dashboard/admin")
                    window.location.href = "/dashboard/admin";
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
        dispatch(getGym({ token: cookies.get("token") }));
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
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="Direccion"
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.phone?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <input
                    type="text"
                    {...register("phone", { required: true })}
                    placeholder="Telefono..."
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                />
                {errors.password?.type === "required" && (
                    <p className="text-red-500">Este campo es requerido</p>
                )}

                <select
                    {...register("LocationId")}
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
                >
                    {gym?.map((elem: any, i: any) => (
                        <option key={i} value={elem.id}>
                            {elem.name}
                        </option>
                    ))}
                </select>

                <input
                    type="submit"
                    value="Crear Sede"
                    className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15 mt-10"
                    style={background}
                />
            </form>
        </div>
    );
};

export default LocacionForm;
