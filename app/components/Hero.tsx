import Image from "next/image";
import hero from "../assets/bg.png";
import hero2 from "../assets/bg2.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <div className="h-[25vh] w-screen flex items-center overflow-hidden top-[50%] -translate-y-[50%] absolute flex-col lg:flex-row bg-gradient-to-b from-green-500  to-blue-500">
        {/* first plane image */}
        <Image
          src={hero}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] z-10 object-cover"
        />
        <Image
          src={hero2}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute right-0 h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] z-[5] object-cover"
        />

        <div className="flex items-center text-center justify-center text-6xl w-full h-full absolute right-0 top-0 font-coco text-white drop-shadow-2xl shadow-black z-50 bg-blue-500 bg-opacity-20">
          <div className="relative flex flex-col">
            <div className=" selection:bg-blue-400">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg shadow-black">
                Utrzyj nosa konkurencji!
              </span>
            </div>
            <div className="mt-3">
              <Link
                href="/oferta"
                className="py-2 lg:py-5 px-3 lg:px-8 text-white bg-green-500 text-xl rounded-md shadow-md shadow-gray-700"
              >
                Zamów stronę!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen mt-0 bg-gray-900 bg-opacity-75">
        {/* second plane image */}
        <Image
          src={hero}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] -z-[5] opacity-100 object-cover blur-sm"
        />
        <Image
          src={hero2}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] right-0 -z-10 opacity-100 object-cover blur-sm"
        />
      </div>
    </div>
  );
}
