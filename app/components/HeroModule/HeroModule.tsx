/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Dialog from "./Dialog";

export default function HeroModule({ filter }: { filter?: boolean }) {
  return (
    <>
      <div className="h-screen duration-1000 w-screen flex items-center overflow-hidden top-[50%] -translate-y-[50%] absolute flex-col lg:flex-row bg-gradient-to-b from-green-500  to-blue-500">
        {/* first plane image */}
        <div className="h-[50vh]">
          <Image
            width={1200}
            height={1200}
            src="/assets/bg.webp"
            alt="Hero Image Tworzenie stron internetowych Quixy.pl"
            className="absolute h-screen -left-[12vw] xl:-left-[5vw] min-w-[50vw] overflow-hidden top-[50%] -translate-y-[50%] z-10 object-cover"
          />
          <Image
            width={1200}
            height={1200}
            src="/assets/bg2.webp"
            alt="Hero Image Tworzenie stron internetowych Quixy.pl"
            className="hidden lg:block absolute -right-[12vw] 2xl:-right-[3vw] h-screen w-auto overflow-hidden top-[50%] -translate-y-[50%] z-[5] object-cover"
          />

          <div
            className={`  flex items-center text-center justify-center text-6xl w-full h-full absolute right-0 top-0 font-coco text-white drop-shadow-2xl shadow-black z-50 ${
              filter ? "" : " "
            }`}
          >
            {/* user dialog with the lion */}
            <Dialog />
          </div>
        </div>
      </div>
    </>
  );
}
