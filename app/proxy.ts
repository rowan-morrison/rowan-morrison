import { NextRequest, NextResponse } from "next/server";

const PASS = process.env.BASIC_AUTH_PASS;

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");

  if (auth) {
    const b64 = auth.split(" ")[1] ?? "";
    try {
      const [, pass] = atob(b64).split(":");
      if (pass === PASS) {
        return NextResponse.next();
      }
    } catch {}
  }

  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Portfolio"' },
  });
}

export const config = {
  matcher: ["/((?!_next|api|favicon.png|static).*)"], 
};