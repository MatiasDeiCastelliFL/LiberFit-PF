import React, { useEffect, useState } from "react";
import logo from "../../../../assets/IMG/LIBERFIT_2.png";
import { getLocations, postTraining } from "../../../../App/Action/Action"
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";
import { useForm, Controller } from "react-hook-form";
import Select  from  "react-select";
import Swal from "sweetalert2"

interface Props {
    background: React.CSSProperties
}

interface form {
    name: string,
    timeSlot: string,
    Locacion: any,
}

const TrainingsForm = ({background}:Props) => {

    const dispatch = useAppDispatch()
    // const { data } =  useAppSelector((state) => state)
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [image, setImage] = useState("")
    const sedes =  useAppSelector((state) => state.data.locations)


    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setImage(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit =  handleSubmit((data) => {
        console.log("Entrenamiento--->",data);
        dispatch(postTraining(data))
        .then(response => {
          console.log(response)
          Swal.fire({
            icon: "success",
            title: 'Usuario creado correctamente',
            // text: "Confirme su cuenta en su correo electronico",
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: false,
            timer: 2700
          })
          .then(response => {
            // navigate("/dashboard/admin")
          }) 
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

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4  gap-3">
            <img src={logo} alt="logo" className="h-10" />

            <input  type="text" 
                    {...register('name', {required:true})} 
                    placeholder='nombre' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.name?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
            

            <input  type="text"
                    {...register('timeSlot', {required:true})}
                    placeholder='Horario'
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.timeSlot?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}

            {/* <Controller
                control = {control}
                rules={{required:true}}
                {...register('LocacionId', {required:true})}
                render={({ field }) => (
                    <Select
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                fontSize: "1rem",
                                "&:hover": {
                                    borderColor: "none",
                                },
                            }),
                            option: (provided) => ({
                                ...provided,
                                fontSize: "1rem",
                                border: "1px solid transparent",
                                margin: "0",
                                padding: "0",
                                color: "#4B5563",
                                width: "100%",
                                height: "80%",
                            }),
                            multiValue: (provided) => ({
                                ...provided,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0",
                                height: "20px",
                            }),
                            menu: (provided) => ({
                                ...provided,
                                backgroundColor: "white",
                            }),
                        }}
                        className=" font-sans text-xl border border-cyan-600 rounded-full font-light h-fit w-full text-gray-500"
                        {...field}
                        placeholder="sedes"
                        options=
                            {
                                data.locations.map((location: any) => {
                                    return { value: location.id, label: location.name }
                                })
                            }
                    />
                )}
            />
            {errors.LocacionId?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>} */}

            <input  type="text" 
                    {...register('path', {required:true})}
                    onChange={handleImage} 
                    placeholder='imagen' 
                    className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500"
            />
            {errors.image?.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
            <select {
              ...register("LocationId")
            } className="px-4 font-sans text-xl border border-cyan-600 rounded-full font-light w-full text-gray-500">
              {
                sedes?.map((elem: any,i) =>(
                  <option key={i} value={elem.id} >
                    {elem.name}
                  </option>
                ))
              }
            </select>

            {/* <img src={image} alt="" className="border h-20 w-40"/> */}

            <input type="submit" value='Añadir' className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}/>
        </form>

        
    );
}


export default TrainingsForm;