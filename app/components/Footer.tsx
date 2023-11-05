import Image from "next/image";
import Link from "next/link";
export default function Footer({ content }: { content: any }) {
  return (
    <div className="w-full grid grid-cols-1 bg-[#212121] text-white min-h-[30vh] pt-48 pb-24 font-coco">
      <div className="">
        <div className="flex flex-col items-center justify-start my-12 lg:my-0">
          <Image
            className="w-[200px] lg:w-[300px]"
            src="/assets/logo.png"
            width={420}
            height={420}
            alt="Quixy.pl Tworzenie Stron www logo"
          />
        </div>
        <div className="text-center  w-max mx-auto">
          <div className="text-3xl lg:text-4xl font-bold my-6">
            <h1>Aktywne oferty</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {content.map((page: any, i: number) => (
              <div key={i} className="">
                <div className=" flex flex-col duration-300 ">
                  <Link
                    className="my-2 font-light "
                    href={`/${page.city}/${page.websiteId}`}
                  >
                    {page.linkName}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col">
        <h1 className="flex text-2xl lg:text-3xl flex-col items-center justify-center mt-6 lg:mt-0">
          Tu nas znajdziesz{" "}
          <div className="flex flex-row items-center justify-evenly w-[80%] my-12">
            {" "}
            <FaArrowDown />
            <FaArrowDown />
            <FaArrowDown />
          </div>
        </h1>
      </div> */}
    </div>
  );
}
