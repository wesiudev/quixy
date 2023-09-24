import { NextResponse, NextRequest } from "next/server";
import ShopContent from "@/public/json/ShopContent.json";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const city = req.nextUrl.searchParams.get("city");
  const service = req.nextUrl.searchParams.get("service");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  if (!city && !service) {
    return NextResponse.json({ pages: ShopContent.shopItems });
  } else {
    const page = ShopContent.shopItems.find(
      (page) => city === page.city && service === page.websiteId
    );
    if (!page) {
      return new NextResponse("not found", { status: 404 });
    }
    if (page) {
      return NextResponse.json({
        page,
      });
    }
  }
}
