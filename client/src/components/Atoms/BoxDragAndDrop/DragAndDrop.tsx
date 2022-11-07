import React, { useState } from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useAppDispatch, useAppSelector } from '../../../App/Hooks/Hooks';
import ImageSelected from './ImageSelected';
import BoxDragAndDrop from './BoxDragAndDrop';
import  { changeProfileImage } from '../../../App/Action/Action'

const DragAndDrop = () => {

    const dispatch = useAppDispatch()

    const [images, setImages] = useState<ImageListType>([]);
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);
    const handleChange = (imageList: ImageListType) => setImages(imageList);

    const handleSubmit = async () => {
        // dispatch(changeProfileImage(images[0].file))
        console.log(images[0].file)
    }

    const onUpload = () => {}
    return (
        <div className='p-4 border-dashed border'>
            <ImageUploading multiple={false} value={images} onChange={handleChange} maxNumber={1}>
                {({
                    imageList,
                    onImageUpload,
                    dragProps,
                    isDragging,
                    onImageRemove,
                    onImageUpdate,
                }) => (
                    <>
                        {
                            imageList[0]
                            ? <ImageSelected imgUrl={imageList[0].dataURL!} img={imageList[0]}  {...{ onImageRemove, onUpload, onImageUpdate, loading }} />
                            : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
                        }
                    </>
                )}
            </ImageUploading>
        </div>
    )
}

export default DragAndDrop