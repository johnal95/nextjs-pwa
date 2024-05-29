import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse | undefined> {
    if (request.nextUrl.pathname === "/redirect-me") {
        const redirectUrl = new URL("/", request.url);
        return NextResponse.redirect(redirectUrl, { status: 301 });
    }
    return;
}
