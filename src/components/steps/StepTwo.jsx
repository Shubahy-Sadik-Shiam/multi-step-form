"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  zip: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must be numbers only"),
});

const StepTwo = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    onNext(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-teal-100 p-6 rounded-lg mt-5">
    <div>
      <label htmlFor="street" className="block text-sm font-medium mb-1 text-black">
        Street Address
      </label>
      <input
        id="street"
        {...register("street")}
        placeholder="Street Address"
        className="input input-bordered input-accent w-full"
      />
      <p className="text-red-500 text-xs mt-1">{errors.street?.message}</p>
    </div>
  
    <div>
      <label htmlFor="city" className="block text-sm font-medium mb-1 text-black">
        City
      </label>
      <input
        id="city"
        {...register("city")}
        placeholder="City"
        className="input input-bordered input-accent w-full"
      />
      <p className="text-red-500 text-xs mt-1">{errors.city?.message}</p>
    </div>
  
    <div>
      <label htmlFor="zip" className="block text-sm font-medium mb-1 text-black">
        Zip Code
      </label>
      <input
        id="zip"
        {...register("zip")}
        placeholder="Zip Code"
        className="input input-bordered input-accent w-full"
      />
      <p className="text-red-500 text-xs mt-1">{errors.zip?.message}</p>
    </div>
  
    <div className="flex justify-between pt-4">
      <button type="button" onClick={onBack} className="btn btn-accent">
        Back
      </button>
      <button type="submit" className="btn btn-accent">
        Next
      </button>
    </div>
  </form>
  );
};

export default StepTwo;
