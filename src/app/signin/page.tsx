import { redirect } from "next/navigation";
import SignInWithEmailButton from "@/components/SignInWithEmailButton";
import GoogleButton from "@/components/GoogleButton";
import { getServerSession } from "next-auth/next";
import LoginForm from "@/components/LoginForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const OrDivider = () => (
  <div className="flex items-center justify-center w-full">
    <div className="h-px bg-gray-200 w-full"></div>
    <div className="mx-2 text-gray-500">or</div>
    <div className="h-px bg-gray-200 w-full"></div>
  </div>
);

export default async function SignIn({
  searchParams: { error },
}: {
  searchParams: { error: string };
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center rounded-md shadow-sm border w-96 p-8 gap-y-3 bg-white">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-2 rounded w-full text-center">
            {error}
          </div>
        )}
        <SignInWithEmailButton />
        <OrDivider />
        <GoogleButton title="Sign in with Google" />
        <OrDivider />
        <LoginForm />
        <div className="flex justify-between w-full text-sm text-gray-600">
          <a href="/forgot-password" className="text-blue-500">
            Forgot password?
          </a>
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
