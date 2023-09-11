import { NextResponse } from "next/server";
import ShopContent from "@/public/json/ShopContent.json";

export async function GET() {
  return NextResponse.json({ pages: ShopContent.shopItems });
}
