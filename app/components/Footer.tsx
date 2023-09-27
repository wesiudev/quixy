import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { FaArrowRight, FaInstagram, FaFacebook, FaBlog } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
export const Footer = ({ content }: { content: any }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 bg-green-400 min-h-[30vh] pt-48 pb-24 font-coco">
      <div className="text-left w-max mx-auto">
        <div className="text-3xl lg:text-4xl font-bold ">
          <h1>Aktywne oferty</h1>
        </div>
        {content.map((page: any, i: number) => (
          <div key={i} className="">
            <div className=" flex flex-col duration-300 ">
              <h2 className="text-xl my-6 font-bold">
                {page.cityPropperName && page.cityPropperName}
              </h2>
              <Link
                className="my-0 font-light italic"
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
