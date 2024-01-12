import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const error = searchParams.get("error");
  const redirectUrl = `/signin?error=${error}`;
  redirect(redirectUrl);
}

export { handler as GET, handler as POST };
