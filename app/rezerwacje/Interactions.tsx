/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { IService } from "../components/ServicesGrid";
import { useIsVisible } from "react-is-visible";
import moment from "moment";
import MonthView from "./MonthView";
import DriveToClient from "./DriveToClient";

export default function Interactions({ services }: { services: IService[] }) {
  const [chosenService, setChosenService] = useState({
    name: "",
    time: { month: "", day: "" },
    drive: false,
  });

  // isVisible
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);

  function setDate(day: any, month: any) {
    setChosenService({
      ...chosenService,
      time: { month: month, day: day },
    });
  }
  function setDriveToClient(arg: boolean) {
    setChosenService({
      ...chosenService,
      drive: arg,
    });
  }

  //finalize order

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function finalizeOrder() {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    const query = `${(
      chosenService.drive +
      chosenService.name +
      chosenService.time.day +
      chosenService.time.month
    ).toString()}`;

    router.push(
      `/rezerwacje/finalizacja?drive=${chosenService.drive}&name=${
        chosenService.name
      }&date=${chosenService.time.day + " " + chosenService.time.month}`
    );
  }

  return (
    <div>
      <div className="w-1 h-1" ref={nodeRef}></div>
      {chosenService.name && (
        <h1 className={`bg-rose-500 p-3 text-white font-bold rounded-xl mt-6`}>
          <div>Wybrana usługa: {chosenService.name}</div>
        </h1>
      )}
      {chosenService.name && (
        <h1
          style={{ backdropFilter: " blur(10px)" }}
          className={`bg-rose-500 p-3 text-white font-bold bg-opacity-50  text-2xl mt-0 top-0 rounded-b-md fixed w-[90vw] left-[50%] -translate-x-[50%]  z-[1202]   ${
            !isVisible
              ? " fixed translate-y-0 duration-500"
              : "fixed translate-y-[-30vh] duration-500"
          }`}
        >
          <div className={` text-white font-bold rounded-xl flex flex-col`}>
            <div>Usługa: {chosenService.name}</div>
            <div className="mt-2">
              Termin: {chosenService.time.month} {chosenService.time.day}
            </div>
          </div>
        </h1>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 w-full lg:w-max gap-2 lg:gap-6">
        {services.map((service: any, idx: number) => (
          <button
            onClick={() =>
              setChosenService({ ...chosenService, name: service.serviceName })
            }
            key={idx}
            className={`rounded-xl relative lg:w-[250px] bg-rose-500 border-4  hover:border-white ${
              chosenService.name === service.serviceName
                ? "border-white"
                : "border-rose-300"
            }`}
          >
            <img
              src={service.serviceImage}
              alt={
                idx % 2 > 0
                  ? "Uslugi Paznokcie Grudziądz Rezerwacja Zdjęcie"
                  : "Usługi Mancicure Grudziądz Rezerwacja Zdjęcie"
              }
              className="rounded-t-md w-full"
            />
            <div className="flex justify-between flex-col">
              <div className="font-sans pb-3 pt-5 mx-auto w-max text-sm sm:text-2xl text-white ">
                <span>{service.serviceName}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="bg-rose-500  p-3 pt-6 lg:p-6 rounded-xl mt-6">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Wybierz termin
        </h1>
        {chosenService.time.month !== "" && (
          <h1
            className={`bg-rose-400 p-3 text-white font-bold text-sm sm:text-xl rounded-xl mt-3 w-full text-center lg:text-left lg:w-max`}
          >
            <div>
              Wybrany termin:{" "}
              {chosenService.time.month + " " + chosenService.time.day}
            </div>
          </h1>
        )}
        <h2 className="bg-rose-400 sm:bg-rose-500 text-xl sm:text-2xl  text-center sm:text-left border-l-2 border-r-2 sm:border-r-0 sm:border-l-0 border-white py-6 mb-6 sm:mb-0 sm:py-3 mt-6 sm:mt-0">
          Przed wybraniem terminu upewnij się, że masz wtedy chwilę dla siebie,
          aby uniknąć nieporozumień.
        </h2>
        <div className="bg-rose-500 text-white flex flex-col flex-wrap">
          <MonthView setChosenService={setDate} chosenService={chosenService} />
          <DriveToClient
            setDriveToClient={setDriveToClient}
            driveToTheClient={chosenService.drive}
          />
          {chosenService.name && chosenService.time.month !== "" && (
            <button
              onClick={finalizeOrder}
              className="bg-rose-400 p-3 px-6 text-3xl mt-3 rounded-xl border-4 border-rose-500 hover:border-white w-max mx-auto"
            >
              Zarezerwuj
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
