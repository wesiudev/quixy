"use client";
import { WebsiteOffer } from "@/app/types";
import Image from "next/image";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
export default function ShopItem({
  item,
  currentPage,
  index,
  labelColor,
}: {
  item: WebsiteOffer;
  index: number;
  currentPage: string;
  labelColor?: string;
}) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      {item.websiteId !== currentPage && (
        <Link
          data-aos="fade-up"
          data-aos-delay={index * 100}
          href={`/${item.city}/${item.websiteId}`}
        >
          <div
            className={`mt-3 lg:mt-0 group bg-white duration-200 aspect-square w-full flex flex-col justify-between items-center relative`}
          >
            <div className="group-hover:-rotate-0 group-hover:scale-125 group-hover:-mt-4 duration-200 absolute left-2 top-2 w-max px-3 py-1 bg-green-600 rounded-lg text-white flex items-center justify-center z-50 font-coco">
              od {item.price}
            </div>
            <div className="absolute w-full h-full left-0 top-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-green-300 "></div>
            </div>
            <div
              style={{
                backgroundColor: labelColor ? labelColor : "bg-zinc-800",
              }}
              className="text-lg font-coco font-bold bg-zinc-800 text-white w-full mx-auto bottom-0 text-center p-2 select-none z-[60] absolute"
            >
              {item.name.toLocaleUpperCase()}
            </div>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={1024}
              height={1024}
              className={`h-2/4 w-auto lg:mb-12 z-50 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] group-hover:scale-110 group-hover:z-[61] duration-150`}
            />
          </div>
        </Link>
      )}
    </>
  );
}
