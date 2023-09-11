"use server";
export async function getShopContent() {
  const req = await fetch(`http://localhost:3000/api/shop/`);

  const shopcontent = req.json();
  return shopcontent;
}
