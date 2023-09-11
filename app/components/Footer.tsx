import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { FaArrowRight, FaInstagram, FaFacebook, FaBlog } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
export const Footer = () => {
  return (
    <div className="w-full  bg-green-400 min-h-[30vh] pt-48 pb-24">
      <div className="flex flex-col items-center justify-end">
        <Image
          className="w-[200px] lg:w-[300px]"
          src={logo}
          width={420}
          height={420}
          alt="Quixy.pl Tworzenie Stron www logo"
        />
      </div>
    </div>
  );
};
