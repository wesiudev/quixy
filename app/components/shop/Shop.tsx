// TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO

// PO KLIKNIECIU NA USLUGE JEJ OPIS
// OPIS RÓŻNICH STRON INTERNETOWYCH PONIŻEJ WSZYSTKIEGO
// TECHNOLOGIE DO TWORZENIA STRON INTERNETOWYCH (NAWET TE KTORYCH NIE UZYWASZ)
// OPISY MIAST POD KAŻDEGO SLUGA
// "PEŁNIMY USŁUGI GRAFICZNE PROGRAMUJEMY STRON NA TERENIE ... ZAPRASZAMY DO KONTAKTU"

// TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO

import { FaArrowRight } from "react-icons/fa";
import ShopHeadline from "./ShopHeadline";
import ShopItem from "./ShopItem";
import Link from "next/link";
export default function Shop({
  ItemsList,
  mt,
}: {
  ItemsList: any;
  mt?: boolean;
}) {
  const ShopContent = ItemsList.shopItems;
  return (
    <div
      className={`min-h-screen w-screen bg-[#1b1b1b] bg-opacity-80 flex flex-col pb-48 relative z-50 ${
        mt && "pt-[104px]"
      }`}
    >
      {/* web services */}
      <ShopHeadline title="Oferowane usługi" />
      <h1 className="px-8 lg:px-[12vw] text-white font-bold text-3xl mt-6 flex flex-row items-center">
        <FaArrowRight className="mr-3" />
        Strony www
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 w-4/5 lg:w-3/4 mx-auto gap-6 lg:gap-12 mt-6">
        {ShopContent.map((service: any, i: any) => (
          <Link
            className={`${i > 2 && "hidden"} `}
            key={i}
            href={`/${service.city}/${service.websiteId}`}
          >
            <ShopItem index={i} key={i} item={service} isGraphic={false} />
          </Link>
        ))}
      </div>
      <h1 className="px-8 lg:px-[12vw] text-white font-bold text-3xl mt-6 flex flex-row items-center">
        <FaArrowRight className="mr-3" />
        Grafika komputerowa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-4/5 lg:w-3/4 mx-auto mt-6 gap-6 lg:gap-12 pb-12">
        {ShopContent.map((service: any, i: any) => (
          <>
            {service.isGraphic && (
              <Link key={i} href={`/${service.city}/${service.websiteId}`}>
                <ShopItem
                  index={i}
                  key={i}
                  item={service}
                  isGraphic={service.isGraphic}
                />
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
