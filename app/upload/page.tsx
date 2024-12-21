"use client"

import { useState } from 'react';
import axios from 'axios';
export default function UploadForm() {
  const [file, setFile] = useState<any>(null);
  const [filename, setFilename] = useState('');

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload',
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full h-screen bg-white'>
        <input type='file' onChange={handleFileChange} />
        <label>{filename}</label> 
        <button className='bg-blue-500' type="submit">Upload</button>
      </div>
     
    </form>
  );
};

