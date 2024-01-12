import { getServerSession } from "next-auth";
import SignOutButton from "@/components/SignOutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">
        Hi <span className="capitalize">{session?.user?.name}!</span>
      </h1>
      <div className="mt-4">
        <SignOutButton />
      </div>
    </div>
  );
}
