"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-max  lg:bg-transparent flex  flex-row justify-between py-3 px-3 lg:px-[8vw] absolute left-0 top-0 z-[1000] space-x-6">
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
        <button className="group absolute top-[50%] -translate-y-[50%] lg:top-[0%] lg:-translate-y-[0%] right-0 lg:relative w-full lg:w-3/4 p-3 bg-white bg-opacity-10 rounded-lg flex my-auto ">
          <FaSearch className="h-full w-7 text-zinc-500" />
          <div className="text-white absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] opacity-100 group-hover:opacity-0 duration-150">
            Czego szukasz?
          </div>
          <div className="text-white absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 duration-300">
            Kliknij i szukaj
          </div>
        </button>
        <div className="lg:ml-24 fixed top-0 left-0 w-full lg:w-3/4 px-0 flex text-white flex-col items-center font-coco font-bold text-xl">
          {["blog", "sklep", "faq"].map((menuItem, i) => (
            <Link
              key={i}
              className="p-5 w-full border-r-2 lg:border-r-0 lg:border-t-0  border-white lg:p-2 flex items-center justify-center hover:underline duration-200"
              href={`/${menuItem}`}
            >
              {menuItem}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
