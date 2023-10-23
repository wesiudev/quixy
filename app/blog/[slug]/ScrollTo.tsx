"use client";
import * as Scroll from "react-scroll";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
import { Section } from "@/app/types";
import { FaLink } from "react-icons/fa";

export default function ScrollTo({ section }: { section: Section }) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      className=" text-white flex flex-row items-center cursor-pointer hover:bg-gray-400 duration-150 absolute left-0 top-0 z-20 h-full w-full"
      activeClass="active"
      to={`${polishToEnglish(section.title)}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <FaLink className="text-green-300 mr-2 min-w-[25px]" /> {section.title}
    </ScrollTo>
  );
}
