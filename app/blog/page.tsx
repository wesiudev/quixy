import { getBlogPosts } from "@/firebase";
import Link from "next/link";

export default async function Page() {
  const posts = await getBlogPosts("quixy");
  console.log(posts);

  return <div></div>;
}
