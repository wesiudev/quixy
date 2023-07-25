"use server";
export async function getFaqData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/faq`);

  const faq = req.json();
  return faq;
}
