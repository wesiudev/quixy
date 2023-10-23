import { FaArrowRight } from "react-icons/fa";
import ShopItem from "./ShopItem";
import Link from "next/link";

export default function Shop({
  ItemsList,
  filter,
  currentPage,
}: {
  ItemsList: any;
  filter: string;
  currentPage: string;
}) {
  const ShopContent = ItemsList.shopItems;
  return (
    <div
      className={`h-max pb-12 w-screen bg-[#1b1b1b] bg-opacity-80 flex flex-col relative z-[150] px-6 lg:px-[8vw] `}
    >
      <h1 className="w-full text-center text-3xl lg:text-4xl lg:w-max mx-auto lg:mx-0 italic bg-white text-black p-4 px-8 lg:rounded-lg font-coco font-bold my-12 shadow-md shadow-zinc-700">
        <span className="text-zinc-800 drop-shadow shadow-black">Kupuj w</span>{" "}
        <span className="font-bold text-yellow-500 drop-shadow shadow-black">
          Quixy
        </span>
      </h1>

      <Link
        href="/blog/czym-sa-strony-internetowe-rodzaje-ceny-przyklady"
        className="group text-white font-bold text-2xl flex flex-row items-center hover:text-green-400 duration-150 w-max"
      >
        <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
        Strony internetowe
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-12 mt-6">
        {ShopContent.map(
          (service: any, i: any) =>
            !service.isGraphic &&
            service.city === filter && (
              <ShopItem
                index={i}
                key={i}
                item={service}
                currentPage={currentPage}
              />
            )
        )}
      </div>
      {/* <Link
        href="/grafika-komputerowa"
        className="group text-white font-bold text-2xl mt-6 flex flex-row items-center hover:text-green-400 duration-150 w-max"
      >
        <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
        Grafika komputerowa
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-6 gap-6 lg:gap-12">
        {ShopContent.map(
          (service: any, i: any) =>
            service.isGraphic && <ShopItem index={i} key={i} item={service} />
        )}
      </div> */}
    </div>
  );
}
