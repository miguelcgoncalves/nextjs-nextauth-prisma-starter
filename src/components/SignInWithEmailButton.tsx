"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default function SignInWithEmailButton() {
  const [email, setEmail] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("email", { email });
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email@example.com"
        className="w-full border border-gray-300 rounded-md px-4 py-2.5 shadow-sm text-sm text-gray-700 mb-2"
      />
      <button className="bg-white border border-gray-300 flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm text-gray-700 w-full py-2.5">
        Sign in with Email
      </button>
    </form>
  );
}
