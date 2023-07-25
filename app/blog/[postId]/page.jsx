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
  if (post)
    return (
      <div className="w-[90vw]  mx-auto">
        <div className="">
          <div className="w-full font-sans pb-6">
            <h1 className="font-sans italic font-light p-3 text-black bg-rose-200 rounded-md w-max text-xs sm:text-lg">
              /{" "}
              <Link
                href="/"
                className="hover:underline hover:underline-offset-2"
              >
                home
              </Link>{" "}
              /{" "}
              <Link
                href="/blog/"
                className="hover:underline hover:underline-offset-2"
              >
                blog
              </Link>{" "}
              /{" "}
              <Link
                href={`/blog/${post.postId}`}
                className="hover:underline hover:underline-offset-2"
              >
                {" "}
                {post.postId}
              </Link>
            </h1>
            <div className="w-full flex flex-col lg:flex-row">
              {/* post content */}
              <div className="w-full  bg-white-400 mt-6 rounded-lg relative lg:mr-6">
                <div className="w-full max-h-[30vh] overflow-hidden relative flex items-center justify-center rounded-lg">
                  <img
                    src={post.imageUrl}
                    alt="Post Image Manicure Grudziądz"
                    className="filter blur-sm object-cover brightness-50 w-full"
                  />
                  <h1 className="text-3xl w-4/5 rounded-xl text-center mx-auto absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
                    {post.title}
                  </h1>
                </div>

                <div className="bg-rose-200 text-black rounded-lg">
                  {post.content.map((row, idx) => (
                    <h2 key={idx} className={`text-lg mt-6 p-3 rounded-lg`}>
                      {row}
                    </h2>
                  ))}
                </div>
              </div>

              {/* reserve online */}

              <div className=" mt-6 rounded-md">
                <FeaturedPosts posts={posts.posts} />
              </div>
            </div>
            {/* comments */}

            <div className="flex flex-col  h-max bg-rose-200 p-6 mt-6 rounded-md">
              <h1 className="text-4xl text-black pb-6">Komentarze</h1>
              {post.comments.map((comment, idx) => (
                <div key={idx} className="w-full sm:w-1/2  text-black">
                  <div className="text-2xl">
                    {comment.isAdmin && (
                      <div className="flex flex-row items-center ">
                        <div className="w-12 h-12 bg-blue-500 flex items-center justify-center mr-2 rounded-full text-white">
                          A
                        </div>{" "}
                        <span>Anna Żebrowska</span>
                      </div>
                    )}
                  </div>
                  <div className="pl-14 pt-3">{comment.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
