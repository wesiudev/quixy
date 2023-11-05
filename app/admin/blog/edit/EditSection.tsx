"use client";
import { Post, Section } from "@/app/types";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function EditSection({
  selectedSection,
  setSelectedSection,
  selectedPost,
  setSelectedPost,
}: {
  selectedSection: Section | undefined;
  setSelectedSection: Function;
  selectedPost: Post;
  setSelectedPost: Function;
}) {
  const updateSelectedPost = () => {
    if (selectedSection) {
      const updatedSections = selectedPost.sections.map((section, i) =>
        i === selectedSection.id
          ? {
              ...section,
              title: selectedSection.title,
              content: selectedSection.content,
            }
          : section
      );
      setSelectedPost({ ...selectedPost, sections: updatedSections });
    }
  };
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(600);
  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - event.clientX;
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);
  return (
    <div
      style={{ width: `${width}px` }}
      className={`h-screen fixed right-0 top-0 bg-[#222430] z-[55] text-white  ease-in-out ${
        selectedSection ? "translate-x-[0%]" : "translate-x-[120%]"
      } ${isResizing ? "select-none duration-0" : "duration-500"}`}
    >
      <div className="flex flex-col w-full relative">
        <div
          onMouseDown={handleMouseDown}
          className="absolute left-0 top-0 h-screen w-[5px] bg-[#31323a] cursor-w-resize"
        ></div>
        <button
          onClick={() => {
            setSelectedSection("");
          }}
          className="absolute left-0 -translate-x-[100%] w-max p-3 top-3 flex flex-row items-center bg-red-400 hover:bg-red-600 duration-200"
        >
          Zamknij
          <FaArrowRight className="ml-3" />
        </button>
        <div className="p-3 lg:p-6">
          <div className="flex flex-col space-y-3">
            Tytuł sekcji
            <input
              placeholder="Wpisz tekst..."
              value={selectedSection?.title}
              onChange={(e) =>
                setSelectedSection({
                  ...selectedSection,
                  title: e.target.value,
                })
              }
              className="!text-black bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-3">
            Treść sekcji
            <textarea
              className="!text-black bg-slate-400 mt-1 p-2 placeholder:text-gray-500 outline-none scrollbarMain h-[50vh]"
              placeholder="Wpisz treść sekcji..."
              value={selectedSection?.content}
              onChange={(e) =>
                setSelectedSection({
                  ...selectedSection,
                  content: e.target.value,
                })
              }
            />
          </div>
          <button
            className="bg-transparent hover:bg-green-700 duration-500 ease-in-out p-6 w-full mt-6"
            onClick={() => updateSelectedPost()}
          >
            Zatwierdź sekcję
          </button>
        </div>
      </div>
    </div>
  );
}
