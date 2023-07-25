// "use client";

import { FaCalendarCheck } from "react-icons/fa";

export const Reserve = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-rose-300 via-rose-100 to-rose-300 w-full h-max flex items-center justify-end py-24">
      <div className="w-full lg:w-[80vw] text-gray-100  bg-rose-400 py-12 lg:rounded-l-full">
        <div className="mx-auto pl-10 pr-12 flex flex-row h-full items-center">
          <FaCalendarCheck className="h-24 w-24 mr-6 hidden lg:block" />
          <div className="w-full">
            <h1 className="flex flex-row items-center text-3xl font-bold w-full ">
              Rezerwacje online
            </h1>
            <h2 className="font-light w-full pt-6 flex flex-col sm:flex-row items-center lg:pr-[12vw]  text-xl lg:text-2xl relative">
              Na stronie istnieje możliwość zarezerwowania spotkania poprzez
              wybranie dogodnego terminu oraz skontaktowanie się w celu
              ustalenia dokładnej lokalizacji. Możliwy jest również dojazd do
              klientów.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
