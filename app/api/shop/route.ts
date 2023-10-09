import { NextResponse, NextRequest } from "next/server";
import ShopContent from "@/public/json/ShopContent.json";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  } else {
    return NextResponse.json(ShopContent);
  }
}
