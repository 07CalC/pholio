"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { input, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "../lib/onboardingSchema";
import { motion } from "framer-motion";
type inputs = z.infer<typeof onboardingSchema>;

const steps = [
  {
    tagline: "Your work deserves a name. Create a link that speaks for you.",

    fields: ["username"],
  },
  {
    tagline: "Your story matters. Let’s craft an intro that speak volumes.",
    fields: [
      "displayname",
      "age",
      "gender",
      "displayimage",
      "contactemail",
      "contactphone",
    ],
  },
  {
    tagline:
      "Let your connections find you effortlessly—add your social profiles.",
    fields: ["sociallinks"],
  },
];

export function OnboardingForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const [tagline, setTagline] = useState(steps[0].tagline);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<inputs>({
    resolver: zodResolver(onboardingSchema),
  });

  type FieldName = keyof inputs;

  useEffect(() => {
    setTagline(steps[currentStep].tagline);
  }, [currentStep]);

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < 2) {
      if (currentStep === 2) {
        await handleSubmit(processForm)();
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

  const processForm: SubmitHandler<inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-svh w-full flex flex-col bg-black bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px]">
      <div
        className={`w-full h-1/6 bg-[#262262] rounded-b-[2rem] flex flex-col p-8 justify-center items-center`}
      >
        <motion.div
          key={tagline}
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <strong className="text-white text-3xl md:text-4xl text-center">
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
            className="w-full  flex items-center justify-center gap-x-2"
            onSubmit={handleSubmit(processForm)}
          >
            <p className="text-white font-semibold text-xl md:text-3xl text-center">
              pholio.online/
            </p>

            <input
              type="text"
              id="username"
              {...register("username")}
              className="text-white text-2xl md:text-2xl bg-black border-2 rounded-xl border-white   p-2 focus-within:border-0 focus:border-0"
              placeholder="username"
            />
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
          <div className="flex w-full p-8 h-full items-center justify-center">
            <div className="w-1/4 h-full flex flex-col gap-y-4 justify-center items-center">
              <strong className="text-white text-2xl md:text-3xl">
                Display Picture
              </strong>
              <img
                src="/favicon.ico"
                alt="logo"
                className="w-1/2 rounded-full border border-white"
              />
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center items-center">
              <form
                className="w-full h-full flex flex-col gap-y-4 p-5 justify-center items-center"
                onSubmit={handleSubmit(processForm)}
              >
                <div className="h-1/2 flex items-center justify-between w-full">
                  <div className="flex flex-col gap-y-2">
                    <label className="text-white text-2xl md:text-xl">
                      Display Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      {...register("displayname")}
                      className="text-white text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
                      placeholder="Display Name"
                    />
                    {errors.displayname && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.displayname.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="text-white text-2xl md:text-xl">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      {...register("contactemail")}
                      className="text-white text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
                      placeholder="johndoe@pholio.online"
                    />
                    {errors.contactemail && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.contactemail.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="text-white text-2xl md:text-xl">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      id="professionaltitle"
                      {...register("professionaltitle")}
                      className="text-white text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
                      placeholder="Web developer"
                    />
                    {errors.professionaltitle && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.professionaltitle.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="h-1/2 flex items-center gap-x-4 justify-between w-full">
                  <div className="flex w-1/4 gap-x-2">
                    <div className="flex flex-col gap-y-2">
                      <label className="text-white text-2xl md:text-xl">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        {...register("age")}
                        className="text-white w-11/12 text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
                        placeholder='25'
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
                        className="text-white text-xl bg-black border-2 rounded-xl border-white p-2"
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
                  <div className="flex flex-col w-1/3 gap-y-2">
                    <label className="text-white text-2xl md:text-xl">
                      Contact Phone
                    </label>
                    <input
                      type="number"
                      id="contactphone"
                      {...register("contactphone")}
                      className="text-white text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
                      placeholder="01125532552"
                    />
                    {errors.contactphone && (
                      <p className="text-red-400 text-lg font-semibold">
                        {errors.contactphone.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-1/3 gap-y-2">
                    <label className="text-white text-2xl md:text-xl">
                      Short Description
                    </label>
                    <textarea
                      
                      id="description"
                      {...register("description")}
                      className="text-white text-xl bg-black border-2 rounded-xl border-white p-2 focus-within:border-0 focus:border-0"
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
        ></motion.div>
      )}
      <div className="w-1/2 h-1/6 self-center flex  p-8 justify-between items-center">
        <button
          onClick={prev}
          className={`bg-[#262262] ${
            currentStep === 0 ? "cursor-not-allowed" : "hover:bg-[#322b8d]"
          }   text-white text-2xl font-bold py-2 px-4 rounded-xl `}
        >
          Previous
        </button>
        <button
          onClick={next}
          className={`bg-[#262262] hover:bg-[#322b8d] text-white text-2xl font-bold py-2 px-4 rounded-xl `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
