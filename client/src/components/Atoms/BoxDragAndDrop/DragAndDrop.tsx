import React, { useState } from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import ImageSelected from './ImageSelected';
import BoxDragAndDrop from './BoxDragAndDrop';

const DragAndDrop = () => {
    const [images, setImages] = useState<ImageListType>([]);
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);
    const handleChange = (imageList: ImageListType) => setImages(imageList);
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
                            ? <ImageSelected img={imageList[0].dataURL!}  {...{ onImageRemove, onUpload, onImageUpdate, loading }} />
                            : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
                        }
                    </>
                )}
            </ImageUploading>
        </div>
    )
}

export default DragAndDrop