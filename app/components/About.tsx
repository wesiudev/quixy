import view from "@/app/assets/view.png";
import view2 from "@/app/assets/view2.png";
import Image from "next/image";
import connector from "@/app/assets/laczenie-sekcji-strony-www-o-nas.png";

export default function About({ content }: { content: any }) {
  return (
    <div className="min-h-screen w-screen  px-[8vw] pt-12 pb-12 bg-gray-500 font-coco relative z-[102]">
      <Image
        width={1024}
        height={1024}
        src={view}
        alt="Quixy.pl tworzenie stron internetowych wizytówek Warszawa, Grudziadz, Gdańsk."
        className="absolute right-24 top-[30vh] w-[55vw] lg:w-[35vw] opacity-40 xl:opacity-70"
      />
      <Image
        width={1024}
        height={1024}
        src={view2}
        alt="Quixy.pl strony pod pixel. Tworzenie stron landingowych w całej Polsce"
        className="absolute right-24 bottom-[10vh] w-[55vw] lg:w-[35vw] opacity-40 xl:opacity-70"
      />
      <Image
        width={1080}
        height={300}
        src={connector}
        alt="Tworzenie grafiki komputerowej na quixy.pl w całej Polsce"
        className="w-full absolute left-0 top-0 -translate-y-[99%] scale-125 lg:scale-100"
      />
      <Image
        width={1080}
        height={300}
        src={connector}
        alt="Strony WWW Polska. Sprawdź ofertę - tworzymy strony internetowe w całej Polsce. Strona internetowa Warszawa, Gdańsk, Kraków."
        className="w-full absolute left-0 bottom-0 translate-y-[99%] rotate-180 scale-125 lg:scale-100"
      />
      <div className="flex flex-col relative">
        <h1 className="relative text-5xl sm:text-8xl lg:text-7xl font-bold drop-shadow-xl shadow-black text-green-300">
          KIM JESTEŚMY?
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-green-300 text-[13px]">
          {content[0].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[0].p}</p>
        <h1 className="relative text-5xl sm:text-8xl lg:text-7xl font-bold drop-shadow-xl shadow-black  mt-24 text-green-300">
          NASZA MISJA
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-green-300 text-[13px]">
          {content[1].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[1].p}</p>
        <h1 className="relative text-4xl font-bold drop-shadow-xl shadow-black text-blue-300 mt-12">
          Jakość, nie - jakoś
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-blue-300 text-[13px]">
          {content[2].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[2].p}</p>
        <h1 className="relative text-4xl font-bold drop-shadow-xl shadow-black text-blue-300 mt-12">
          Kreatywność
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-blue-300 text-[13px]">
          {content[3].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[3].p}</p>
        <h1 className="relative text-4xl font-bold drop-shadow-xl shadow-black text-blue-300 mt-12">
          Doświadczenie
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-blue-300 text-[13px]">
          {content[4].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[4].p}</p>
        <h1 className="relative text-4xl font-bold drop-shadow-xl shadow-black text-blue-300 mt-12">
          Indywidualne podejście
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-blue-300 text-[13px]">
          {content[5].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[5].p}</p>
        <h1 className="relative text-4xl font-bold drop-shadow-xl shadow-black text-blue-300 mt-12">
          Obszar działania
        </h1>
        <h2 className="relative font-bold drop-shadow-xl shadow-black text-blue-300 text-[13px]">
          {content[6].h2}
        </h2>
        <p className="text-white mt-3 prose lg:prose-xl">{content[6].p}</p>
      </div>
    </div>
  );
}
