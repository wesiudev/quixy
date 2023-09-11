"use server";
export async function getWebsiteInfo(city: string, websiteId: string) {
  if (city !== "") {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/${city}/${websiteId}`
    );
    if (!res) {
      throw new Error("Failed to fetch data");
    }
    const page = res.json();
    return page;
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/strony-internetowe/${websiteId}`
    );
    if (!res) {
      throw new Error("Failed to fetch data");
    }
    const page = res.json();
    return page;
  }
}
