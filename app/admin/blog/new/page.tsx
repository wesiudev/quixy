"use client";
import { renderMarkdown } from "@/app/lib/parseMarkdown";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
import { addBlogPost, auth } from "@/firebase";
import Link from "next/link";
import { useState } from "react";
import { FaLink, FaTrash } from "react-icons/fa";
import * as Scroll from "react-scroll";
import PostImages from "./PostImages";
import { useAuthState } from "react-firebase-hooks/auth";
var randomId = require("random-id");
export default function NewPost() {
  const [input, setInput] = useState({
    title: "",
    sections: [],
    intro: "",
    outro: "",
    tags: [],
    url: "",
    postId: randomId(30, "aA0"),
    metaTitle: "",
    metaDescription: "",
    mainImage: "",
  });

  const [sectionInput, setSectionInput] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const addSection = (value: string) => {
    setInput((prevInput: any) => ({
      ...prevInput,
      sections: [
        ...prevInput.sections,
        { title: value, content: sectionContent },
      ],
    }));
  };
  const addTag = () => {
    setInput((prevInput: any) => ({
      ...prevInput,
      tags: [...prevInput.tags, { name: `#${tagInput}` }],
    }));
  };

  let ScrollTo = Scroll.Link;
  {
    /* {"![alt text](image-url) [link text](link-url)"} */
  }

  const removeSection = (idx: number) => {
    const newSections = [...input.sections];
    newSections.splice(idx, 1);
    setInput({ ...input, sections: newSections });
  };
  const removeTag = (idx: number) => {
    const newTags = [...input.tags];
    newTags.splice(idx, 1);
    setInput({ ...input, tags: newTags });
  };

  return (
    <div className="relative">
      {messageVisible && (
        <div
          className={`bg-green-500 text-3xl w-screen lg:w-max h-max p-12 fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex items-center justify-center`}
        >
          Twój link do posta to: /{polishToEnglish(input.title)}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 pt-0 pr-0 text-white gap-y-6 w-full">
        <div className="flex flex-col space-y-3 w-full">
          <h1 className="w-full text-3xl text-white font-bold pt-24">
            Nowy post
          </h1>
          <div className="grid grid-cols-1 text-lg h-max w-full">
            <PostImages input={input} setInput={setInput} />
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col my-3 space-y-3">
                {" "}
                Tytuł
                <textarea
                  placeholder="Wpisz tytuł..."
                  rows={5}
                  value={input.title}
                  onChange={(e) =>
                    setInput({ ...input, title: e.target.value })
                  }
                  className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                />
              </div>
              <div className="flex flex-col my-3 space-y-3">
                Tytuł SEO
                <textarea
                  placeholder="Wpisz tytuł SEO... (max 60 znaków)"
                  rows={5}
                  value={input.metaTitle}
                  onChange={(e) =>
                    setInput({ ...input, metaTitle: e.target.value })
                  }
                  className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                />
                Pozostałe znaki: {60 - input.metaTitle.length}/60
              </div>
              <div className="flex flex-col my-3 space-y-3">
                Opis SEO
                <textarea
                  placeholder="Wpisz opis SEO... (max 160 znaków)"
                  rows={5}
                  value={input.metaDescription}
                  onChange={(e) =>
                    setInput({ ...input, metaDescription: e.target.value })
                  }
                  className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                />
                Pozostałe znaki: {160 - input.metaDescription.length}/160
              </div>
            </div>

            <div className="flex flex-col my-3 space-y-3">
              {" "}
              Wstęp
              <textarea
                placeholder="Wpisz tekst..."
                rows={6}
                value={input.intro}
                onChange={(e) => setInput({ ...input, intro: e.target.value })}
                className="!text-black bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500  scrollbarMain resize-none"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col w-full my-3">
                <div className="flex flex-col space-y-3">
                  Tytuł sekcji
                  <input
                    placeholder="Wpisz tekst..."
                    value={sectionInput}
                    onChange={(e) => setSectionInput(e.target.value)}
                    className="!text-black bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  Treść sekcji
                  <textarea
                    className="!text-black bg-slate-400 mt-1 p-2 placeholder:text-gray-500 outline-none "
                    placeholder="Wpisz treść sekcji..."
                    value={sectionContent}
                    onChange={(e) => setSectionContent(e.target.value)}
                  />
                </div>
              </div>
              <button
                value={sectionInput}
                onClick={(e: any) => {
                  addSection(e.target.value), setSectionInput("");
                }}
                className="!text-lg w-full bg-blue-500 hover:bg-blue-700 duration-200 text-white flex flex-row items-center justify-center mt-3 outline-none py-2"
              >
                Dodaj
              </button>
              {input.sections.length > 0 && (
                <div className="bg-[#2F313C] p-3 rounded-md mt-2">
                  <h1 className="">Twoje sekcje:</h1>
                  {input.sections.map((section: any, idx) => (
                    <div key={idx}>
                      <div className="flex flex-row items-center my-2 hover:bg-[#34363d] p-1">
                        {section.title}{" "}
                        <button
                          onClick={() => removeSection(idx)}
                          className="ml-3"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col my-3">
            {" "}
            Zakończenie
            <input
              placeholder="Wpisz tekst..."
              value={input.outro}
              onChange={(e) => setInput({ ...input, outro: e.target.value })}
              className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
              type="text"
            />
          </div>
          <div className="flex flex-col ">
            <div>Utwórz tagi</div>
            <div className="relative h-max w-max">
              <div className="absolute left-2 top-[53%] -translate-y-[50%] text-gray-700 select-none placeholder:text-gray-500">
                #
              </div>
              <input
                placeholder="Wpisz tekst..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="!text-black  bg-slate-400 mt-1 p-2 pl-6 outline-none placeholder:text-gray-500"
                type="text"
              />
            </div>
            <button
              value={tagInput}
              onClick={() => {
                addTag();
                setTagInput("");
              }}
              className="!text-lg w-full bg-blue-500 hover:bg-blue-700 duration-200 text-white flex flex-row items-center justify-center mt-3 outline-none py-2"
            >
              Dodaj
            </button>
            {input.tags.length > 0 && <h1 className="my-2">Twoje tagi:</h1>}
            {input.tags.map((tag: any, i) => (
              <div key={i} className="flex flex-row items-center">
                {tag.name}
                <button onClick={() => removeTag(i)} className="ml-3">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          {!input.url && (
            <button
              onClick={() => {
                setInput({ ...input, url: polishToEnglish(input.title) }),
                  setMessageVisible(true);
                setTimeout(() => {
                  setMessageVisible(false);
                }, 6000);
              }}
              className="py-6 bg-green-500 text-2xl text-white hover:bg-green-400 duration-200"
            >
              UTWÓRZ LINK
            </button>
          )}
          {input.url !== "" && (
            <button
              onClick={() => {
                addBlogPost("quixy", input);
              }}
              className="py-6 bg-green-500 text-2xl text-white hover:bg-green-400 duration-200"
            >
              OPUBLIKUJ
            </button>
          )}
        </div>
        <div className="flex flex-col relative w-full ">
          <div className="absolute w-full ">
            <div className="fixed h-screen overflow-y-scroll scrollbarMain w-full">
              <h1 className="w-full px-3 pl-12 text-3xl text-white font-bold z-[50] pt-24">
                Podgląd
              </h1>
              <div className="flex flex-col p-12  prose lg:prose-xl prose-invert pr-28">
                <h1 className="leading-relaxed font-bold">{input.title}</h1>
                <h3 className="italic  leading-relaxed font-italic font-light">
                  <div dangerouslySetInnerHTML={renderMarkdown(input.intro)} />
                </h3>
                {input.sections.length > 0 && (
                  <p className="">W tym poście przeczytasz o:</p>
                )}
                <div className="flex flex-col ml-6">
                  {input.sections.length > 0 &&
                    input.sections.map((section: any, idx) => (
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
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
