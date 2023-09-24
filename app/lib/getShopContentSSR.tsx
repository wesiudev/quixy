"use server";
export async function getShopContentSSR() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/pages?secret=${process.env.API_SECRET_KEY}`
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const pages = res.json();
  return pages;
}
