import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const { posts } = await getBlogPosts();
    const post = posts.find((post) => post.postId === params.postId);
    if (!post) {
      return new NextResponse("not found", { status: 404 });
    }
    if (post) {
      return NextResponse.json({
        post,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
