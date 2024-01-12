"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import TextInput from "./TextInput";
import SubmitButton from "@/components/SubmitButton";

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await signIn("credentials", {
      redirect: false,
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    });
    if (response?.ok) {
      router.push("/");
    } else {
      router.replace("?error=InvalidCredentials");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-2 w-full"
      style={{ margin: 0 }}
    >
      <TextInput
        required
        name="username"
        type="email"
        placeholder="Enter your email"
        autoComplete="username"
      />
      <TextInput
        required
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Enter your password"
      />
      <SubmitButton title="Sign in" className="mt-1" />
    </form>
  );
}
