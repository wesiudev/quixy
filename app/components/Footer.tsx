import Image from "next/image";
import Link from "next/link";
import {
  FaArrowDown,
  FaArtstation,
  FaFacebook,
  FaMap,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FaCircleQuestion, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#212121] text-white min-h-[30vh] pt-24 pb-24 font-coco px-5 lg:px-20">
        <div className="bg-[#191919] p-2 rounded-xl">
          <span className="text-white font-bold  text-2xl lg:text-3xl">
            Aktywne Oferty
          </span>
          <div className="grid grid-cols-2 mt-3">
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/grudziadz"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Grudziądz
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/bydgoszcz"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Bydgoszcz
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/krakow"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Kraków
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/gdansk"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Gdańsk
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/poznan"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Poznań
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/warszawa"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Warszawa
            </Link>
            <Link
              className="flex flex-row items-center cursor-pointer hover:text-yellow-400"
              href="/torun"
            >
              <FaStar className="text-yellow-400 mr-2" />
              Toruń
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-[#191919] p-2 rounded-xl">
          <span className="font-bold text-2xl lg:text-3xl">Linki</span>
          <div className="grid grid-cols-2 w-full gap-1 mt-3 ">
            <Link
              className="flex flex-row items-center hover:text-blue-500 cursor-pointer"
              href=""
            >
              <FaFacebook className="w-5 h-5 mr-2 text-blue-500" />
              Facebook
            </Link>
            <Link
              className="flex flex-row group items-center mt-1 cursor-pointer"
              href=""
            >
              <FaXTwitter className="w-5 h-5 mr-2 text-white" />
              <span className="group-hover:text-blue-500"> Twitter</span>
            </Link>
            <Link
              href="/sitemap-0.xml"
              className="flex flex-row items-center hover:text-blue-500 w-max"
              title="Zobacz sitemap.xml"
            >
              <FaMap className="w-5 h-5 mr-2 text-white" />
              Mapa Strony
            </Link>
            <Link
              href="/blog"
              className="flex flex-row items-center hover:text-blue-500 w-max"
              title="Sprawdź bloga"
            >
              <FaArtstation className="w-5 h-5 mr-2 text-white" />
              Blog
            </Link>
            <Link
              href="/faq"
              className="flex flex-row items-center hover:text-blue-500 w-max"
              title="Sprawdź bloga"
            >
              <FaCircleQuestion className="w-5 h-5 mr-2 text-white" />
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-center w-full mt-12 pb-12">
        <div className="flex flex-col my-12 lg:my-0">
          <Image
            className="w-[200px] lg:w-[300px]"
            src="/assets/logo.png"
            width={420}
            height={420}
            alt="Quixy.pl Tworzenie Stron www logo"
          />
        </div>
        <div className="flex flex-row items-center gap-6 text-white mt-12">
          <div className="">
            Autor:{" "}
            <Link
              target="_blank"
              href="https://wesiu.dev"
              className="text-green-400"
            >
              wesiu.dev
            </Link>
          </div>
          <div className="flex flex-row items-center  font-bold">
            &copy;<span className="text-yellow-400 font-bold mr-1">Quixy</span>{" "}
            <span className="italic font-normal">2023</span>
          </div>
        </div>
      </div>
    </>
  );
}
