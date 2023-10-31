import Image from "next/image";
import Link from "next/link";

export default function One() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full   bg-gradient-to-b from-blue-500 to-green-500">
      {" "}
      <Image
        src="/assets/underhero2.png"
        width={1024}
        height={700}
        alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
        className="w-full h-auto bg-white p-12 "
      />
      <div className="text-white text-4xl lg:text-5xl 2xl:text-[76px] font-coco font-bold flex flex-col items-center lg:items-start lg:justify-center px-12 py-24 lg:py-0 drop-shadow-xl shadow-black">
        <div data-aos="fade-left" data-aos-dealy={600} className="">
          {" "}
          Strony
        </div>
        <div data-aos="fade-left" data-aos-dealy={900} className="">
          {" "}
          internetowe
        </div>
        <div data-aos="fade-left" data-aos-dealy={1200} className="">
          {" "}
          w
        </div>
        <div data-aos="fade-left" data-aos-dealy={1500} className="">
          {" "}
          przystępnych
        </div>
        <div data-aos="fade-left" data-aos-dealy={1800} className="">
          {" "}
          cenach.
        </div>
      </div>
    </div>
  );
}
