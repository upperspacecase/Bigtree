import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  try {
    // Follow redirects manually to get the final URL
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    return NextResponse.json({ resolved: res.url });
  } catch {
    return NextResponse.json({ error: "Failed to resolve URL" }, { status: 500 });
  }
}
