import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");
    if (secret !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }
    const { posts } = await getBlogPosts();
    const post = posts.find((post) => post.url === params.url);
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
