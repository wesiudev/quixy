import ShopContent from "@/public/json/ShopContent.json";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const page = ShopContent.shopItems.find(
      (page) => page.city === params.city && page.websiteId === params.websiteId
    );
    if (!page) {
      return new NextResponse("not found", { status: 404 });
    }
    if (page) {
      return NextResponse.json({
        page,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
