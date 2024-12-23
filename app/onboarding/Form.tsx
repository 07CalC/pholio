"use client";

import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "../lib/onboardingSchema";
import { motion } from "framer-motion";
import axios, { AxiosRequestConfig } from "axios";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { log } from "./page";
import { FaCheck } from "react-icons/fa";

type inputs = z.infer<typeof onboardingSchema>;

const steps = [
  {
    tagline: "Your work deserves a name. Create a link that speaks for you.",

    fields: ["username"],
  },
  {
    tagline: "Your story matters. Let’s craft an intro that speak volumes.",
    fields: ["displayname", "age", "gender", "displayimage"],
  },
  {
    tagline: "Stay Connected: Share how the world can reach you.",
    fields: ["contactemail", "contactphone"],
  },
  {
    tagline:
      "Pick the Perfect Template – Your Story, Your Style, Your Way!",
    fields: ["template"],
  },
];

const templates =[
  {
    name: "modernDark",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734938477/cu3k9c5fw9vs7bhqluge.png"
  },
  {
    name: "modernLight",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734938477/cu3k9c5fw9vs7bhqluge.png"
  },
  {
    name: "scrub",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734938477/cu3k9c5fw9vs7bhqluge.png"
  },
  {
    name: "darkMatter",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734938477/cu3k9c5fw9vs7bhqluge.png"
  },
]

