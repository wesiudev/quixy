// export async function generateStaticParams() {
//   const { posts } = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/`
//   ).then((res) => res.json());

//   return posts.map((post) => ({ postId: post.postId }));
// }

// export const dynamicParams = false;

// export default async function Page({ params }) {
//   const { post } = await getPost(params.postId);
//   if (post) return <div className="w-[90vw] flex flex-row mx-auto"></div>;
// }

// {
/* <div className="flex flex-col p-12">
            <h1 className="leading-relaxed font-bold">{input.title}</h1>
            <h3 className="italic  leading-relaxed font-italic font-light">
              {input.intro}
            </h3>
            {input.sections.length > 0 && (
              <p className="">W tym poście przeczytasz o:</p>
            )}
            <div className="flex flex-col ml-6">
              {input.sections.map((section: any, idx) => (
                <h4 key={idx} className="relative h-12">
                  <ScrollTo
                    className=" text-blue-400 flex flex-row items-center cursor-pointer hover:bg-gray-100 duration-150 absolute left-0 top-0 z-20 h-full w-full"
                    activeClass="active"
                    to={`${polishToEnglish(section.title)}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <FaLink className="text-gray-500 mr-2 min-w-[25px]" />{" "}
                    {section.title}
                  </ScrollTo>
                </h4>
              ))}
            </div>

            {input.sections.map((section: any, idx) => (
              <div id={`${polishToEnglish(section.title)}`} key={idx}>
                <h3 key={idx} className="font-bold">
                  {section.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={renderMarkdown(section.content)}
                />
              </div>
            ))}
            <h3 className="italic  leading-relaxed font-italic font-light">
              {input.outro}
            </h3>
            <div className="flex flex-row space-x-6 flex-wrap">
              {input.tags.map((tag: any, i) => (
                <Link href={`/blog/?tag=${tag.name}`} key={i}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          </ */
// }
