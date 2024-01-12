import GoogleButton from "@/components/GoogleButton";
import { getServerSession } from "next-auth";
import SignupForm from "@/components/SignupForm";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center rounded-md shadow-sm border w-96 p-8 space-y-4 bg-white">
        <GoogleButton title="Continue with Google" />
        <div className="my-4">or</div>
        <SignupForm />
      </div>
    </div>
  );
}
