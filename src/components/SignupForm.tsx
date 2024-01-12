"use client";

import TextInput from "@/components/TextInput";
import signUp from "@/actions/signUp";
import { signIn } from "next-auth/react";
import { SignUpSchema } from "@/validations/signUp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "ada",
      lastName: "lovelace",
      email: "adalovelace@example.com",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await signUp(values);
    await signIn("credentials", {
      email: values.email,
      password: values.password,
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-full">
      <TextInput
        error={errors.firstName?.message as string}
        type="text"
        placeholder="First Name"
        {...register("firstName")}
      />
      <TextInput
        error={errors.lastName?.message as string}
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
      />
      <TextInput
        error={errors.email?.message as string}
        type="text"
        placeholder="Email"
        {...register("email")}
      />
      <TextInput
        error={errors.password?.message as string}
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <TextInput
        error={errors.confirmPassword?.message as string}
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <button
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
