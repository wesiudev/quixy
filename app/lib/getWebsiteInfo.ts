"use server";
export async function getWebsiteInfo(city: string, websiteId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop?city=${city}&service=${websiteId}&secret=${process.env.API_SECRET_KEY}`
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const page = res.json();
  return page;
}
