"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const StepThree = ({ onNext, onBack, defaultValues }) => {
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
    <label htmlFor="username" className="block text-sm font-medium mb-1 text-black">
      Username
    </label>
    <input
      id="username"
      {...register("username")}
      placeholder="Username"
      className="input input-bordered input-accent w-full"
    />
    <p className="text-red-500 text-xs mt-1">{errors.username?.message}</p>
  </div>

  <div>
    <label htmlFor="password" className="block text-sm font-medium mb-1 text-black">
      Password
    </label>
    <input
      id="password"
      type="password"
      {...register("password")}
      placeholder="Password"
      className="input input-bordered input-accent w-full"
    />
    <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
  </div>

  <div>
    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 text-black">
      Confirm Password
    </label>
    <input
      id="confirmPassword"
      type="password"
      {...register("confirmPassword")}
      placeholder="Confirm Password"
      className="input input-bordered input-accent w-full"
    />
    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword?.message}</p>
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

export default StepThree;
