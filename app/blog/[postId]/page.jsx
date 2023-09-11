/* eslint-disable @next/next/no-img-element */

import { getPost } from "@/app/lib/getPost";
import Link from "next/link";
import { FeaturedPosts } from "../FeaturedPosts";

async function getBlogData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
  const data = req.json();
  return data;
}

export async function generateStaticParams() {
  const { posts } = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/`
  ).then((res) => res.json());

  return posts.posts.map((post) => ({ postId: post.postId }));
}

export async function generateMetadata({ params }) {
  // fetch data
  const { post } = await getPost(params.postId);

  return {
    title: `${post.title} | Blog Piękniej - Pasja Manicure | Paznokcie Grudziądz | Anna Żebrowska Manicure Grudziądz`,
  };
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { post } = await getPost(params.postId);
  const { posts } = await getBlogData();
  if (post) return <div className="w-[90vw]  mx-auto"></div>;
}
