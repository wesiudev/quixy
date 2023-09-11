"use client";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBlog,
  FaClock,
  FaHome,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
export const Header = () => {
  const [isContactOpen, setContactOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-max bg-green-500 flex  flex-row justify-between py-3 px-3 lg:px-[8vw] fixed left-0 top-0 shadow-md shadow-black z-[1000] space-x-6">
      <Link href="/" className="py-2  rounded-md font-signika text-3xl">
        <Image
          src={logo}
          width={512}
          height={512}
          alt="Tworzenie stron internetowych Quixy.pl logo"
          className="max-h-[72px] w-auto"
        />
      </Link>
      <div className="flex flex-row items-center justify-between w-3/4 relative">
        <button className="group absolute top-[50%] -translate-y-[50%] lg:top-[0%] lg:-translate-y-[0%] right-0 lg:relative w-full lg:w-3/4 p-3 bg-white rounded-lg flex my-auto ">
          <FaSearch className="h-full w-7 text-green-500" />
          <div className="text-zinc-500 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] opacity-100 group-hover:opacity-0 duration-150">
            Czego szukasz?
          </div>
          <div className="text-zinc-500 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 duration-300">
            Kliknij i szukaj
          </div>
        </button>
        <div className="fixed lg:relative bottom-0 left-0 grid grid-cols-2 bg-green-500 w-full px-0 lg:flex text-zinc-800 md:justify-end md:flex-row items-center lg:space-x-6 font-coco font-bold text-xl">
          <Link
            className="p-5 border-t-2 border-r-2 lg:border-r-0 lg:border-t-0 border-b-2 lg:border-b-0 border-white lg:p-2 flex items-center justify-center hover:bg-green-300 duration-200"
            href="Blog"
          >
            Blog
          </Link>
          <Link
            className="p-5 border-t-2 lg:border-t-0 lg:p-2 flex items-center justify-center border-b-2 lg:border-b-0 border-white hover:bg-green-300 duration-200"
            href="Sklep"
          >
            Sklep
          </Link>
          <Link
            className="p-5 lg:p-2 flex items-center justify-center border-r-2 lg:border-r-0 border-white hover:bg-green-300 duration-200"
            href="Sklep"
          >
            Kontakt
          </Link>
          <Link
            className="p-5 lg:p-2 flex items-center justify-center hover:bg-green-300 duration-200"
            href="Blog"
          >
            Faq
          </Link>
        </div>
      </div>
    </div>
  );
};
