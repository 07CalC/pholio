import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useUploadImage = () => {
  const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const [isUploadingImg, setIsUploadingImg] = useState<boolean>(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<string | Blob | undefined>();

  const pfpUpload = useRef<HTMLInputElement>(null);


  const handleFileChange = async (event: React.FormEvent<HTMLInputElement>) => {
    setImgUrl("");
    const target = event.target as HTMLInputElement
    setUploadedFile(target.files?.[0]);
    const file = target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    
  };

  const handleImgSubmit = async () => {
    console.log("handleImgSubmit");
    const formData = new FormData();
    if(uploadedFile){formData.append("file", uploadedFile);}
    else{
      return
    }
    
    formData.append("upload_preset", uploadPreset);

    try {setIsUploadingImg(true)
      setIsUploadingImg(true)
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/" + cloudName + "/image/upload",
        formData
      );
      if (response.statusText === "OK") {
        setImgUrl(response.data.secure_url);
        setIsUploadingImg(false)
      }
        setIsUploadingImg(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      handleImgSubmit()
    },[uploadedFile])

    return{
        isUploadingImg,
        image,
        imgUrl,
        pfpUpload,
        handleFileChange,
    }
};
