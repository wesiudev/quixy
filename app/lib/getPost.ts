"use server";
export async function getPost(postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${postId}`
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const post = res.json();
  return post;
}