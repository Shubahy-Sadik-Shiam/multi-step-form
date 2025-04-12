"use client";

import FinalStep from "@/components/steps/FinalStep";
import StepOne from "@/components/steps/StepOne";
import StepThree from "@/components/steps/StepThree";
import StepTwo from "@/components/steps/StepTwo";
import SuccessPage from "@/components/steps/SuccessPage";
import ToggleTheme from "@/components/steps/ToggleTheme";
import { useEffect, useState } from "react";

export default function Home() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    nextStep();
  };

  const handleFinalSubmit = () => {
    console.log("Submitted Data:", formData);
    nextStep(); // go to success page (step 5)
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zip: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setStep(1);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <ToggleTheme></ToggleTheme>
      {step === 1 && (
        <StepOne onNext={updateFormData} defaultValues={formData} />
      )}
      {step === 2 && (
        <StepTwo
          onNext={updateFormData}
          onBack={prevStep}
          defaultValues={formData}
        />
      )}
      {step === 3 && (
        <StepThree
          onNext={updateFormData}
          onBack={prevStep}
          defaultValues={formData}
        />
      )}
      {step === 4 && (
        <FinalStep
          onBack={prevStep}
          formData={formData}
          onSubmit={handleFinalSubmit}
        />
      )}
      {step === 5 && <SuccessPage resetForm={resetForm} />}
    </div>
  );
}
