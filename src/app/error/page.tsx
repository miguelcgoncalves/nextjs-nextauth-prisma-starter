import { redirect } from "next/navigation";

export default async function Error({
  searchParams: { error },
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center rounded-md shadow-sm border w-96 p-8 space-y-4 bg-white">
        <h1 className="text-red-500 text-2xl font-bold">Error</h1>
        <p>{error}</p>
        <button
          onClick={() => {
            redirect("/");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
}
