import Image from "next/image";
import underhero from "../assets/underhero2.png";
import websites from "../assets/websites.png";
export default function UnderHero() {
  return (
    <div className="min-h-screen w-screen bg-green-500 flex flex-col lg:flex-row lg:pl-[8vw] z-[100] relative">
      <div className=" rounded-lg w-[90vw] lg:w-1/2 h-max  bg-white relative mt-24 mx-auto">
        <h1 className="py-6 font-coco text-4xl text-center font-bold selection:bg-green-400 selection:text-white">
          Kup unikalną stronę!
        </h1>
        <div className="overflow-hidden flex items-center justify-center">
          <Image
            src={underhero}
            width={1920}
            height={1080}
            alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
            className="w-full h-auto lg:rounded-lg"
          />
        </div>
        <div className="text-center w-full lg:text-left text-md lg:text-lg bg-white rounded-b-lg lg:rounded-tl-lg rounded-bl-lg p-3 font-coco selection:bg-green-400 selection:text-white">
          Każda strona internetowa, tworzona we współpracy z{" "}
          <span className="font-bold"> Quixy </span>jest dostosowywana do
          <span className="font-bold">
            {" "}
            indywidualnych potrzeb każdego klienta{" "}
          </span>{" "}
          i otrzymuje unikalną szatę graficzną.
        </div>
      </div>
      <div className="w-[90vw] mx-auto lg:w-1/2 lg:pl-24 bg-gradient-to-r from-green-500 via-yellow-200 to-green-500 rounded-3xl lg:p-24  pt-12 pb-36 ">
        <Image
          src={websites}
          width={1200}
          height={1200}
          alt="Nie odgrzewamy kotleta obrazek. Portfolio stron internetowych quixy.pl"
          className=""
        />
      </div>
    </div>
  );
}
