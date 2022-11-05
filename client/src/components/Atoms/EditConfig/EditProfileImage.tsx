import React from 'react';
import Perfil from '../../Atoms/Perfil/Perfil';
import { CameraIcon } from '@heroicons/react/24/outline';
import DragAndDrop from '../BoxDragAndDrop/DragAndDrop';

const EditProfileImage = () => {
    
    const [changingImage, setChangingImage] = React.useState(false);
    const [changingImageButton, setChangingImageButton] = React.useState(false);

    const handleHover = () => {
        setChangingImageButton(true);
    }
    const handleOut = () => {
        setChangingImageButton(false);
    }

    const handleChange = () => {
        setChangingImage(!changingImage);
    }

    return (
        
        <div className="flex flex-col items-center justify-center w-full h-full">
            {!changingImage?
                <button className='' onMouseOver={handleHover} onClick={handleChange} onMouseLeave={handleOut}>
                    {
                        changingImageButton? 
                            <div className='flex flex-col text-12  items-center justify-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border w-24 h-24'>
                                <CameraIcon className='w-8 h-8'/>
                                <p>Cambiar foto de perfil</p>
                            </div>
                        : <Perfil width='24'/>
                    }
                </button>
            :
                <div className='flex flex-col gap-3 items-center'>
                    <DragAndDrop />
                    <button className='bg-redClare px-2 rounded-md' onClick={handleChange}>Cancelar</button>
                </div>
            }
        </div>

    )
}

export default EditProfileImage