"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="mt-3 p-2 px-4 border rounded-md hover:bg-gray-100"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
