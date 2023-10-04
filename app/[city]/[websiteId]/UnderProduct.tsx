import Image from "next/image";
import Link from "next/link";
import watchImage from "../../assets/watch-vector-gradient-free-image-quixy.png";
export default function UnderProduct() {
  return (
    <div className="bg-[#1b1b1b] text-white py-20 lg:py-48 w-full px-3 lg:px-[8vw] relative z-50">
      <div className="absolute w-auto h-full hidden xl:block  right-0 2xl:right-[12vw] top-0">
        <Image
          src={watchImage}
          width={1024}
          height={1024}
          alt="watch-vector-gradient-free-image-quixy"
          className="h-full w-auto opacity-100"
        />
      </div>
      <div className="w-full mx-auto relative z-50">
        <div className="prose lg:prose-xl prose-invert text-left ">
          <h1 className="font-extrabold text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              Chętnie zajmiemy się tym za ciebie...
            </span>
          </h1>
          <p className="text-lg md:text-2xl  text-left">
            Nasze profesjonalne{" "}
            <span className="lg:font-bold text-white lg:bg-gradient-to-r lg:from-purple-500 lg:to-green-500 lg:bg-clip-text lg:text-transparent">
              usługi projektowania stron internetowych{" "}
            </span>
            zapewniają Twojej firmie wyjątkową obecność online. Z dumą tworzymy
            strony wizytówki, które przyciągają uwagę, zwiększają zaufanie
            klientów i wspierają rozwój Twojego biznesu.
          </p>
        </div>
      </div>
    </div>
  );
}
