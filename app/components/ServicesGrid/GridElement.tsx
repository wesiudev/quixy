/* eslint-disable @next/next/no-img-element */
import { IService } from ".";
export const GridElement = ({
  index,
  serviceName,
  serviceDesc,
  serviceImage,
}: IService) => {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center w-full h-full">
      <div className=" rounded-t-md relative">
        <img
          src={serviceImage}
          alt={
            index % 2 > 0
              ? "Uslugi Paznokcie Grudziądz Rezerwacja Zdjęcie"
              : "Usługi Mancicure Grudziądz Rezerwacja Zdjęcie"
          }
          className="rounded-t-md"
        />
        <div className="flex justify-between flex-col">
          <div className="font-sans pb-3 pt-5 mx-auto w-max text-2xl text-black ">
            <span>{serviceName}</span>
            <div className="h-1 w-12 bg-rose-300 mx-auto mt-3 rounded-lg"></div>
          </div>
          <div className="p-3 text-black font-sans h-max">{serviceDesc}</div>
        </div>
      </div>
    </div>
  );
};
