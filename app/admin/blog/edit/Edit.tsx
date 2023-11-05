"use client";
import { Post } from "@/app/types";
import Link from "next/link";
import EditPost from "./EditPost";
import { useState } from "react";
import Image from "next/image";

export default function Edit({ posts }: { posts: Post[] }) {
  const [selectedPost, setSelectedPost] = useState<Post>();

  return (
    <div>
      {selectedPost && (
        <EditPost
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      )}
      {!selectedPost && (
        <div className="flex flex-col pt-24 px-3 lg:px-6">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Który post chcesz edytować?
          </h1>
          <div className="flex flex-col items-center justify-center">
            {!posts && (
              <div className="flex flex-col items-center justify-center space-y-6">
                <h1 className="text-3xl w-max mx-auto text-white drop-shadow shadow-black">
                  Brak postów
                </h1>
                <Link
                  href="/admin/blog/new"
                  className="p-3 bg-green-400 test-white mx-auto"
                >
                  Dodaj post
                </Link>
              </div>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 ">
              {posts &&
                posts?.map((post: Post, i: number) => (
                  <div
                    onClick={() => setSelectedPost(post)}
                    key={i}
                    className="cursor-pointer group relative aspect-square h-max flex flex-col hover:bg-green-300 hover:p-1 duration-300 ease-in-out rounded-lg shadow-md  shadow-zinc-700"
                  >
                    <div className="w-full overflow-hidden flex items-start">
                      <Image
                        src={post.mainImage}
                        width={1024}
                        height={1024}
                        alt=""
                        className="w-full object-contain rounded-lg shadow-md shadow-zinc-700"
                      />
                    </div>
                    <h1 className="group-hover:bg-gray-200 duration-300 group-hover:p-4 absolute bottom-3 left-3 right-3 text-base lg:text-xl  drop-shadow-xl shadow-black mt-3 bg-white text-zinc-700 font-bold  text-left p-3 rounded-lg">
                      {post.title}
                    </h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
