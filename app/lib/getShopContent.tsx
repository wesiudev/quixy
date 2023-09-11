"use server";
export async function getShopContent() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/`);

  const shopcontent = req.json();
  return shopcontent;
}
