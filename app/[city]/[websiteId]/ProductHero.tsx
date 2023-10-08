import Image from "next/image";
import heroImg from "../../assets/macbook-color.webp";
export default function ProductHero({ page }: { page: any }) {
  return (
    <div className="h-screen w-screen relative font-coco">
      <div className="absolute left-0 top-0 w-full h-full flex overflow-hidden z-0">
        <Image
          src={heroImg}
          width={1980}
          height={1359}
          alt={`quixy hero page ${page.name}`}
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full z-10 text-white">
        <div className="relative w-full h-full ">
          <div className="absolute bottom-24 left-3 lg:left-[8vw] h-max prose lg:prose-xl prose-invert">
            <div className="relative content-[''] after:w-max after:h-px after:bg-gray-400 after:bg-opacity-50 after:absolute after:-bottom-2 after:left-0">
              <h1 className="font-bold text-white">{page.name}</h1>
            </div>
            <div className="w-[80%] -mt-6 italic font-light">
              <h4 className="font-normal">{page.description.about}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}