import { FaArrowRight } from "react-icons/fa";
import ShopItem from "./ShopItem";
import Link from "next/link";

export default function Shop({
  ItemsList,
  pb,
}: {
  ItemsList: any;
  pb: boolean;
}) {
  const ShopContent = ItemsList.shopItems;
  return (
    <div
      className={`min-h-screen w-screen bg-[#1b1b1b] bg-opacity-80 flex flex-col pb-24 relative z-50 px-6 lg:px-[12vw] ${
        pb && "lg:pb-60 sm:pb-48 pb-24"
      }`}
    >
      <h1 className="w-full text-center text-3xl lg:text-4xl lg:w-max mx-auto lg:mx-0 italic bg-white text-black p-4 px-8 lg:rounded-lg drop-shadow shadow-black font-coco font-bold my-12">
        <span className="text-zinc-800 drop-shadow shadow-black ">Kupuj w</span>{" "}
        <span className="font-bold text-yellow-500 drop-shadow shadow-black ">
          Quixy
        </span>
      </h1>
      <Link
        href="/strony-internetowe"
        className="group text-white font-bold text-2xl flex flex-row items-center hover:text-green-400 duration-150 w-max"
      >
        <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
        Strony internetowe
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-12 mt-6">
        {ShopContent.map((service: any, i: any) => (
          <Link
            className={`${i > 2 && "hidden"} `}
            key={i}
            href={`/${service.city}/${service.websiteId}`}
          >
            <ShopItem index={i} key={i} item={service} isGraphic={false} />
          </Link>
        ))}
      </div>
      <Link
        href="/grafika-komputerowa"
        className="group text-white font-bold text-2xl mt-6 flex flex-row items-center hover:text-green-400 duration-150 w-max"
      >
        <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
        Grafika komputerowa
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-6 gap-6 lg:gap-12">
        {ShopContent.map((service: any, i: any) => (
          <>
            {service.isGraphic && (
              <Link key={i} href={`/${service.city}/${service.websiteId}`}>
                <ShopItem
                  index={i}
                  key={i}
                  item={service}
                  isGraphic={service.isGraphic}
                />
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
