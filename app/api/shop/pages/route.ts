import { NextResponse } from "next/server";
import ShopContent from "@/public/json/ShopContent.json";

export async function GET() {
  try {
    return NextResponse.json({ pages: ShopContent.shopItems });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
