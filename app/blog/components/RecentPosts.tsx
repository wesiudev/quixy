import Image from "next/image";
import moment from "moment";
import "moment/locale/pl";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
export interface IComment {
  content: string;
  likes: number;
  creationTime: number;
  isAdmin: boolean;
}

export interface IPost {
  title: string;
  content: string;
  comments: IComment[];
  imageUrl: string;
  creationTime: number;
  readingTime: number;
  postId: string;
}

export const RecentPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <div>
      {/* <Link href={`/blog/${polishToEnglish(post.postId)}`}></Link> */}
    </div>
  );
};
