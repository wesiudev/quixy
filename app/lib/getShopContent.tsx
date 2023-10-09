"use server";
export async function getShopContent() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop?secret=${process.env.API_SECRET_KEY}`
  );

  const shopcontent = req.json();
  return shopcontent;
}