export function OnboardingForm() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("darkMatter");
  const router = useRouter();
  const [previousStep, setPreviousStep] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const delta = currentStep - previousStep;
  const pfpUpload = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isUploadingImg, setIsUploadingImg] = useState<boolean>(false)
  const [isCheckingUserName, setIsCheckingUserName] = useState<boolean>(false)
  const [userNameAvailabe, setUserNameAavailable] = useState<boolean>(true)

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    setValue,
    setError,
    watch,
    getValues,
    formState: { errors },
  } = useForm<inputs>({
    resolver: zodResolver(onboardingSchema),
  });


  

  useEffect(() => {
    setValue("displayimage", imgUrl);
    setValue("template", selectedTemplate)
  }, [imgUrl, selectedTemplate]);


  

  const checkUserName = async (username: string) => {
    setIsCheckingUserName(true)
    const svResponse = await axios.post('/api/checkUsername',
      {username: username}
    )
    setUserNameAavailable(svResponse.data)
    setIsCheckingUserName(false)
  }

  useEffect(() => {
    if(watch('username')){
    setTimeout(() => {
      checkUserName(watch('username').toLowerCase())
    }, 1000);
  }
  },[watch('username')])

  useEffect(()=>{
    const refreshUsernameError = async () => {
      await trigger('username')
    }
    refreshUsernameError()
  }, [userNameAvailabe])


  type FieldName = keyof inputs;

  const [uploadedFile, setUploadedFile] = useState<string | Blob | undefined>();
  // const [filename, setFilename] = useState("");
  const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const handleFileChange = async (event: React.FormEvent<HTMLInputElement>) => {
    setImgUrl("");
    const target = event.target as HTMLInputElement
    setUploadedFile(target.files?.[0]);
    // setFilename(event.target.files[0].name);
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



  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if(!userNameAvailabe){
      setError('username', {type: 'custom', message: 'username not available'})
      return
    }
    

    if (currentStep < steps.length) {
      // if (currentStep === 1 && image !== null && imgUrl.length === 0) {
      //   handleImgSubmit()
      // }
      if (currentStep === steps.length - 1) {
        const form =  {
          username : getValues("username").toLowerCase(),
          displayname : getValues("displayname"),
          age : getValues("age"),
          gender : getValues("gender"),
          displayimage : getValues("displayimage"),
          professionaltitle : getValues("professionaltitle"),
          description : getValues("description"),
          contactemail : getValues("contactemail"),
          contactphone : getValues("contactphone"),
          template: getValues("template")
        }
        setIsLoading(true)
       const svResponse = await axios.post('/api/onboarding',
        JSON.stringify(form)
       )
       setIsLoading(false)
       return router.push('/dashboard')
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

   

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="h-svh w-full flex flex-col bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px]">
      <div
        className={`w-full h-1/6 bg-gradient-to-r from-[#6A00F4] to-[#9C27B0] rounded-b-[2rem] flex flex-col p-8 justify-center items-center`}
      >
        <motion.div
          key={currentStep}
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <strong className="text-white inter font-extrabold text-3xl md:text-4xl text-center">
            {steps[currentStep].tagline}
          </strong>
        </motion.div>
      </div>

      {currentStep === 0 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-4/6 flex flex-col p-10 items-center justify-center gap-y-3"
        >
          <form
            className="w-full flex items-center justify-center gap-x-2"
            
          >
            <p className="text-[#6700ec] jetbrains drop-shadow-xl bg-cyan-500 bg-clip-text font-semibold text-xl md:text-4xl text-center">
              pholio.online/
            </p>
            {/* 7f1dff */}
            <input
              type="text"
              id="username"
              {...register("username")}
              className="w-1/5 text-white  jetbrains font-semibold text-2xl md:text-3xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-1 px-2"
              placeholder="username"
            />
            {isCheckingUserName &&
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif' className="w-10" />
}
            {!isCheckingUserName && userNameAvailabe && (
              <FaCheck title="username available" className="text-4xl text-green-500"/>
            )}
            {!isCheckingUserName && !userNameAvailabe && (
              <RxCross2 title="username not available" className="text-5xl font-bold text-red-500" />
            )}
          </form>
          {errors.username && (
            <p className="text-red-400 text-lg font-semibold">
              {errors.username.message}
            </p>
          )}
        </motion.div>
      )}

      {currentStep === 1 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-4/6 flex flex-col items-center justify-center gap-y-3"
        >
          <div className="flex w-full p-8 h-full items-center justify-center jetbrains">
            <div className="w-1/3 h-full flex flex-col gap-y-4 justify-center items-center">
              <strong className="text-white text-2xl md:text-3xl">
                Display Picture
              </strong>
              <input
                onChange={handleFileChange}
                className="hidden"
                ref={pfpUpload}
                type="file"
              />

              <div
                onClick={() => pfpUpload.current?.click()}
                className="w-52 bg-[#1b1b1b] relative h-52 rounded-full border-4 border-[#6A00F4]"
              >
                <img src={image?.toString()} className="w-full h-full object-cover rounded-full z-10" />
                {isUploadingImg && (
                  <>
                  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif" className="z-20 rounded-full w-1/2 h-1/2" />
                </div>
                </>
                )}
                
              </div>

              {errors.displayimage && (
                <p className="text-red-400 text-lg font-semibold">
                  {errors.displayimage.message}
                </p>
              )}
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center items-center">
              <form
                className="w-full h-full flex flex-col gap-y-4 p-5 justify-center items-center"
                
              >
                <div className="h-1/2 flex items-center gap-x-16  justify-center w-full">
                  <div className="flex flex-col gap-y-2 w-1/2 h-full">
                    <label className="text-white text-2xl md:text-xl">
                      Display Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      {...register("displayname")}
                      className="text-white  jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                      placeholder="Display Name"
                    />
                    {errors.displayname && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.displayname.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-y-2 w-1/2 h-full">
                    <label className="text-white text-2xl md:text-xl">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      id="professionaltitle"
                      {...register("professionaltitle")}
                      className="text-white  jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                      placeholder="Web developer"
                    />
                    {errors.professionaltitle && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.professionaltitle.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="h-1/2 flex items-center gap-x-16 justify-center w-full">
                  <div className="flex w-1/2 gap-x-2 h-full">
                    <div className="flex flex-col gap-y-2">
                      <label className="text-white text-2xl md:text-xl">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        {...register("age")}
                        className="text-white w-5/6 jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                        placeholder="25"
                      />
                      {errors.age && (
                        <p className="text-red-400 text-lg font-semibold">
                          {errors.age.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-white text-2xl md:text-xl">
                        Gender
                      </label>
                      <select
                        id="gender"
                        {...register("gender")}
                        className="text-white  jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                      >
                        <option value="M">M (male)</option>
                        <option value="F">F (female)</option>
                      </select>
                      {errors.gender && (
                        <p className="text-red-400 text-lg font-semibold">
                          {errors.gender.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2 gap-y-2 h-full">
                    <label className="text-white text-2xl md:text-xl">
                      Short Description
                    </label>
                    <textarea
                      id="description"
                      {...register("description")}
                      className="text-white  jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                      placeholder="into new technologies"
                    />
                    {errors.description && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}

      {currentStep === 2 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-4/6 flex flex-col items-center justify-center gap-y-3"
        >
          <div className="w-full h-full jetbrains p-8 flex gap-x-16 justify-center items-center">
            <div className="flex flex-col gap-y-2 w-1/2 h-full justify-center items-end">
              <label className="text-white text-2xl md:text-xl">
                Contact Email
              </label>
              <input
                type="email"
                id="contactemail"
                {...register("contactemail", { value: "" })}
                className="text-white w-2/3 jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                placeholder="john@pholio.online (optional)"
              />
              {errors.contactemail && (
                <p className="text-red-400 text-lg font-semibold">
                  {errors.contactemail.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2 w-1/2 h-full justify-center items-start">
              <label className="text-white text-2xl md:text-xl">
                Contact Phone
              </label>
              <input
                type="number"
                id="contactphone"
                {...register("contactphone")}
                className="text-white w-2/3 jetbrains font-semibold text-lg md:text-xl bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] focus:ring-0  p-2"
                placeholder="1234567890 (optional)"
              />
              {errors.contactphone && (
                <p className="text-red-400 text-lg font-semibold">
                  {errors.contactphone.message}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {currentStep === 3 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-4/6 flex flex-col items-center justify-center gap-y-3"
        >
          <div className="w-full p-4 grid grid-cols-4 h-full jetbrains justify-center items-center gap-5">
            {templates.map((template, index) => (
              <div key={index} onClick={()=>setSelectedTemplate(template.name as string)} className={`flex cursor-pointer w-full bg-white/10 rounded-xl border-2 ${selectedTemplate === template.name as string ? 'border-blue-600 bg-gradient-to-r from-[#6A00F4] to-[#9C27B0] bg-opacity-100' : 'border-[#6A00F4]'} bg-opacity-5 backdrop-filter backdrop-blur-lg hover:scale-110  flex-col gap-y-2 p-5 justify-center items-center`}>
              <Image alt="image" src={template.imgLink} width={1920} height={964} className="w-full rounded-xl" />
              <div className="flex px-5 w-full text-white justify-between items-center">
                <strong className="text-xl">{template.name}</strong>
                <a target="blank" className="text-sm rounded-xl underline bg-[#6700ec] p-2" href="http://localhost:3000/preview/name">Preview↗</a>
              </div>
            </div>
            ))}
            
            </div>
            {/* {errors.template && (
              <p className="text-red-400 text-lg font-semibold">
              {errors.template.message}
            </p>
            )} */}
        </motion.div>
      )}

      <div className="w-2/3 h-1/6 self-center flex  p-8 justify-between items-center">
        <button
          onClick={prev}
          className={`bg-[#6700ec] jetbrains active:scale-90 ${
            currentStep === 0 ? "cursor-not-allowed" : "hover:bg-[#6600ecb9]"
          }   text-white text-2xl font-bold py-2 px-4 rounded-lg `}
        >
          Previous
        </button>
        <button
          onClick={next}
          disabled={isUploadingImg}
          className={`bg-[#6700ec] jetbrains disabled:cursor-not-allowed hover:bg-[#6600ecb9] active:scale-90 text-white text-2xl font-bold py-2 px-4 rounded-lg `}
        >
          {isLoading ? "Loading..." : "next"}
        </button>
      </div>
    </div>
  );
}
