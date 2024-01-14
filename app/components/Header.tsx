"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  return (
    <div className="fixed left-0 top-0 w-full h-max  flex flex-row justify-between py-3 px-3  z-[1000] space-x-6 ">
      <Link href="/" className="py-2 rounded-md text-3xl">
        <Image
          src="/assets/logo.png"
          width={144}
          height={144}
          alt="Tworzenie stron internetowych Quixy.pl logo"
          className="max-h-[72px] w-auto lg:ml-3 lg:mt-3"
        />
      </Link>
      <div className="flex flex-row items-end w-full lg:w-max justify-between relative ">
        <div className="fixed lg:relative bg-black lg:bg-transparent left-0 bottom-0 w-full lg:w-3/4 lg:pr-12 lg:pl-6 flex text-white flex-row items-center font-coco font-bold text-xl ">
          <Link
            className={`p-3 w-full border-white flex items-center justify-center hover:underline duration-200`}
            href={`/faq`}
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
