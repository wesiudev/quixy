import { Service } from "@/app/defs/defs";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function ShopItem({
  item,
  index,
  isGraphic,
}: {
  item: Service;
  index: number;
  isGraphic: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } `}
    >
      <div
        className={`mt-3 lg:mt-0 group bg-white hover:shadow-lg duration-200 shadow-black aspect-square w-full rounded-xl flex flex-col justify-between items-center relative`}
      >
        <div className="group-hover:-rotate-0  lg:group-hover:scale-125 group-hover:-mt-4 duration-200 absolute -left-8 lg:-left-6 -top-0 w-max p-3 -rotate-45 bg-yellow-400 rounded-lg text-gray-700 flex items-center justify-center z-50 font-coco shadow-sm shadow-gray-700">
          już od {item.price}
        </div>
        <div className="absolute w-full h-full left-0 top-0 overflow-hidden">
          <div className="w-full h-full  bg-gradient-to-br from-green-200 via-yellow-200 to-green-200 rotate-45 "></div>
        </div>
        <div className="text-lg font-coco font-bold bg-green-600 text-white w-max mx-auto bottom-12 p-2 rounded-lg select-none shadow-sm shadow-black z-[60] absolute">
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
    </div>
  );
}
