// TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO

// PO KLIKNIECIU NA USLUGE JEJ OPIS
// OPIS RÓŻNICH STRON INTERNETOWYCH PONIŻEJ WSZYSTKIEGO
// TECHNOLOGIE DO TWORZENIA STRON INTERNETOWYCH (NAWET TE KTORYCH NIE UZYWASZ)
// OPISY MIAST POD KAŻDEGO SLUGA
// "PEŁNIMY USŁUGI GRAFICZNE PROGRAMUJEMY STRON NA TERENIE ... ZAPRASZAMY DO KONTAKTU"

// TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO

import ShopHeadline from "./ShopHeadline";
import ShopItem from "./ShopItem";
import graphicItems from "@/public/json/ShopContentGraphic.json";
import Link from "next/link";
export default function Shop({ ItemsList }: { ItemsList: any }) {
  const ShopContent = ItemsList.shopItems;
  return (
    <div className="min-h-screen w-screen bg-green-400 flex flex-col pb-48 z-[101] relative">
      {/* web services */}
      <ShopHeadline title="Usługi programistyczne" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-4/5 lg:w-3/4 mx-auto mt-12 gap-6 lg:gap-12">
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
      <ShopHeadline title="Usługi graficzne" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-4/5 lg:w-3/4 mx-auto mt-12 gap-6 lg:gap-12 pb-12">
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
