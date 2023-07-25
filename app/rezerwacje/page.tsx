/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Interactions from "./Interactions";

async function getServicesList() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const services = req.json();
  return services;
}

export default async function Reservations() {
  const { services } = await getServicesList();
  return (
    <div className="w-[90vw] mx-auto pb-12">
      <h1 className="font-sans italic font-light p-3 text-black bg-rose-200 rounded-md w-max text-xs sm:text-lg">
        /{" "}
        <Link href="/" className="hover:underline hover:underline-offset-2">
          home
        </Link>{" "}
        /{" "}
        <Link
          href={`/rezerwacje`}
          className="hover:underline hover:underline-offset-2"
        >
          rezerwacje
        </Link>
      </h1>
      <div className="bg-rose-500 p-3 lg:p-6 rounded-md mt-8">
        <h1 className="text-4xl font-bold ">Wybierz usługę</h1>
        <h2 className="text-xl sm:text-2xl pt-3">Cena usługi mogą różnić:</h2>
        <ul className="text-xl ">
          <li className="flex flex-row items-center">
            <div className="w-max h-max">
              <FaStar className="mr-2 w-4 h-4" />
            </div>
            w dni świąteczne doliczam 20zł do usługi
          </li>
          <li className="flex flex-row items-center">
            <div className="w-max h-max">
              <FaStar className="mr-2 w-4 h-4" />
            </div>
            w dni weekendowe doliczam 20zł do usługi
          </li>
          <li className="flex flex-row items-center">
            <div className="w-max h-max">
              <FaStar className="mr-2 w-4 h-4" />
            </div>
            doliczam 10zł za dojazd
          </li>
        </ul>
      </div>
      <Interactions services={services} />
    </div>
  );
}
