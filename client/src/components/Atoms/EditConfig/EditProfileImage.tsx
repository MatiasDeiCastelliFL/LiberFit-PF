import React from 'react';
import Perfil from '../../Atoms/Perfil/Perfil';
import { CameraIcon, XMarkIcon, PencilIcon, ArrowUpTrayIcon, CheckIcon } from '@heroicons/react/24/outline';
import  { changeProfileImage } from '../../../App/Action/Action'
import { useAppDispatch, useAppSelector } from '../../../App/Hooks/Hooks';

const EditProfileImage = () => {
    
    const [changingImage, setChangingImage] = React.useState(false);
    const [changingImageButton, setChangingImageButton] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState<any>('');
    const [preview, setPreview] = React.useState<any>()
    const { data } = useAppSelector((state) => state);
    const dispatch = useAppDispatch()

    const handleHover = () => {
        setChangingImageButton(true);
    }
    const handleOut = () => {
        setChangingImageButton(false);
    }

    const handleChange = (e:any) => {
        e.preventDefault();
        setChangingImage(!changingImage);
    }

    const onImageRemove = (e:any) => {
        e.preventDefault()
        setPreview('')
        setSelectedFile('')
    }

    const handleChangeImage = (e:any) => {
        e.preventDefault()
        setSelectedFile(e.target.files[0])
    }

    const handleImage = (e:any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("img", selectedFile)
        const info = {
            id: data.user.id,
            img: selectedFile
        }
        dispatch(changeProfileImage(info))
        setChangingImage(!changingImage);
    }

    React.useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    React.useEffect(() => {
    }, [data.user])

    return (
        
        <div className="flex flex-col items-center justify-center w-full h-full">
            {!changingImage?
                <button className='' onMouseOver={handleHover} onClick={handleChange} onMouseLeave={handleOut}>
                    {
                        changingImageButton? 
                            <div className='flex flex-col text-12  items-center justify-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border w-28 h-28'>
                                <CameraIcon className='w-8 h-8'/>
                                <p>Cambiar foto de perfil</p>
                            </div>
                        :  <img src={data.user.image} alt="prev" className='w-28 h-28 rounded-full'/>
                    }
                </button>
            :
                <div className='flex flex-col gap-3 items-center border p-4 border-dashed'>
                    {
                        selectedFile? 
                            <div className='flex flex-col items-center justify-center'>
                                <img src={preview} alt="prev" className='w-24 h-24 rounded-full'/>
                                <div className='flex gap-2'>
                                    <button onClick={onImageRemove} className='hover:text-redClare hover:cursor-pointer'><PencilIcon className='h-5'/></button>
                                    <button onClick={onImageRemove} className='hover:text-redClare hover:cursor-pointer'><XMarkIcon className='h-5'/></button>
                                    <button onClick={handleImage} className='hover:text-redClare hover:cursor-pointer'><CheckIcon className='h-5'/></button>
                                </div>
                            </div>
                        : 
                            <div className='flex flex-col gap-3 items-center justify-center p-4'>
                                <label htmlFor="img_input" className='flex flex-col items-center justify-center'>
                                    <ArrowUpTrayIcon className='w-10 h-10'/>
                                    <p>arrastra y suelta o</p>
                                </label>
                                <input type="file" name="img" id="img_input" onChange = {handleChangeImage} className ='bg-none'/>
                            </div>
                    }
                    <button className='bg-redClare px-2 rounded-md' onClick={handleChange}>Cancelar</button>
                </div>
            }
        </div>

    )
}

export default EditProfileImage