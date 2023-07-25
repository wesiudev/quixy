import { RecentPosts } from "./components/RecentPosts";

async function getBlogData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
  const data = req.json();
  return data;
}

export default async function Blog() {
  const { posts } = await getBlogData();
  return (
    <div className="w-[90vw] mx-auto pb-6">
      <div className="lg:w-full flex flex-col lg:flex-row mr-5">
        <RecentPosts posts={posts.posts} />
      </div>
    </div>
  );
}
