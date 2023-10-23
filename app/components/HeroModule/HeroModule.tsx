import Image from "next/image";
import Dialog from "./Dialog";

export default function HeroModule({ filter }: { filter?: boolean }) {
  return (
    <>
      <div className="h-[35vh] lg:h-[35vh] duration-1000 w-screen flex items-center overflow-hidden top-[50%] -translate-y-[50%] absolute flex-col lg:flex-row bg-gradient-to-b from-green-500  to-blue-500">
        {/* first plane image */}
        <Image
          src="/assets/bg.webp"
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen -left-[12vw] xl:-left-[5vw] w-auto overflow-hidden top-[50%] -translate-y-[50%] z-10 object-cover"
        />
        <Image
          src="/assets/bg2.webp"
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="hidden lg:block absolute -right-[12vw] 2xl:-right-[3vw] h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] z-[5] object-cover"
        />

        <div
          className={`flex items-center text-center justify-center text-6xl w-full h-full absolute right-0 top-0 font-coco text-white drop-shadow-2xl shadow-black z-50 ${
            filter ? " bg-black bg-opacity-60" : " bg-zinc-600 bg-opacity-20"
          }`}
        >
          {/* user dialog with the lion */}
          <Dialog />
        </div>
      </div>
      <div className="w-screen h-screen mt-0 bg-zinc-900 bg-opacity-75">
        {/* second plane image */}
        <Image
          src="/assets/bg.webp"
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="absolute h-screen w-auto overflow-hidden -left-[12vw] xl:-left-[5vw] top-[50%] -translate-y-[50%] -z-[5] opacity-100 object-cover blur-md"
        />
        <Image
          src="/assets/bg2.webp"
          width={1920}
          height={1280}
          alt="Hero Image Tworzenie stron internetowych Quixy.pl"
          className="hidden lg:block absolute h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] -right-[12vw] 2xl:-right-[3vw] -z-10 opacity-100 object-cover blur-md"
        />
      </div>
    </>
  );
}
