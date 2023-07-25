import Link from "next/link";
import { IPost } from "../blog/FeaturedPosts";
import { polishToEnglish } from "../utils/polishToEnglish";
import Image from "next/image";
import moment from "moment";
import { FaBook } from "react-icons/fa";

export default function BlogInviter({ posts }: { posts: IPost[] }) {
  return (
    <div className="w-full flex flex-col   bg-rose-300 pb-6">
      <h1 className="text-3xl text-left w-[90vw]  p-3 pl-0 font-sans mb-3 rounded-lg mx-auto font-bold">
        Czytaj o manicure:
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3 w-[90vw] mx-auto">
        {posts?.map((post: IPost, idx: number) => (
          <div
            key={idx}
            className="bg-rose-500 p-3 my-3 lg:my-0 rounded-md h-max group cursor-pointer"
          >
            <Link href={`/blog/${polishToEnglish(post.postId)}`}>
              <div className="relative overflow-hidden">
                <div className="absolute right-3 bottom-3 font-pars text-3xl text-white text-opacity-40 z-50">
                  Piękniej
                </div>

                <Image
                  src={post.imageUrl}
                  alt=""
                  width={512}
                  height={512}
                  className="rounded-md scale-100 group-hover:rounded-xl group-hover:scale-110 group-hover:rotate-2 group-hover:translate-x-[5px] group-hover:translate-y-[5px] ease-in-out duration-500"
                />
              </div>
              <div className="flex flex-row w-full justify-between text-white font-sans py-2">
                <span>{moment(post.creationTime).format("DD.MM.YYYY")}</span>
                <span className="flex flex-row items-center gap-1">
                  <FaBook />
                  {post.readingTime} min.
                </span>
              </div>
              <div className="pt-3 flex flex-col">
                <h1 className="text-white font-sans text-xl">{post.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
