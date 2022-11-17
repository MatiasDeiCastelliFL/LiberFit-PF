import React, {useState, useRef, useEffect } from "react";
import { PencilSquareIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast from 'react-hot-toast';
import { editUser, changePassword } from "../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";



interface Props {
    title: string;
}

const PasswordConfig = ({title}:Props) => {

    const dispatch = useAppDispatch()
    
    const [disable, setDisable] = useState(true);
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    const { data } = useAppSelector((state) => state);
    const { user } = data
    
    const [newPassword, setnewPassword] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [oldPassword2, setOldPassword2] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState();
    const [confirmError, setConfirmError] = useState(false);
    const [oldError, setOldError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleEdit = () => {
        inputRef.current?.focus();
        if (disable===true) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const handleChageNew = (e:any) => {
        setnewPassword(e.target.value)
    }

    const handleChageOld = (e:any) => {
        oldError && setOldError(false)
        setOldPassword(e.target.value)
    }

    const handleChageConfirm = (e:any) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        await dispatch(
            changePassword(
                {
                    id: user.id,
                    oldPassword: oldPassword,
                    password: newPassword,
                    token: user.token
                }  
            )
        )
        toast.success('Contraseña cambiada con exito')
        
        if (oldPassword2 === user.password) {
            setOldError(true)  
        } else {
            setOldError(false)
            setOldPassword2(user.password)
        }
    }

    useEffect(() => {
        if (newPassword !== confirmPassword) {
            setConfirmError(true)
        } else {
            setConfirmError(false)
        }
    }, [newPassword, confirmPassword])


    return (
        <div className="flex justify-between w-full p-4">
            <div>
                <h1 className="text-xl font-extrabold">{title}</h1>
                <form onSubmit={handleSubmit} className='flex text-md flex-col gap-2'>
                    {
                        (disable)? <input type={showPassword? "text" : "password"} className=" text-neutral-500 bg-transparent h-full" value='........' disabled/>
                        : <div>
                            <button className="bg-transparent" onClick={e => setShowPassword(!showPassword)}>
                                {
                                    showPassword? <EyeIcon className="h-5" />
                                    : <EyeSlashIcon className="h-5" /> 
                                }
                            </button>
                            <div className="flex gap-5 items-center justify-between">
                                <label htmlFor="oldPassword">Contraseña Antigua</label>
                                <input type={showPassword? "text" : "password"} placeholder="Ingresa tu antigua contraseña" name="oldPassword" className=" text-neutral-500 w-fit bg-transparent h-full" value={oldPassword} onChange={handleChageOld}/>
                            </div>
                            {
                                oldError && <p className="text-red-500">Contraseña incorrecta</p>
                            }
                            <div className="flex gap-5 items-center justify-between">
                                <label htmlFor="newPassword">Nueva Contraseña</label>
                                <input type={showPassword? "text" : "password"} placeholder="Ingresa tu nueva contraseña" name="newPassword" className=" text-neutral-500 w-fit bg-transparent  h-full" value={newPassword} onChange={handleChageNew}/>
                            </div>
                            <div className="flex gap-5 items-center justify-between">
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                <input type={showPassword? "text" : "password"} placeholder="Ingresa tu antigua contraseña" name="confirmPassword" className=" text-neutral-500 w-fit bg-transparent  h-full" value={confirmPassword} onChange={handleChageConfirm}/>
                            </div>
                            {
                                confirmError? <p className="text-red-500">Las contraseñas no coinciden</p> : null
                            }
                            <input type="submit" name="send" id="55" className="bg-redClare px-2 mt-1 rounded-lg" value="Confirmar"/> 
                        </div> 
                    }
                </form>
            </div>
            <button className="bg-transparent" onClick={handleEdit}>
                <PencilSquareIcon className="h-8 w-8  text-neutral-900 hover:text-redClare"/>
            </button>
        </div>
    );
}

export default PasswordConfig;