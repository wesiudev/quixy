import Image from "next/image";
import { Post } from "../types";
import load from "./load.jpg";
import Link from "next/link";
import Motivation from "../components/Motivation";

import { Footer } from "../components/Footer";
import shopItems from "@/public/json/ShopContent.json";
import UnderHero from "../components/UnderHero";
async function getBlogData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const posts = req.json();
  return posts;
}
export default async function Blog() {
  const { posts } = await getBlogData();

  return (
    <>
      <div className="w-full min-h-screen bg-[#444444] grid grid-cols-1  pt-12 pb-24 relative z-50 px-6 lg:px-[8vw]">
        <div className="">
          <h1 className="w-full text-center text-3xl lg:text-4xl lg:w-max mx-auto lg:mx-0 italic bg-white text-black p-4 px-8 lg:rounded-lg shadow-md shadow-zinc-700 font-coco font-bold my-12">
            <span className="text-zinc-800 drop-shadow shadow-black ">
              Blog
            </span>{" "}
            <span className="font-bold text-yellow-500 drop-shadow shadow-black ">
              Quixy
            </span>
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.posts.map((post: Post, i: number) => (
              <Link
                href={`/blog/${post.url}`}
                key={i}
                className="flex flex-col"
              >
                <Image
                  src={load}
                  width={1024}
                  height={1024}
                  alt=""
                  className="w-full"
                />
                <h1 className="text-base lg:text-xl text-white drop-shadow shadow-black mt-3">
                  {post.title}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <UnderHero />
      <Motivation />
      <Footer content={shopItems.shopItems} />
    </>
  );
}
