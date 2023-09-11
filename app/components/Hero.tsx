import Image from "next/image";
import hero from "../assets/bg.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <div className="h-[25vh] w-screen flex items-center overflow-hidden top-[50%] -translate-y-[50%] absolute flex-col lg:flex-row bg-green-500">
        <Image
          src={hero}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] z-10 object-cover"
        />

        <div className="flex items-center text-center justify-center text-6xl w-full h-full absolute right-0 top-0 font-coco text-white drop-shadow-2xl shadow-black z-50 bg-black bg-opacity-20">
          <div className="relative flex flex-col">
            <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] opacity-5 scale-150 -z-[51] select-none">
              <span className="text-3xl sm:text-4xl lg:text-5xl text-yellow-400 mr-3 lg:mr-4 font-bold underline underline-offset-4 ">
                Utrzyj
              </span>
              <span className="mr-3 lg:mr-4 italic text-3xl sm:text-4xl lg:text-5xl">
                nosa
              </span>
              <span className="italic text-3xl sm:text-4xl lg:text-5xl">
                konkurencji!
              </span>
            </div>
            <div className=" selection:bg-green-400">
              <span className="text-3xl sm:text-4xl lg:text-5xl text-yellow-400 mr-3 lg:mr-4 font-bold underline underline-offset-4">
                Utrzyj
              </span>
              <span className="mr-3 lg:mr-4 italic text-3xl sm:text-4xl lg:text-5xl">
                nosa
              </span>
              <span className="italic text-3xl sm:text-4xl lg:text-5xl">
                konkurencji!
              </span>
            </div>
            <div className="mt-3">
              <Link
                href="/oferta"
                className="py-3 px-5 text-gray-700 bg-yellow-400 text-xl rounded-md shadow-md shadow-gray-700"
              >
                Zamów stronę!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen mt-0 bg-green-900 bg-opacity-75">
        <Image
          src={hero}
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="fixed h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] -z-10 opacity-60 object-cover"
        />
      </div>
    </div>
  );
}
