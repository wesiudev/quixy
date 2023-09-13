/* eslint-disable @next/next/no-img-element */

import { getWebsiteInfo } from "@/app/lib/getWebsiteInfo";
import Image from "next/image";
import ninja from "@/app/assets/ninja-strony-internetowe-quixy.png";
import superhero from "@/app/assets/superdoge-strony-internetowe-quixy.png";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import UnderHero from "@/app/components/UnderHero";
import Shop from "@/app/components/shop/Shop";
import { getShopContent } from "@/app/lib/getShopContent";
import About from "@/app/components/About";
import shopItems from "@/public/json/ShopContent.json";
export async function generateStaticParams() {
  const pages = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/pages`
  ).then((res) => res.json());
  return pages.pages.map((page) => ({
    city: page.city,
    websiteId: page.websiteId,
  }));
}

export async function generateMetadata({ params }) {
  // fetch data
  const { page } = await getWebsiteInfo(params.city, params.websiteId);
  return {
    title: `Quixy.pl - Programowanie stron internetowych - ${page.name} - Grafika komputerowa - Projektowanie logo`,
    description: `Usługi programistyczne Quixy.pl. ${page.summary}`,
  };
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { page } = await getWebsiteInfo(params.city, params.websiteId);
  const ItemsList = await getShopContent();
  if (page)
    return (
      <>
        {/* <Hero /> */}
        <div className="min-h-screen w-full pt-24 px-3 lg:px-[8vw] mx-auto bg-gradient-to-b bg-green-400 relative overflow-hidden">
          <div className="absolute h-4 bg-green-400 blur-sm -bottom-2 left-0 w-full"></div>
          {/* <ShopHeadline title={page.name} /> */}
          <div className="absolute left-6 lg:left-[8vw] -top-12 h-24 w-24 bg-white rotate-45 bg-opacity-10"></div>
          <Image
            src={ninja}
            width={1024}
            height={1024}
            alt="strony internetowe quixy.pl ninja obrazek"
            className="w-1/2 sm:w-1/3 p-6 overflow-visible absolute right-0 top-36 lg:top-0 lg:hidden z-20"
          />
          <h1 className="absolute left-[50%] -translate-x-[50%] top-36 text-right px-[8vw] w-full text-gray-50 opacity-10 text-9xl drop-shadow-xl shadow-black select-none">
            {page.description.h1}
          </h1>
          <div className=" flex flex-col w-full mx-auto mt-24">
            <div className="py-12 font-bold relative flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5  relative">
                <h1 className="relative w-full text-gray-50 text-3xl lg:text-7xl drop-shadow-xl shadow-black mt-36 lg:pr-12 z-30">
                  {page.description.h1}
                </h1>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col text-left ">
                    {page.description.reasons.map((reason, idx) => (
                      <div
                        className="mt-6 relative flex lg:pr-12 z-30"
                        key={idx}
                      >
                        <div className="p-3 rounded-xl bg-white flex items-center mr-3 text-2xl">
                          {idx + 1}.
                        </div>
                        <div className="bg-white rounded-xl p-3 font-normal text-lg w-full ">
                          {reason}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full relative">
                    <h1 className="absolute left-[50%] -translate-x-[50%] top-12 text-right px-[8vw] w-full text-gray-50 opacity-10 text-9xl drop-shadow-xl shadow-black select-none">
                      CHARAKTERYSTYKA TECHNICZNA
                    </h1>
                    <h1 className="w-full text-gray-50 text-3xl sm:text-6xl lg:text-5xl xl:text-6xl drop-shadow-xl shadow-black mt-36 pr-12 z-[100]">
                      CHARAKTERYSTYKA TECHNICZNA
                    </h1>
                    <div className="mt-6 relative flex lg:pr-12">
                      <div className="p-3 rounded-xl bg-white flex items-center mr-3">
                        <FaInfoCircle className=" h-6 w-6" />
                      </div>
                      <div className="bg-white rounded-xl p-3 font-normal text-lg w-full ">
                        {page.description.about}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 space-y-6 pr-12 mt-6">
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">1.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Analiza potrzeb i celów
                        </h1>
                      </div>
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">2.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Planowanie i strategia
                        </h1>
                      </div>
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">3.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Projektowanie
                        </h1>
                      </div>
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">4.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Development (tworzenie strony)
                        </h1>
                      </div>
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">5.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Testowanie i optymalizacja
                        </h1>
                      </div>
                      <div className="relative flex flex-row items-start">
                        <div className="text-3xl text-white opacity-50">6.</div>
                        <h1 className="text-3xl font-light text-white ml-3">
                          {" "}
                          Wdrażanie i szkolenie
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 items-end justify-end hidden lg:flex lg:flex-col lg:items-start lg:justify-start relative overflow-hidden h-max">
                <div className="bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 rounded-t-full pb-12">
                  <Image
                    src={ninja}
                    width={1024}
                    height={1024}
                    alt="strony internetowe quixy.pl ninja obrazek"
                    className="w-full bg-gradient-to-tr from-green-600 via-green-400 to-yellow-300 rounded-full p-6 overflow-visible "
                  />
                </div>
                <div className="w-full p-3 xl:p-6 shadow-md shadow-green-700 rounded-xl bg-green-600 flex justify-between items-center ">
                  <div className="flex flex-col w-full ">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col">
                        <span className="w-max text-white pr-6 ">
                          {page.name}
                        </span>
                        <span className="w-max text-white">
                          od {page.price}
                        </span>
                      </div>
                      <Link
                        href={`/zamow-strone-internetowa/`}
                        className="w-max text-center text-black font-light text-xl bg-yellow-300 rounded-md px-3 py-2 shadow-md shadow-green-700"
                      >
                        ZAMÓW STRONĘ
                      </Link>
                    </div>
                    <div className="h-max mt-6 flex flex-col">
                      <h1 className="text-white text-xl mb-6 font-bold">
                        NAJWAŻNIEJSZE INFORMACJE
                      </h1>
                      <div className="flex flex-col ">
                        {page.description.infos.map((info, i) => (
                          <div
                            key={i}
                            className="flex flex-row items-center hover:bg-green-400 p-2"
                          >
                            <FaCheck className="text-green-500 bg-white p-1 rounded-3xl" />
                            <div className="text-left text-gray-100 select-none ml-2 font-light text-xl">
                              {" "}
                              {info}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-visible mt-12 aspect-square flex items-center justify-center">
                  <Image
                    src={superhero}
                    width={1024}
                    height={1024}
                    alt="strony internetowe quixy.pl superhero obrazek"
                    className="w-2/3 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <UnderHero />
        <Shop ItemsList={ItemsList} />
        <About />
      </>
    );
}
