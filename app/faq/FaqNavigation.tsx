"use client";
import Link from "next/link";
import { useState } from "react";
import { polishToEnglish } from "../utils/polishToEnglish";

export default function FaqNavigation() {
  const cities = [
    "Warszawa",
    "Kraków",
    "Poznań",
    "Grudziądz",
    "Bydgoszcz",
    "Toruń",
  ];
  const [location, setLocation] = useState("shop");
  return (
    <div className="flex flex-row space-x-3 flex-wrap items-center justify-center">
      {cities.map((item: any, i: any) => (
        <Link
          onClick={() => setLocation(polishToEnglish(item))}
          className={`${
            location === polishToEnglish(item)
              ? "text-yellow-400"
              : "text-white hover:text-yellow-400"
          } p-3 bg-[#101010] rounded-md font-coco text-sm]`}
          key={i}
          href={`/faq/${polishToEnglish(item)}`}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
