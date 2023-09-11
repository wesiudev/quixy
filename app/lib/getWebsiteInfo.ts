"use server";
export async function getWebsiteInfo(city: string, websiteId: string) {
  const res = await fetch(`/api/shop/${city}/${websiteId}`);
  if (!res) {
    throw new Error("Failed to fetch data");
  }

  const page = res.json();
  return page;
}
