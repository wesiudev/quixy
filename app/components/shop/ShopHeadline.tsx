export default function ShopHeadline({ title }: { title: string }) {
  return (
    <div
      className={`bg-white w-4/5 lg:w-3/4 h-max py-12 flex items-center justify-center mx-auto rounded-xl relative overflow-hidden shadow-md shadow-green-800 ${
        title === "Usługi programistyczne" ? "-mt-16" : "mt-12"
      }`}
    >
      <h1 className="text-2xl lg:text-4xl h-max mx-auto font-coco font-bold z-[100] text-center">
        {title}
      </h1>
      {/* accents */}
      <div className="absolute -left-2 md:left-12 -top-2 bg-green-300 rounded-full w-8 h-8 lg:w-12 lg:h-12"></div>
      <div className="absolute -left-12  md:left-24 -bottom-12 md:-bottom-6  bg-green-300 rounded-full w-24 h-24"></div>
      <div className="absolute -right-12  md:right-24 -top-12 md:-top-6  bg-green-300 rounded-full w-24 h-24"></div>
    </div>
  );
}
