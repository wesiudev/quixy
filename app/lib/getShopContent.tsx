"use server";
export async function getShopContent() {
  const req = await fetch(`/api/shop/`);

  const shopcontent = req.json();
  return shopcontent;
}
