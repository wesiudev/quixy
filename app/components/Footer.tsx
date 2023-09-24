import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { FaArrowRight, FaInstagram, FaFacebook, FaBlog } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
export const Footer = ({ content }: { content: any }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 bg-green-400 min-h-[30vh] pt-48 pb-24">
      <div className="">
        {content.map((page: any, i: number) => (
          <div key={i} className=" group">
            <div className="flex flex-col items-center group-hover:bg-green-200 duration-300 w-max mx-auto">
              <h2 className="prose lg:prose-xl hover:bg-green-300 py-px px-2 duration-300">
                {page.cityPropperName && page.cityPropperName}
              </h2>
              <Link
                className="hover:bg-green-300 py-px px-2 duration-300"
                href={`/${page.city}/${page.websiteId}`}
              >
                {page.linkName}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-start">
        <Image
          className="w-[200px] lg:w-[300px]"
          src={logo}
          width={420}
          height={420}
          alt="Quixy.pl Tworzenie Stron www logo"
        />
      </div>
    </div>
  );
};
