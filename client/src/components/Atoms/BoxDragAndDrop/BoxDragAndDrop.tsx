import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
interface Props{
  onImageUpload: () => void;
  dragProps: any;
  isDragging: boolean
}

const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }:Props) => {
    return (
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`bg-transparent flex flex-col justify-center items-center ${isDragging ? 'isDragging' : ''}`}
      >
        <p>Arrastra o sube una imagen</p>
        <ArrowUpTrayIcon className="w-10 h-10" />
      </div>
    )
}

export default BoxDragAndDrop;