import Image from "next/image";
import logo from "@/public/favicon.png";
import { FaArrowRight, FaInstagram, FaFacebook, FaBlog } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-rose-300 h-max">
      <div className="w-[90vw] grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3  h-max border-t-2 border-rose-200 py-12">
        <Image
          width={200}
          height={200}
          src={logo}
          alt=""
          className="mx-auto lg:mx-0"
        />
        <div className="text-gray-50 flex flex-col mx-auto lg:mx-0 mt-8 lg:mt-0 w-3/4 sm:w-full justify-center font-sans font-regular">
          <div className="text-2xl relative">
            <div className="absolute -left-10 -top-5 rotate-12 text-green-100">
              <FaArrowRight />
            </div>{" "}
            Znajdziesz mnie tutaj:
          </div>
          <div className="mt-2 text-xl font-light italic grid grid-rows-3 gap-y-2">
            <div className="flex flex-row items-center ">
              <FaInstagram className="mr-1" />
              <span>Instagram </span>
            </div>
            <div className="flex flex-row items-center">
              <FaFacebook className="mr-1" />
              <span> Facebook </span>
            </div>
            <div className="flex flex-row items-center">
              <FaBlog className="mr-1" />
              <span> Blog </span>
            </div>
          </div>
        </div>
        <div className="text-gray-50 flex flex-col justify-center font-sans font-regular mx-auto lg:mx-0 mt-8 lg:mt-0 w-3/4 sm:w-full pb-12">
          <div className="text-2xl relative">
            <div className="absolute -left-10 -top-5 rotate-12 text-green-100"></div>{" "}
            Chcesz o coś zapytać?
            <div className="mt-2 flex flex-col justify-between">
              <input
                type="text"
                className="w-full text-lg p-2 text-black focus:outline-rose-400"
                placeholder="email"
              />
              <div className="relative h-max">
                <textarea
                  name=""
                  id=""
                  className="w-full resize-none p-2 text-lg mt-1 text-black focus:outline-rose-400"
                  placeholder="w czym mogę pomóc?"
                />
                <button className="absolute right-2 top-[50%] -translate-y-[50%] w-12 h-12 bg-rose-400 items-center justify-center flex hover:bg-rose-300">
                  <IoMdSend color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
