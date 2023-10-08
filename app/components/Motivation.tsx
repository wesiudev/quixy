import Image from "next/image";
import watchImage from "../assets/watch-vector-gradient-free-image-quixy.png";
export default function Motivation() {
  return (
    <div className="bg-[#1b1b1b] text-white py-20 lg:py-36 w-full px-3 lg:px-[12vw] relative z-50">
      <div className="absolute w-auto h-full hidden xl:block  right-0 2xl:right-[12vw] top-0">
        <Image
          src={watchImage}
          width={1024}
          height={1024}
          alt="watch-vector-gradient-free-image-quixy"
          className="h-full w-auto opacity-10"
        />
      </div>
      <div className="w-full mx-auto relative z-50">
        <div className="text-left ">
          <h1 className="font-extrabold text-4xl md:text-6xl ">
            <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              Chętnie zajmiemy się tym za ciebie
            </span>
          </h1>

          <p className="text-lg md:text-2xl w-full xl:w-[70%] my-4 text-left">
            Nasze profesjonalne{" "}
            <span className="lg:font-bold text-white lg:bg-gradient-to-r lg:from-purple-500 lg:to-green-500 lg:bg-clip-text lg:text-transparent">
              usługi projektowania stron internetowych{" "}
            </span>
            zapewniają Twojej firmie wyjątkową obecność online. Z dumą tworzymy
            strony wizytówki, które przyciągają uwagę, zwiększają zaufanie
            klientów i wspierają rozwój Twojego biznesu.
          </p>
        </div>
      </div>{" "}
      <div className="w-full items-center flex gap-2 xl:gap-0 lg:w-[75%] xl:w-[65%] 2xl:w-[55%] lg:flex-wrap xl:-ml-1 font-coco overflow-x-scroll lg:overflow-hidden scrollbar py-3 lg:py-0">
        {[
          "Tworzenie stron internetowych",
          "Frontend development",
          "SEO",
          "Backend development",
          "UI",
          "Kampanie reklamowe",
          "Reklamy online",
          "UX",
          "Programowanie",
          "Promowanie",
          "Kodowanie",
          "Design",
        ].map((item: any, i: any) => (
          <div
            key={i}
            className="bg-purple-700 border-px border-purple-900 p-1.5 px-3 text-white rounded-lg font-light xl:m-1"
          >
            <div className="w-max">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}