import { NextResponse } from "next/server";
import faq from "@/public/faq.json";

export async function GET() {
  return NextResponse.json(faq);
}
