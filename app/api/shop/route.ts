import { NextResponse } from "next/server";
import ShopContent from "@/public/json/ShopContent.json";

export async function GET() {
  try {
    return NextResponse.json(ShopContent);
  } catch (error) {
    return new NextResponse("not found", { status: 500 });
  }
}
