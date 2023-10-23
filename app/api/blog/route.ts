import { NextResponse, NextRequest } from "next/server";
import { getBlogPosts } from "@/firebase";
import { Post } from "@/app/types";
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const url = req.nextUrl.searchParams.get("url");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  const posts = await getBlogPosts("quixy");
  if (url) {
    const post = posts?.posts.find((post: Post) => url === post.url);
    if (!post) {
      return new NextResponse("not found", { status: 404 });
    }
    if (post) {
      return NextResponse.json({
        post,
      });
    }
  } else {
    return NextResponse.json({
      posts,
    });
  }
}
