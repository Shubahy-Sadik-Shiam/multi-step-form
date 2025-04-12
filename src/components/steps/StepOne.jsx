"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});


const StepOne = ({ onNext, defaultValues }) => {

  // const toggleTheme = () => {
  //   const html = document.documentElement;
  //   const current = html.getAttribute("data-theme");
  //   html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => onNext(data);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-teal-600 mt-2">Welcome!</h2>
      <p className="text-gray-600 mb-6 text-xl">
        You're just a few steps away! Let's start with your basic info.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-teal-100 p-6 rounded-lg"
      >
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-black">
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
            className="input input-accent input-bordered w-full"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.fullName?.message}
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            placeholder="Enter your email"
            className="input input-accent input-bordered w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-black">
            Phone Number
          </label>
          <input
            id="phone"
            {...register("phone")}
            placeholder="Enter your phone number"
            className="input input-accent input-bordered w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.phone?.message}</p>
        </div>

        <button type="submit" className="btn btn-accent mt-4">
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
