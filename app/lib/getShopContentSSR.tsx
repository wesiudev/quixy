"use server";
export async function getShopContentSSR() {
  const req = await await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/pages?secret=${process.env.API_SECRET_KEY}`
  ).then((res) => res.json());

  const shopcontent = req.json();
  return shopcontent;
}
