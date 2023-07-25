import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

export const Announcer = () => {
  return (
    <div className="bg-gradient-to-b from-rose-300 via-rose-100 to-rose-300 w-full h-max flex justify-center pt-0 md:pt-20 pb-12 z-[999]">
      <div className="w-full h-max">
        <div className="flex flex-col bg-rose-400 py-12 h-max text-gray-100 shadow-md shadow-rose-400">
          <h1 className="relative text-3xl sm:text-4xl font-sans font-bold w-[90vw] sm:w-3/4 mx-auto flex flex-row">
            <div className="absolute -left-14 -top-5 rotate-12 text-rose-200 opacity-75 hidden lg:block">
              <FaArrowRight />
            </div>{" "}
            <FaInfoCircle className="-left-11 top-[2px] hidden lg:absolute" />
            Warto zarezerwować czas dla siebie!
          </h1>
          <h2 className="text-xl sm:text-2xl font-sans h-full items-center font-light  flex mt-6 w-[90vw] sm:w-3/4 justify-center sm:justify-start mx-auto">
            Poświęcenie czasu na wykonanie manicure daje szansę na relaks,
            odprężenie i skupienie się na sobie, tworząc uspokajające i
            odmładzające doświadczenie oraz wprowadza powiew świeżości do
            Twojego życia.
          </h2>
        </div>
      </div>
    </div>
  );
};
