"use client";
import { WebsiteOffer } from "@/app/types";
import AOS from "aos";
import { useEffect } from "react";
export default function Specifications({ item }: { item: WebsiteOffer }) {
  useEffect(() => {
    AOS.init({
      offset: 25,
    });
  }, []);
  return (
    <div className="lg:w-[57vw]">
      <div className="p-3 lg:p-6 bg-[#404040]">
        <h1 className="text-4xl font-bold mb-3">
          Czym jest <span className="text-green-400">{item?.name}?</span>
        </h1>
        <h2>{item?.description.about}</h2>
      </div>
      <div className="prose prose-invert mt-24">
        <h2>Co oferuje Quixy?</h2>
        <ul className="border-l-4 border-green-400 ">
          {item?.description.features.map((item: any, i: number) => (
            <li key={i} className="w-full flex flex-col">
              <span
                data-aos="fade-left"
                data-aos-delay={i * 70}
                className="font-bold relative p-2 text-xl"
              >
                <div className="absolute left-0 -translate-x-[112%] h-[4px] w-8 bg-green-400 top-[50%] -translate-y-[50%]"></div>
                {item.title}
              </span>
              <span className="p-2">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
