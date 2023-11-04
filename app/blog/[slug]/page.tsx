import { getPost } from "@/app/lib/getPost";
import Image from "next/image";
import load from "../load.jpg";
import { Post, Section } from "@/app/types";
import ScrollTo from "./ScrollTo";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
import { renderMarkdown } from "@/app/lib/parseMarkdown";
import SeoModule from "@/app/components/SeoModule/SeoModule";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import moment from "moment";
export async function generateStaticParams() {
  const { posts } = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`
  ).then((res) => res.json());

  return posts.posts.map((post: Post) => ({ slug: post.url }));
}

export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const { post } = await getPost(params.slug);
  const faqQuestions = post?.faq?.map(
    (item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })
  );
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions,
  };
  const title = `${post.metaTitle} - Quixy.pl`;
  const description = `${post.metaDescription}`;
  if (post)
    return {
      title: title,
      description: description,
      openGraph: {
        type: "website",
        url: "https://quixy.pl",
        title,
        description,
        siteName: "Quixy",
        images: [
          {
            url: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            url: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            url: "/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            url: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            url: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: "@quixy",
        title,
        description,
        image: {
          url: "/android-chrome-512x512.png",
          alt: "Quixy Logo",
        },
      },
      schema: [faqPage],
      meta: [
        {
          name: "theme-color",
          content: "#8cf562", // replace with your desired theme color
        },
      ],
    };
}

export default async function Page({ params }: { params: any }) {
  const { post }: { post: Post } = await getPost(params.slug);

  if (post)
    return (
      <>
        {" "}
        <div className={`w-full px-3 lg:px-[8vw] bg-zinc-600 pt-12`}>
          <Link
            href="/blog"
            className="w-full text-center text-3xl lg:text-4xl lg:w-max mx-auto lg:mx-0 italic bg-white text-black p-4 px-8 lg:rounded-lg shadow-md shadow-zinc-700 font-coco font-bold my-12"
          >
            <span className="text-zinc-800 drop-shadow shadow-black ">
              Blog
            </span>{" "}
            <span className="font-bold text-yellow-400 drop-shadow shadow-black ">
              Quixy
            </span>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full font-coco">
            {/* 1 */}
            <div className="flex flex-col h-full">
              <div className="prose 2xl:prose-xl prose-invert">
                <h1 className="!text-3xl lg:!text-4xl 2xl:!text-5xl mx-auto font-bold text-green-300">
                  {post.title}
                </h1>
                <h4
                  className="pb-12 font-light"
                  dangerouslySetInnerHTML={renderMarkdown(post.intro)}
                ></h4>
                {post.sections.length > 0 && (
                  <h4 className="text-white italic drop-shadow-lg shadow-black">
                    Spis treści
                  </h4>
                )}
                <div className="flex flex-col mb-6">
                  {post.sections.map((section: Section, idx) => (
                    <h4 key={idx} className="relative h-12">
                      <ScrollTo section={section} />
                    </h4>
                  ))}
                </div>
                {post.sections.map((section: Section, idx) => (
                  <div id={`${polishToEnglish(section.title)}`} key={idx}>
                    <h3 key={idx} className="text-green-300">
                      {section.title}
                    </h3>

                    <p
                      dangerouslySetInnerHTML={renderMarkdown(section.content)}
                    />
                  </div>
                ))}
                <h4 className="w-full shadow-black font-light">{post.outro}</h4>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col h-full w-full items-end">
              <div className="lg:w-3/4 h-full">
                {/* <Link
                  href="/blog"
                  className="group px-3 lg:px-0  text-white font-bold text-2xl mt-6 flex flex-row items-center hover:text-green-400 duration-150 w-max mb-12"
                >
                  <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
                  Artykuły powiązane
                </Link> */}
                {/* <Link
              href="/blog/jak-wypromować-sklep-e-commerce-z-zegarkami"
              className="group"
            >
              <div className="bg-gray-200 p-3 bg-opacity-20 rounded-xl group-hover:bg-opacity-10 duration-150">
                <h1 className="text-xl lg:text-3xl drop-shadow shadow-black font-bold mb-6 text-white">
                  Jak wypromować sklep e-commerce z zegarkami?
                </h1>
                <div className="grid grid-cols-3">
                  <Image
                    src={watch}
                    width={1024}
                    height={1024}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-10-Louis-Moinet-LM-39.50.80.png"
                    className=""
                  />
                  <Image
                    src={watch2}
                    width={1024}
                    height={1024}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-5-Longines-Master-Collection.png"
                    className=""
                  />
                  <Image
                    src={watch3}
                    width={1024}
                    height={1024}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-4-Vacheron-Constantin-Dragon.png"
                    className=""
                  />
                </div>
              </div>
            </Link> */}
              </div>
            </div>
          </div>
        </div>
        <SeoModule pt={true} />
      </>
    );
}
