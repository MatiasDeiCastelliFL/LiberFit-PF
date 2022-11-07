import React from 'react';
import { XMarkIcon, PencilIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import  { changeProfileImage } from '../../../App/Action/Action'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import { set } from 'immer/dist/internal';

// interface Props {
//     loading: boolean;
//     img: string;
//     onUpload: () => Promise<void>;
//     onImageRemove: (index: number) => void;
//     onImageUpdate: (index: number) => void
// }
interface Props {
    loading: any;
    imgUrl: any;
    img:any;
    onUpload: any;
    onImageRemove: any;
    onImageUpdate: any;
}



const ImageSelected = ({ 
    imgUrl, 
    img,
    loading, 
    onUpload, 
    onImageRemove, 
    onImageUpdate 
}: Props) => {

    const dispatch = useAppDispatch()

    const handleSubmit = async () => {
        console.log(imgUrl)
        console.log(img)
        dispatch(changeProfileImage({image:imgUrl}))
    }

    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <img className='image-selected rounded-full h-36 w-36' src={imgUrl} alt='image-selected' width={300} />
            <div className='container-buttons'>
                {
                    loading
                    ? <p className='loading-label'>Upload image ⏳...</p>
                    : <div className='flex gap-4'>
                        <button disabled={loading} onClick={onUpload}><ArrowUpTrayIcon className='h-5'/></button>
                        <button disabled={loading} onClick={() => onImageUpdate(0)}><PencilIcon className='h-5'/></button>
                        <button disabled={loading} onClick={() => onImageRemove(0)}><XMarkIcon className='h-5'/></button>
                        <button onClick={handleSubmit}>S</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ImageSelected;