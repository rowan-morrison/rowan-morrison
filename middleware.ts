import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const auth = req.headers.get("authorization");
  const user = process.env.BASIC_AUTH_USER || "admin";
  const pass = process.env.BASIC_AUTH_PASS;

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic") {
      const decoded = Buffer.from(encoded, "base64").toString();
      const [u, p] = decoded.split(":");

      if (u === user && p === pass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|api|static|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};